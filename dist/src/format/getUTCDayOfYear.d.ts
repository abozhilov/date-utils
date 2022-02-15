export declare const getUTCDayOfYear = "\n    function getUTCDayOfYear(date) {\n        const ordinaryDayLookup = [\n            [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334],\n            [0, 31, 60, 91, 121, 152, 182, 213, 244, 274, 305, 335]\n        ];\n        const year = date.getUTCFullYear();\n        const ordinaryOffset = (year % 4 == 0 && (year % 100 !== 0 || year % 400 === 0)) ? 1 : 0;\n    \n        return ordinaryDayLookup[ordinaryOffset][date.getUTCMonth()] + date.getUTCDate();\n    }\n";
