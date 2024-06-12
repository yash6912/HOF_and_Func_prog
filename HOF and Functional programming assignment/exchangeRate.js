// Step 1: Create an object to store the items and their prices in US dollars
const itemsInUSD = {
    "item1": 10,
    "item2": 20,
    "item3": 30,
    "item4": 40,
};

// Define the exchange rate
const exchangeRate = 80;

// Step 2: Use Object.entries() to get an array of the object's key-value pairs
const entries = Object.entries(itemsInUSD);

// Step 3: Use the map() method to iterate over the array and convert the prices
const convertedEntries = entries.map(([key, value]) => {
    return [key, value * exchangeRate];
});

// Step 4: Use Object.fromEntries() to convert the array back into an object with the converted prices
const itemsInINR = Object.fromEntries(convertedEntries);

// Output the new object with converted prices
console.log(itemsInINR);
