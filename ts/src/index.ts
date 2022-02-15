import { compileFormat } from './format/compiler.js';
import { parseDate } from './parse/parser.js';

export function format(date: Date, format: string): string {
    return compileFormat(format)(date);
}

export function utcFormat(date: Date, format: string): string {
    return compileFormat(format, true)(date);
}

export function parse(date: string, format: string): Date {
    return parseDate(date, format);
}

export function utcParse(date: string, format: string): Date {
    return parseDate(date, format, true);
}

console.log(parse('2022-09-30', '%y-%m-%d'));