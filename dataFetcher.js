const axios = require('axios');
const fs = require('fs');

const URL = 'https://microsoftedge.github.io/Demos/json-dummy-data/256KB.json';

async function fetchAndStoreData() {
  try {
    const response = await axios.get(URL);
    const data = JSON.stringify(response.data, null, 2);
    fs.writeFileSync('data.json', data);
    console.log('Data fetched and stored successfully');
  } catch (error) {
    console.error('Error fetching or storing data:', error.message);
  }
}

fetchAndStoreData();