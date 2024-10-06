const axios = require('axios');

// Base URL for your existing server
const BASE_URL = 'http://localhost:5000'; // Adjust this to your server's URL and port

// Function to get the list of books
const getBooks = () => {
    return axios.get(`${BASE_URL}/books`) // Use the appropriate endpoint
        .then(response => console.log(response.data))
        .catch(error => {
            console.error("Error fetching books:", error);
            throw error;
        });
};

// Function to get book details by ISBN
const getBookByISBN = (isbn) => {
    return axios.get(`${BASE_URL}/isbn/${isbn}`)
        .then(response => console.log(response.data))
        .catch(error => {
            console.error("Error fetching book by ISBN:", error);
            throw error;
        });
};

// Function to get books by author
const getBooksByAuthor = (author) => {
    return axios.get(`${BASE_URL}/author/${author}`)
        .then(response => console.log(response.data))
        .catch(error => {
            console.error("Error fetching books by author:", error);
            throw error;
        });
};

// Function to get books by title
const getBooksByTitle = (title) => {
    return axios.get(`${BASE_URL}/title/${title}`)
        .then(response => console.log(response.data))
        .catch(error => {
            console.error("Error fetching books by title:", error);
            throw error;
        });
};

// Exporting the functions
module.exports = {
    getBooks,
    getBookByISBN,
    getBooksByAuthor,
    getBooksByTitle
};
