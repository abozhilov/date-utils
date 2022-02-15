export const utcFormatCodes = {
    // Weekday as a number (0..6), where 0 is Sunday and 6 is Saturday.
    'w': '${date.getUTCDay()}',
    // Weekday as a number (1..7), where 1 is Monday and 7 is Sunday
    'u': '${date.getUTCDay() || 7}',
    // Day of the month as a zero-padded number.
    'd': '${`0${date.getUTCDate()}`.slice(-2)}',
    // Month as a zero-padded number.
    'm': '${`0${date.getUTCMonth() + 1}`.slice(-2)}',
    // Year without century as a zero-padded number. 
    // 00, 01, ..., 99
    'y': '${`0${date.getUTCFullYear() % 100}`.slice(-2)}',
    // Year with century as a number.
    // 0001, 0002, …, 2013, 2014, …, 9998, 9999
    'Y': '${`000${date.getUTCFullYear()}`.slice(-4)}',
    // Hour (24-hour clock) as a zero-padded number.
    'H': '${`0${date.getUTCHours()}`.slice(-2)}',
    // Hour (12-hour clock) as a zero-padded number.
    'I': '${`0${date.getUTCHours() % 12 || 12}`.slice(-2)}',
    // Minutes as a zero-padded number.
    'M': '${`0${date.getUTCMinutes()}`.slice(-2)}',
    // Seconds as a zero-padded number.
    'S': '${`0${date.getUTCSeconds()}`.slice(-2)}',
    // Seconds since 1970-01-01 00:00:00 UTC
    's': '${Math.floor(Date.now() / 1000)}',
    // Milliseconds as a number, zero-padded to 3 digits.
    'f': '${`00${date.getUTCMilliseconds()}`.slice(-3)}',
    // UTC offset in the form ±HHMM
    'z': '+0000',
    // Day of the year as a zero-padded number.
    'j': '${`00${getDayOfYear(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())}`.slice(-3)}',
    // Week number of the year (Sunday as the first day of the week) as a zero-padded number. 
    // All days in a new year preceding the first Sunday are considered to be in week 0.
    // (00..53)
    'U': '${`0${getSundayWeek(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())}`.slice(-2)}',
    // Week number of the year (Monday as the first day of the week) as a zero-padded number. 
    // All days in a new year preceding the first Monday are considered to be in week 0.
    // (00..53)
    'W': '${`0${getMondayWeek(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())}`.slice(-2)}',
    // ISO week number, with Monday as first day of week (01..53)
    'V': '${`0${getISOWeek(date.getUTCFullYear(), date.getUTCMonth(), date.getUTCDate())}`.slice(-2)}',
    // Quarter of year (1..4)
    'q': '${1 + Math.floor(date.getUTCMonth() / 4)}',
    // Century; like %Y, except omit last two digits (e.g., 20)
    'C': '${`000${date.getUTCFullYear()}`.slice(-4, -2)}',
    '%': '%',
};
//# sourceMappingURL=utc-format-codes.js.map