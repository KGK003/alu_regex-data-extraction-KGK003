const regexPatterns = {
    email: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
    url: /^(https?:\/\/)?(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}(\/[^\s]*)?$/,
    htmlTag: /<([a-zA-Z][a-zA-Z0-9]*)\b[^>]*>(.*?)<\/\1>/,
    hashtag: /#\w+/,
    phone: /(?:\+?\d{1,3})?[-. (]?\(?\d{1,4}?\)?[-. ]?\d{1,4}[-. ]?\d{1,9}/,
};
export default regexPatterns;
