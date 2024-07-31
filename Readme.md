# People Data API

## Overview

This project implements a REST API that serves and filters people data. It allows users to retrieve, sort, and filter information about individuals, including their names, languages, and other attributes.

## Features

- Retrieve all data entries
- Filter data by language
- Sort data by various fields
- Combine filtering and sorting operations

## Prerequisites

- Node.js (v12.0.0 or higher)
- npm (v6.0.0 or higher)

## Project Structure

```
people-data-api/
│
├── server.js
├── data.js
├── data.json
├── package.json
├── package-lock.json
└── README.md
```

- `server.js`: The main server file containing the API logic.
- `data.js`: Module for loading and managing data.
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

1. Run 'data.js' to fetch data:
   ```
   node data.js
   ```

2. Ensure `data.json` is present in the project root directory with valid JSON data.

3. Start the server:
   ```
   npm run start
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

## Data Source and Loading

### data.json

The `data.json` file is the primary data source for this API. It should be located in the root directory of the project.

Sample content:

```json
[
  {
    "name": "Adeel Solangi",
    "language": "Sindhi",
    "id": "V59OF92YF627HFY0",
    "bio": "Donec lobortis eleifend condimentum. Cras dictum dolor lacinia lectus vehicula rutrum.",
    "version": 6.1
  },
  {
    "name": "Afzal Ghaffar",
    "language": "Sindhi",
    "id": "ENTOCR13RSCLZ6KU",
    "bio": "Aliquam sollicitudin ante ligula, eget malesuada nibh efficitur et.",
    "version": 1.88
  },
  // ... more entries ...
]
```

### data.js

The `data.js` file is responsible for loading and managing the data. It exports a function to load data from `data.json`.

```javascript
// data.js
const fs = require('fs');

function loadData() {
  try {
    const rawData = fs.readFileSync('data.json');
    return JSON.parse(rawData);
  } catch (error) {
    console.error('Error loading data:', error);
    process.exit(1);
  }
}

module.exports = { loadData };
```

### Usage in server.js

The `server.js` file uses the `loadData` function from `data.js` to initialize the data:

```javascript
// server.js
const express = require('express');
const { loadData } = require('./data');

const app = express();
const PORT = process.env.PORT || 3000;

let people = loadData();

// ... rest of the server code ...
```

## Error Handling

The API returns appropriate HTTP status codes and error messages for invalid requests or server errors. Error responses are in JSON format.

## Important Notes

- Ensure that `data.json` is present and contains valid JSON data before starting the server.
- The current implementation does not support data modification. Changes made through API calls affect only the in-memory data and are lost when the server restarts.
