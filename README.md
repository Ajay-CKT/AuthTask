# User Authentication and Authorization with Bearer Token

This project implements user authentication and authorization in a Node.js application using Express.js, Mongoose, and JSON Web Tokens (JWT). The application follows the MVC (Model-View-Controller) pattern, ensuring a clean and modular code structure.

## Features

- User Registration
  - Hashes user passwords before saving them in the database.
  - Returns a success message upon successful registration.
- User Login
  - Verifies user credentials.
  - Generates a JWT upon successful login.
  - Returns the JWT to the user.
- Middleware for Token Verification
  - Validates the JWT from request headers.
  - Decodes the token and attaches user information to the request object.
- Protected Routes
  - Accessible only with a valid JWT.
  - Returns user information from the token.

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ajay-CKT/AuthTask.git
   cd AuthTask
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the environment variables:

- Create a `.env` file in the root directory and configure the following:
  ```env
  PORT=3000
  MONGODBURI=<your-mongodb-uri>
  SECRETKEY=<your-secret-key>
  ```

4. Start the server:
   ```bash
   npm start
   ```

- to run on nodemon
  ```bash
  npm run dev
  ```

## API Endpoints

### 1. User Registration

**POST** `/auth/register`

- **Description:** Registers a new user.
- **Request Body:**
  ```json
  {
    "username": "exampleuser",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "message": "User registered successfully"
  }
  ```

### 2. User Login

**POST** `/auth/login`

- **Description:** Logs in a user and returns a JWT.
- **Request Body:**
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response:**
  ```json
  {
    "token": "<jwt-token>",
    "message": "Logged in successfully"
  }
  ```

### 3. Get User Information

**GET** `/user/me`

- **Description:** Retrieves user information from the JWT.

- **Response:**
  ```json
  {
    "username": "exampleuser",
    "email": "user@example.com"
  }
  ```

## Error Handling

- Validations ensure proper data is submitted.
- Clear error messages for invalid credentials or missing tokens.

## Dependencies

- **bcryptjs:** For password hashing.
- **dotenv:** For environment variable management.
- **express:** Web framework for Node.js.
- **jsonwebtoken:** For generating and verifying JWTs.
- **mongoose:** For MongoDB object modeling.
