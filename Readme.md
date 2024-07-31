
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

## Installation

1. Clone the repository:
   ```
   git clone https://github.com/your-username/people-data-api.git
   cd people-data-api
   ```

2. Install dependencies:
   ```
   npm install
   ```

## Usage

1. Start the server:
   ```
   node server.js
   ```

2. The server will run on `http://localhost:3000` by default.

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

## Error Handling

The API will return appropriate HTTP status codes and error messages for invalid requests or server errors.
