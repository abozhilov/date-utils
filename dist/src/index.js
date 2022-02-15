import { compileFormat } from './format/compiler.js';
import { parseDate } from './parse/parser.js';
export function format(date, format) {
    return compileFormat(format)(date);
}
export function utcFormat(date, format) {
    return compileFormat(format, true)(date);
}
export function parse(date, format) {
    return parseDate(date, format);
}
export function utcParse(date, format) {
    return parseDate(date, format, true);
}
console.log(parse('2022-09-30', '%y-%m-%d'));
//# sourceMappingURL=index.js.map