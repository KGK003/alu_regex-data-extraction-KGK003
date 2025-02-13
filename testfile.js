import regexPatterns from './regexPatterns.js';
const testCases = {
    email: [
        { input: "example@example.com", expected: true },
        { input: "invalid-email@", expected: false },
        { input: "user.name+tag@domain.co.uk", expected: true },
    ],
    url: [
        { input: "https://www.example.com", expected: true },
        { input: "www.example.com", expected: false }, // Missing http/https
        { input: "http://example.com/path?query=1", expected: true },
    
      htmlTag: [
        { input: "<p>", expected: true },
        { input: "<div class=\"example\">", expected: true },
        { input: "<img src=\"image.jpg\" alt=\"description\">", expected: true },
        { input: "<div><span></div>", expected: false },
    ],
    hashtag: [
        { input: "#example", expected: true },
        { input: "#ThisIsAHashtag", expected: true },
        { input: "nohashtag", expected: false },
    ],
 phone: [
        { input: "(123) 456-7890", expected: true },
        { input: "123-456-7890", expected: true },
        { input: "123.456.7890", expected: true },
        { input: "invalid phone number", expected: false },
    ],

};
const runTests = () => {
    for (const [type, cases] of Object.entries(testCases)) {
        console.log(`Testing ${type}:`);
        cases.forEach(({ input, expected }) => {
            const result = regexPatterns[type].test(input);
            console.log(`Input: "${input}" | Expected: ${expected} | Result: ${result}`);
            console.assert(result === expected, `Test failed for input: "${input}"`);
        });
        console.log("");
    }
};
runTests();
