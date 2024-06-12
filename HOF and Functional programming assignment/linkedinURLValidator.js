// Step 1: Define the regex pattern
const linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Step 2: Create a function to check if an input string matches the regex pattern
function isValidLinkedInURL(url) {
    return linkedinPattern.test(url);
}

// Example input URLs
const urls = [
    "https://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane_doe",
    "https://www.linkedin.com/in/jane-doe",
    "https://www.linkedin.com/in/12345",
    "https://www.linkedin.com/in/jane@doe",
    "https://www.linkedin.com/in/",
    "https://www.linkedin.com/in/j",
    "https://www.linkedin.com/in/johndoe12345678901234567890",
    "http://www.linkedin.com/in/johndoe123",
    "https://www.linkedin.com/in/jane-doe-",
    "https://www.linkedin.com/in/jane_doe1"
];

// Step 3: Check each URL and print a message indicating if it matches the conditions
urls.forEach(url => {
    if (isValidLinkedInURL(url)) {
        console.log(`${url} is a valid LinkedIn profile URL.`);
    } else {
        console.log(`${url} is not a valid LinkedIn profile URL.`);
    }
});
