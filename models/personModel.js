const fs = require('fs');

class PersonModel {
  constructor() {
    this.people = [];
  }

  loadData() {
    try {
      const rawData = fs.readFileSync('data.json');
      this.people = JSON.parse(rawData);
    } catch (error) {
      console.error('Error loading data:', error);
      process.exit(1);
    }
  }

  getAllPeople() {
    return this.people;
  }

  filterByLanguage(language) {
    return this.people.filter(person => 
      person.language.toLowerCase() === language.toLowerCase()
    );
  }

  sortByField(field, order) {
    return [...this.people].sort((a, b) => {
      if (order === 'asc') {
        return a[field] > b[field] ? 1 : -1;
      } else {
        return a[field] < b[field] ? 1 : -1;
      }
    });
  }
}

module.exports = new PersonModel();