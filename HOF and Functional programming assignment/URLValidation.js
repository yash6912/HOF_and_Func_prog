// Step 1: Define the regex pattern
const urlPattern = /^(http:\/\/|https:\/\/)[\w\-]+(\.[\w\-]+)+$/;

// Step 2: Create a function to check if an input string matches the regex pattern
function isValidURL(url) {
    return urlPattern.test(url);
}

// Example input URLs
const urls = [
    "http://example.com",
    "https://example.com",
    "http://example.co.uk",
    "https://sub.example.com",
    "http://example",
    "ftp://example.com",
    "https://example..com"
];

// Step 3: Check each URL and print a message indicating if it matches the conditions
urls.forEach(url => {
    if (isValidURL(url)) {
        console.log(`${url} is a valid URL.`);
    } else {
        console.log(`${url} is not a valid URL.`);
    }
});
