// Step 1: Create an array of book objects
const books = [
    { title: "Book One", author: "john doe", year: 2008 },
    { title: "Book Two", author: "jane smith", year: 2012 },
    { title: "Book Three", author: "sam johnson", year: 2015 },
    { title: "Book Four", author: "linda jackson", year: 2009 }
];

// Step 2: Use the filter() method to filter out books published before 2010
const filteredBooks = books.filter(book => book.year >= 2010);

// Step 3: Use the map() method to capitalize the author names of the remaining books
const capitalizeAuthor = name => name.split(' ')
                 .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                 .join(' ');

const updatedBooks = filteredBooks.map(book => ({
    ...book,
    author: capitalizeAuthor(book.author)
}));

// Output the new array of books
console.log(updatedBooks);
