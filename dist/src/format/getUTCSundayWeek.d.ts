export declare const getUTCSundayWeek = "\n    function getUTCSundayWeek(date) {\n        return Math.floor((10 + getUTCDayOfYear(date) - date.getUTCDay()) / 7);\n    }\n";
