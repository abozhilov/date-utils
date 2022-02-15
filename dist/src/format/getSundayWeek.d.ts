export declare const getSundayWeek = "\n    function getSundayWeek(date) {\n        return Math.floor((10 + getDayOfYear(date) - date.getDay()) / 7);\n    }\n";
