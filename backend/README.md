# /users/register Endpoint Documentation

## Description
This endpoint is used to register a new user. It accepts user details in the request body, validates them, and then creates a new user with a hashed password. Upon successful registration, it returns an authentication token along with the user details.

## URL
`POST /users/register`

## Request Body
The request body must be in JSON format and include the following properties:

- **fullname** (object): An object containing:
  - **firstname** (string): The user's first name (minimum 3 characters).
  - **lastname** (string): The user's last name (optional, minimum 3 characters if provided).
- **email** (string): A valid email address.
- **password** (string): The user's password (minimum 6 characters).

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "secret123"
}
```

## Validation
- The `email` field must be a valid email.
- `fullname.firstname` must be at least 3 characters long.
- `password` must be at least 6 characters long.

If validation fails, the endpoint returns HTTP status 400 with details about the validation errors.

## Responses

### Success (201 Created)
- **Status Code:** `201`
- **Response Body:** JSON object containing:
  - `token`: A JWT token generated for authentication.
  - `user`: The created user object.

Example:
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60d0fe4f5311236168a109ca",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

### Validation Error (400 - Bad Request)
- **Status Code:** `400`
- **Response Body:** JSON object containing the error details.

Example:
```json
{
  "errors": [
    {
      "msg": "firstname must be 3 characters long or more",
      "param": "fullname.firstname",
      "location": "body"
    }
  ]
}
```

### Server Error (500 - Internal Server Error)
If any unexpected error occurs during user registration.

---

Ensure that your server has the necessary environment variables set, such as `JWT_SECRET` for token generation.