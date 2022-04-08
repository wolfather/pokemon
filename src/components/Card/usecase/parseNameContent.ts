export const parseNameContent = (content: string): string => {
    return content
        .replace(/\-|_/g, ' ')
        .replace(/defense/gi, 'def')
        .replace(/attack/gi, 'atk')
};
