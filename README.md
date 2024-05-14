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
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd bookstore-api
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

- **GET /api/books**
  - Retrieves the list of all books available in the shop.

- **GET /api/books?ISBN=<ISBN>**
  - Retrieves books based on ISBN.

- **GET /api/books?author=<AuthorName>**
  - Retrieves all books by a specific author.

- **GET /api/books?title=<Title>**
  - Retrieves all books based on title.

- **GET /api/books/:id/reviews**
  - Retrieves reviews for a specific book.

- **POST /api/register**
  - Registers a new user.
  - Body:
    ```json
    {
      "username": "example_user",
      "password": "example_password"
    }
    ```

- **POST /api/login**
  - Logs in as a registered user.
  - Body:
    ```json
    {
      "username": "example_user",
      "password": "example_password"
    }
    ```

### Authenticated Endpoints

- **POST /api/books/:id/reviews**
  - Adds or modifies a book review.
  - Requires authentication.
  - Header: `Authorization: Bearer <JWT_TOKEN>`
  - Body:
    ```json
    {
      "review_text": "Example review text"
    }
    ```

- **DELETE /api/books/:id/reviews**
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
      const response = await axios.get("http://localhost:8080/api/books");
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
    axios.get(`http://localhost:8080/api/books?ISBN=${ISBN}`)
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
      const response = await axios.get(`http://localhost:8080/api/books?author=${authorName}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  searchByAuthor("Author Name");
  ```

- **Search by Title**
  ```javascript
  const axios = require("axios");

  async function searchByTitle(title) {
    try {
      const response = await axios.get(`http://localhost:8080/api/books?title=${title}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  searchByTitle("Book Title");
  ```

## Author

Aniket Raut

## License

This project is licensed under the [License Name] - see the [LICENSE.md](LICENSE.md) file for details.

---
