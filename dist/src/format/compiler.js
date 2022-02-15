import { getDayOfWeek, getDayOfYear, getISODayOfWeek, getISOWeek, getMondayWeek, getSundayWeek, getTimezoneOffset } from './util-funcs.js';
import { localFormatCodes } from './local-format-codes.js';
import { utcFormatCodes } from './utc-format-codes.js';
const localFunctionsCache = Object.create(null);
const utcFunctionsCache = Object.create(null);
function getFunctionsMap(isUTC) {
    return {
        getDayOfYear: {
            code: getDayOfYear,
            isUsed: false
        },
        getDayOfWeek: {
            code: getDayOfWeek,
            isUsed: false
        },
        getISODayOfWeek: {
            code: getISODayOfWeek,
            isUsed: false
        },
        getISOWeek: {
            code: getISOWeek,
            isUsed: false
        },
        getMondayWeek: {
            code: getMondayWeek,
            isUsed: false
        },
        getSundayWeek: {
            code: getSundayWeek,
            isUsed: false
        },
        getTimezoneOffset: {
            code: isUTC ? '' : getTimezoneOffset,
            isUsed: false
        }
    };
}
export function compileFormat(format, isUTC = false) {
    const cache = isUTC ? utcFunctionsCache : localFunctionsCache;
    const formatCodes = isUTC ? utcFormatCodes : localFormatCodes;
    if (format in cache) {
        return cache[format];
    }
    const { getDayOfYear, getDayOfWeek, getISODayOfWeek, getISOWeek, getMondayWeek, getSundayWeek, getTimezoneOffset } = getFunctionsMap(isUTC);
    let formatBody = ``;
    let formatReturn = ``;
    let isSpecialChar = false;
    for (const ch of format) {
        if (isSpecialChar) {
            if (ch in formatCodes) {
                formatReturn += formatCodes[ch];
            }
            else {
                throw SyntaxError(`Invalid formatting char - %${ch}`);
            }
            if (!getDayOfYear.isUsed && (ch === 'j' || ch === 'U' || ch === 'W')) {
                formatBody += getDayOfYear.code;
                getDayOfYear.isUsed = true;
            }
            if (!getISODayOfWeek.isUsed && (ch === 'W' || ch === 'V')) {
                formatBody += getISODayOfWeek.code;
                getISODayOfWeek.isUsed = true;
            }
            if (ch === 'z' && !getTimezoneOffset.isUsed) {
                formatBody += getTimezoneOffset.code;
                getTimezoneOffset.isUsed = true;
            }
            if (ch === 'U' && !getSundayWeek.isUsed) {
                formatBody += getDayOfWeek.code;
                formatBody += getSundayWeek.code;
                getDayOfWeek.isUsed = true;
                getSundayWeek.isUsed = true;
            }
            if (ch === 'V' && !getISOWeek.isUsed) {
                formatBody += getISOWeek.code;
                getISOWeek.isUsed = true;
            }
            if (ch === 'W' && !getMondayWeek.isUsed) {
                formatBody += getMondayWeek.code;
                getMondayWeek.isUsed = true;
            }
            isSpecialChar = false;
        }
        else if (ch === '%') {
            isSpecialChar = true;
        }
        else if (ch === '`' || ch === '$') {
            formatReturn += `\\${ch}`;
        }
        else {
            formatReturn += ch;
        }
    }
    return new Function('date', `
        ${formatBody}

        return \`${formatReturn}\`;
    `);
}
//# sourceMappingURL=compiler.js.map