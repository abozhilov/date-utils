import { isValidDate } from '../utils/isValidDate.js';
import { fromDayOfYear } from '../utils/fromDayOfYear.js';
import { parserCodes } from './parser-format-codes.js';

interface CompiledFormat {
    regex: RegExp,
    groups: string[]
}

const FORMAT_TOKEN = {
    TIMESTAMP: 's',
    YEAR: 'y',
    DATE: 'd',
    MONTH: 'm',
    HOUR: 'H',
    MINUTE: 'M',
    SECOND: 'S',
    MILLISECONDS: 'f',
    DAY_OF_YEAR: 'j',
    LITERAL: '%'
} as const;

const regexCache:{[key: string]: CompiledFormat} = Object.create(null);

// Mapping for Date constructor
const dateTimeMapping:{[key: string]: number} = {
    [FORMAT_TOKEN.YEAR]: 0,
    [FORMAT_TOKEN.MONTH]: 1,
    [FORMAT_TOKEN.DATE]: 2,
    [FORMAT_TOKEN.HOUR]: 3,
    [FORMAT_TOKEN.MINUTE]: 4,
    [FORMAT_TOKEN.SECOND]: 5,
    [FORMAT_TOKEN.MILLISECONDS]: 6
} as const;

function isValidPattern(
    tokenSet: Set<string>, 
    requiredTokens: Set<string>, 
    optionalTokens: Set<string> = new Set()
): boolean {
    for (const i of requiredTokens) {
        if (!tokenSet.has(i)) {
            return false;
        }
    }

    for (const i of tokenSet) {
        if (!requiredTokens.has(i) && !optionalTokens.has(i)) {
            return false;
        }
    }

    return true;
}

function validatePattern(tokenSet: Set<string>): void {
    const timeTokens = [
        FORMAT_TOKEN.HOUR,
        FORMAT_TOKEN.MINUTE,
        FORMAT_TOKEN.SECOND,
        FORMAT_TOKEN.MILLISECONDS
    ];
    const dateTimeTokens = [
        FORMAT_TOKEN.DATE,
        FORMAT_TOKEN.MONTH,
        ...timeTokens
    ];    
    if (tokenSet.has(FORMAT_TOKEN.TIMESTAMP)) {
        const pattern = isValidPattern(
            tokenSet,
            new Set([
                FORMAT_TOKEN.TIMESTAMP
            ])
        );
        if (!pattern) {
            throw new SyntaxError(`%${FORMAT_TOKEN.TIMESTAMP} must be used without any other formatting characters`);
        }
    }
    else if (tokenSet.has(FORMAT_TOKEN.DAY_OF_YEAR)) {
        const pattern = isValidPattern(
            tokenSet,
            new Set([
                FORMAT_TOKEN.DAY_OF_YEAR,
                FORMAT_TOKEN.YEAR
            ]),
            new Set(timeTokens)
        );
        if (!pattern) {
            throw new SyntaxError(`%${FORMAT_TOKEN.DAY_OF_YEAR} must be used in conjunction with %${FORMAT_TOKEN.YEAR}`);
        }        
    }
    else {
        const pattern = isValidPattern(
            tokenSet,
            new Set([ 
                FORMAT_TOKEN.YEAR 
            ]),
            new Set(dateTimeTokens)
        );
        if (!pattern) {
            throw new SyntaxError(`%${dateTimeTokens.join(', %')} must be used in conjunction only with %${FORMAT_TOKEN.YEAR}`);
        }
    }       
}

function compile(format: string) {
    if (format in regexCache) {
        return regexCache[format];
    }

    let tokenSet:Set<string> = new Set();
    let isFormatChar = false;
    let regexStr = '';
    let tokens = [];
    let nonSpecialChars = '';

    for (const i of format) {
        if (isFormatChar) {
            if (!(i in parserCodes)) {
                throw new SyntaxError(`Invalid format character - %${i}`);
            }
            if (tokenSet.has(i)) {
                throw new SyntaxError(`Format character is already used - %${i}`);
            }

            regexStr += parserCodes[i];
            isFormatChar = false;

            if (i !== FORMAT_TOKEN.LITERAL) {
                tokens.push(i);
                tokenSet.add(i);
            }
        }
        else if (i !== FORMAT_TOKEN.LITERAL) {
            nonSpecialChars += i;
        }
        else {
            if (nonSpecialChars) {
                regexStr += nonSpecialChars.replace(/[\\^$*+?.()|[\]{}]/g, '\\$&');
                nonSpecialChars = '';
            }
            isFormatChar = true;
        }
    }

    validatePattern(tokenSet);

    const regexParser = {
        regex: new RegExp(`^${regexStr}$`),
        groups: tokens
    };

    regexCache[format] = regexParser;

    return regexParser;
}

export function parseDate(date: string, format: string, isUTC = false) {
    const { regex, groups } = compile(format);
    const tokens = Object.create(null);
    const dateParams = [0, 0, 1, 0, 0, 0, 0];
    const match = date.match(regex);

    if (!match) {
        throw new Error(`Invalid date - ${date}`);
    }

    for (const [i, token] of groups.entries()) {
        let value = Number.parseInt(match[i + 1]);

        if (token === FORMAT_TOKEN.MONTH) {
            value -= 1;
        }

        if (token in dateTimeMapping) {
            dateParams[dateTimeMapping[token]] = value;
        }
        else {
            tokens[token] = value;
        }
    }

    let [y, m, d, h, i, s, f] = dateParams;

    if (FORMAT_TOKEN.TIMESTAMP in tokens) {
        return new Date(tokens[FORMAT_TOKEN.TIMESTAMP]);
    }
    else if (FORMAT_TOKEN.DAY_OF_YEAR in tokens) {
        [y, m, d] = fromDayOfYear(y, tokens[FORMAT_TOKEN.DAY_OF_YEAR]);
    }
    
    if (!isValidDate(y, m, d)) {
        throw new Error(`Invalid date - ${date}`);
    }

    if (isUTC) {
        return new Date(Date.UTC(y, m, d, h, i, s, f));
    }

    return new Date(y, m, d, h, i, s, f); 
}