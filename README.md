[![N|Solid](https://iili.io/Hi9giog.png)](https://www.enverx.com/)

EnverX offers a simple and convenient platform to fund early-stage projects
and trade future carbon credits.

## Routes

Users
- `POST /api/register` - Register a new user
- `POST /api/login` - Login a user


Posts
- `GET /api/post` - Get all blog posts (Mandatory: Apply sorting based on created Date, blog name and filters based on category).
- `GET /api/post/:id` - Get a specific blog post by ID.
- `POST /api/post` - Create a new blog post.
- `PUT /api/post/:id` - Update an existing blog post.
- `DELETE /api/post/:id` - Delete a blog post.

## Added Functionality
- Now users can also add posts anonymously.

## Tech Stack
- Node.js
- Express.js
- MongoDB
- JWT Tokens for Authentication
- Typescript

## Installation
Add a .env file in then root directory with the following
```DB_URI = 'your mongodb uri'```

Then run the following commands
```npm install```
```npm run dev```

## Collection
The postman collection is available [here](https://api.postman.com/collections/15330712-be54d372-e026-47af-8e2e-e92fa80f6c86?access_key=PMAT-01H6AHM76R8SCDNEK7Q3SMKSB7)
