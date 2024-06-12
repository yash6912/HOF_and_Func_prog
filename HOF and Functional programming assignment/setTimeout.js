// Step 1: Store the input string in a variable named 'input'
let input = "PW Skills";

// Step 2: Use the setTimeout() function to create a delay of 2 seconds
setTimeout(() => {
    // Step 3: Reverse the string
    let reversedString = input.split('').reverse().join('');
    console.log(reversedString);
}, 2000); 
