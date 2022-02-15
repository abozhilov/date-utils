export const getTimezoneOffset = `
    function getTimezoneOffset(date) {
        const offset = date.getTimezoneOffset();
        const sign = offset < 0 ? '+' : '-';
        const hours = \`0\${Math.abs(Math.floor(offset / 60))}\`.slice(-2);
        const minutes = \`0\${offset % 60}\`.slice(-2);

        return \`\${sign}\${hours}\${minutes}\`;
    }
`;
//# sourceMappingURL=getTimezoneOffset.js.map