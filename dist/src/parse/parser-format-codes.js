export const parserCodes = {
    's': '([1-9][0-9]+)',
    // year 0000 - 9999
    'y': '([0-9]{4})',
    // date 00 - 31, padding with leading zeros is optional
    'd': '([1-2][0-9]|3[0-1]|0?[1-9])',
    // month 01 - 12, padding with leading zeros is optional
    'm': '(1[0-2]|0?[1-9])',
    // hour 00 - 23, padding with leading zeros is optional
    'H': '(1[0-9]|2[0-3]|0?[0-9])',
    // minutes 00 - 59, padding with leading zeros is optional
    'M': '([1-5][0-9]|0?[0-9])',
    // seconds 00 - 59, padding with leading zeros is optional
    'S': '([1-5][0-9]|0?[0-9])',
    // milliseconds 000 - 999, padding with leading zeros is optional
    'f': '([1-9][0-9]{1,2}|0?[0-9]{2}|0{0,2}[0-9])',
    // Day of year 001 - 366, padding with leading zeros is optional
    'j': '([1-2][0-9]{1,2}|3[0-5][0-9]|36[0-6]|0?[1-9][0-9]|0{0,2}[1-9])',
    '%': '%'
};
//# sourceMappingURL=parser-format-codes.js.map