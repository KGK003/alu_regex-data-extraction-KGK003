
const { extractData } = require("./regexPatterns.js");


const sampleText = `

  Contact me at user@example.com or firstname.lastname@company.co.uk.

  Visit my website: https://www.example.com or http://subdomain.example.org/page.

  Call me at (123) 456-7890 or 123.456.7890.

  My credit card number is 1234 5678 9012 3456.

  The meeting is at 14:30 or 2:30 PM.

  Here is some HTML: <div class="example">Hello</div>.

  Trending hashtag: #RegexRules.

  The item costs $1,234.56.

`;
const extractedData = extractData( sampleText); 
 console.log("\n===== Extracted Data =====\n"); 
Object.keys(extractedData).forEach((key) => {
  console.log(`${key.toUpperCase()}:`);
  console.log(extractedData[key].length ? extractedData[key].join("\n") : "No matches found");
  console.log("\n-------------------------\n"); });
