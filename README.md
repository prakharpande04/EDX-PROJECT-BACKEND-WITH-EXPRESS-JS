---

# Bookstore API

This is a RESTful API for managing a bookstore. It allows users to perform various actions such as retrieving book information, registering/login as a user, and managing book reviews.

## Getting Started

To get started with the Bookstore API, follow the instructions below:

### Prerequisites

- Node.js installed on your machine
- MongoDB installed and running

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/prakharpande04/EDX-PROJECT-BACKEND-WITH-EXPRESS-JS.git
   ```

2. Navigate to the project directory:
   ```bash
   cd EDX-PROJECT-BACKEND-WITH-EXPRESS-JS
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file in the root directory and add the following environment variables:
   ```plaintext
   MONGODB_URL=mongodb://localhost:27017/bookstore
   JWT_SECRET=your_jwt_secret_key
   ```

5. Start the server:
   ```bash
   npm start
   ```

## API Endpoints

### Public Endpoints

- **GET http://localhost:8080/books**
  - Retrieves the list of all books available in the shop.

- **GET http://localhost:8080/books/byISBN**
  - Retrieves books based on ISBN.

- **GET http://localhost:8080/books/byAuthor**
  - Retrieves all books by a specific author.

- **GET http://localhost:8080/books/byTitle**
  - Retrieves all books based on title.

- **GET http://localhost:8080/books/:id/reviews**
  - Retrieves reviews for a specific book.

- **POST http://localhost:8080/register**
  - Registers a new user.
  - Body:
    ```json
    {
      "username": "example_user",
      "password": "example_password"
    }
    ```

- **POST http://localhost:8080/login**
  - Logs in as a registered user.
  - Body:
    ```json
    {
      "username": "example_user",
      "password": "example_password"
    }
    ```

### Authenticated Endpoints

- **POST http://localhost:8080/books/:id/reviews**
  - Adds or modifies a book review.
  - Requires authentication.
  - Header: `Authorization: Bearer <JWT_TOKEN>`
  - Body:
    ```json
    {
      "review_text": "Example review text"
    }
    ```

- **DELETE http://localhost:8080/books/:id/reviews**
  - Deletes a book review added by the authenticated user.
  - Requires authentication.
  - Header: `Authorization: Bearer <JWT_TOKEN>`

## Node.js Program

The following are sample Node.js program methods for interacting with the API:

- **Get All Books** (Using async callback function)
  ```javascript
  const axios = require("axios");

  async function getAllBooks() {
    try {
      const response = await axios.get("http://localhost:8080/books");
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  getAllBooks();
  ```

- **Search by ISBN** (Using Promises)
  ```javascript
 const axios = require("axios");

  function searchByISBN(ISBN) {
    axios.get(`http://localhost:8080/books/byISBN`,{ISBM:ISBN})
      .then(response => console.log(response.data))
      .catch(error => console.error(error));
  }

  searchByISBN("1234567890");
  ```

- **Search by Author**
  ```javascript
const axios = require("axios");

  async function searchByAuthor(authorName) {
    try {
      const response = await axios.get(`http://localhost:8080/books/byAuthor`,{author:authorName});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  searchByAuthor("AuthorName");
  ```

- **Search by Title**
  ```javascript
 const axios = require("axios");

  async function searchByAuthor(title) {
    try {
      const response = await axios.get(`http://localhost:8080/books/byTitle`,{title:title});
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  searchByAuthor("title");
  ```

## Author

Aniket Raut

## License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.

---
