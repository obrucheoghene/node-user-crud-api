## NODEJS USER CRUD API IMPLEMENTATION WITH TYPESCRIPT

This is a Node.js API implemented with Typescript to allow users to perform CRUD (Create, Read, Update, and Delete) operations on a user resource.

### Requirements

- Nodejs
- Mongodb
- NPM

### Installation

1. Clone the repository: git clone https://github.com/wilfredcloud/node-user-crud-api.git
2. Install dependencies: npm install
3. Create a .env file and add the following variables:

```sh
MONGO_DB_URL=<your-mongodb-uri>
AUTH_SECRET=<enter-secret>
PORT=5000
```

4. Start the server: npm start
5. The API will be available at http://localhost:5000

### Usage

The following endpoints are available:

#### POST /users

Creates a new user. Requires a JSON body with the following fields:

- email (string): the name of the user
- name (string): the email address of the user
- password (string): the password of the user

Request body

```json
{
  "email": "winner@gmail.com",
  "name": "winner",
  "password": "123"
}
```

#### GET /users

Returns a list of all users.

Response Data

```json
[
  {
    "_id": "643c92b03c58bff91f88f440",
    "name": "Peter",
    "email": "pee@gmail.com",
    "__v": 0
  },
  {
    "_id": "643c93c93c58bff91f88f44b",
    "name": "winner",
    "email": "winner@gmail.com",
    "__v": 0
  }
]
```

#### - PUT /users/:id

Updates a user with the specified ID. It Requires a JSON body with the name field.

- name (string): the updated name of the user
  Request body

```json
{
  "name": "Victory"
}
```

#### DELETE /users/:id

Deletes a user with the specified ID.

License

This project is licensed under the MIT License.
