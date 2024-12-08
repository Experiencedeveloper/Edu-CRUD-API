# Edu CRUD API 📚

![npm](https://img.shields.io/npm/v/edu-crud-api)(https://npmjs.org/package/edu-crud-api)
![npm](https://img.shields.io/npm/dm/edu-crud-api)
![npm](https://img.shields.io/npm/dw/edu-crud-api)
![install size](https://packagephobia.com/badge?p=edu-crud-api)
## Introduction
**Edu CRUD API** is a basic CRUD (Create, Read, Update, Delete) API built with Express.js. It is designed as an educational tool to help developers learn about building APIs, using Node.js, handling requests, and managing data with basic CRUD operations.

## Installation
To install the Edu CRUD API package, run the following command:

```bash
npm install edu-crud-api
```

## Usage
Here's a basic example of how to use the Edu CRUD API in your Node.js project:

### Step 1: Require and Set Up the API

```javascript
const express = require('express');
const app = express();
const eduCrudApi = require('edu-crud-api');

app.use(express.json());
app.use(eduCrudApi);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
```

### Step 2: Define Your Routes
Edu CRUD API provides predefined routes for CRUD operations. You can use them as follows:

- **GET** `/items` - Retrieves a list of all items.
- **GET** `/items/:id` - Retrieves a single item by its ID.
- **POST** `/items` - Creates a new item.
- **PUT** `/items/:id` - Updates an existing item by its ID.
- **PATCH** `/items/:id` - Partially updates an item by its ID.
- **DELETE** `/items/:id` - Deletes an item by its ID.
- **HEAD** `/items/:id` - Checks if an item exists by its ID.

## Example Endpoints

### 🏠 Welcome Message
**Endpoint**: `/`  
**Method**: `GET`  
**Description**: Returns a welcome message.

**Response**:
```
Welcome to the CRUD API!
```

### 📜 Get All Items
**Endpoint**: `/items`  
**Method**: `GET`  
**Description**: Retrieves a list of all items.

**Response**:
```json
[
  {
    "id": "unique-id-1",
    "Learn": "Item 1"
  },
  {
    "id": "unique-id-2",
    "Learn": "Item 2"
  }
]
```

### 🔍 Get Single Item
**Endpoint**: `/items/:id`  
**Method**: `GET`  
**Description**: Retrieves a single item by its ID.

**Response**:
```json
{
  "id": "unique-id-1",
  "Learn": "Item 1"
}
```

### ➕ Create Item
**Endpoint**: `/items`  
**Method**: `POST`  
**Description**: Creates a new item.

**Request Body**:
```json
{
  "Learn": "New Item"
}
```

**Response**:
```json
{
  "id": "new-unique-id",
  "Learn": "New Item"
}
```

### 🔄 Update Item
**Endpoint**: `/items/:id`  
**Method**: `PUT`  
**Description**: Updates an existing item by its ID.

**Request Body**:
```json
{
  "Learn": "Updated Item"
}
```

**Response**:
```json
{
  "id": "unique-id-1",
  "Learn": "Updated Item"
}
```

### ⚙️ Partially Update Item
**Endpoint**: `/items/:id`  
**Method**: `PATCH`  
**Description**: Partially updates an item by its ID.

**Request Body**:
```json
{
  "Learn": "Partially Updated Item"
}
```

**Response**:
```json
{
  "id": "unique-id-1",
  "Learn": "Partially Updated Item"
}
```

### ❌ Delete Item
**Endpoint**: `/items/:id`  
**Method**: `DELETE`  
**Description**: Deletes an item by its ID.

**Response**:
```
Status: 204 No Content
```

### 🔎 Check Item Existence
**Endpoint**: `/items/:id`  
**Method**: `HEAD`  
**Description**: Checks if an item exists by its ID.

**Response**:
```
Status: 200 OK (if exists) or 404 Not Found (if not exists)
```

## Error Handling
If an item is not found or a bad request is made, the API will respond with an appropriate HTTP status code and message.

### Example Error Response
**Response**:
```json
{
  "error": "Item not found"
}
```

## Features
- **🔑 UUID**: Uses UUIDs for unique item identification.
- **🔒 Error Handling**: Responds appropriately if an item is not found.

## License
This project is licensed under the MIT License.
