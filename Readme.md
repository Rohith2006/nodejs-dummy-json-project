# People Data API

## Overview

This project implements a REST API that serves and filters people data. It allows users to retrieve, sort, and filter information about individuals, including their names, languages, and other attributes. The project follows the Model-View-Controller (MVC) architecture for better organization and maintainability.

## Features

- Retrieve all data entries
- Filter data by language
- Sort data by various fields
- Combine filtering and sorting operations
- MVC architecture for improved code structure

## Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

## Project Structure

```
people-data-api/
│
├── models/
│   └── personModel.js
├── controllers/
│   └── personController.js
├── app.js
├── fetchData.js
├── data.json
├── package.json
├── package-lock.json
└── README.md
```

- `models/personModel.js`: Handles data operations and business logic.
- `controllers/personController.js`: Manages the flow between the model and the API response.
- `app.js`: The main server file containing Express configuration and routes.
- `fetchData.js`: Script for fetching and storing initial data.
- `data.json`: The source data file containing the people information.
- `package.json` and `package-lock.json`: Node.js package configuration files.
- `README.md`: This documentation file.

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/Rohith2006/nodejs-dummy-json-project
   cd nodejs-dummy-json-project
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Run 'fetchData.js' to fetch initial data:
   ```
   node fetchData.js
   ```

2. Ensure `data.json` is present in the project root directory with valid JSON data.

3. Start the server:
   ```
   node app.js
   ```

4. The server will run on `http://localhost:3000` by default.

## API Endpoints

### Get All Data
```
GET /api/data
```

### Filter by Language
```
GET /api/data?language=<language>
```
Replace `<language>` with the desired language (e.g., Sindhi, Uyghur).

### Sort Data
```
GET /api/data?sort=<field>:<order>
```
- `<field>`: The field to sort by (e.g., name, version)
- `<order>`: Either 'asc' for ascending or 'desc' for descending

### Combine Filtering and Sorting
```
GET /api/data?language=<language>&sort=<field>:<order>
```

## Example Requests

1. Get all data:
   ```
   GET http://localhost:3000/api/data
   ```

2. Filter by language:
   ```
   GET http://localhost:3000/api/data?language=Sindhi
   ```

3. Sort by name (ascending):
   ```
   GET http://localhost:3000/api/data?sort=name:asc
   ```

4. Filter by language and sort by version (descending):
   ```
   GET http://localhost:3000/api/data?language=Uyghur&sort=version:desc
   ```

## Data Structure

The API serves data in the following format:

```json
[
  {
    "name": "String",
    "language": "String",
    "id": "String",
    "bio": "String",
    "version": Number
  },
  ...
]
```

## MVC Architecture

The project follows the Model-View-Controller (MVC) architecture:

- Model (`personModel.js`): Handles data operations and business logic.
- Controller (`personController.js`): Manages the flow between the model and the API response.
- View: Not applicable for this API, but could be implemented for documentation or a front-end interface.

## Error Handling

The API returns appropriate HTTP status codes and error messages for invalid requests or server errors. Error responses are in JSON format.

## Important Notes

- Ensure that `data.json` is present and contains valid JSON data before starting the server.
- The current implementation does not support data modification. Changes made through API calls affect only the in-memory data and are lost when the server restarts.
- The MVC architecture improves code organization and maintainability.

## Graceful Shutdown

The server implements a graceful shutdown process to handle SIGTERM signals, ensuring that ongoing requests are completed before the server closes.