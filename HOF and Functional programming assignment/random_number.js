// Step 1: Store the delay time in a variable (in milliseconds)
let delay = 3000; 
let countdown = delay / 1000; 
// Step 2: Use setInterval() to create a countdown
let interval = setInterval(() => {
    if (countdown > 0) {
        console.log(`Time remaining: ${countdown} seconds`);
        countdown--;
    }
}, 1000); 
// Step 3: Use setTimeout() to generate a random number after the specified delay
setTimeout(() => {
    clearInterval(interval); // Stop the countdown interval
    let randomNumber = Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100
    console.log(`Random number generated: ${randomNumber}`);
}, delay); // Execute after the specified delay
