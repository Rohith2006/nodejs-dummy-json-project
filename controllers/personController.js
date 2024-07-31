const personModel = require('../models/personModel');

class PersonController {
  getData(req, res, next) {
    try {
      let result = personModel.getAllPeople();

      if (req.query.language) {
        result = personModel.filterByLanguage(req.query.language);
      }

      if (req.query.sort) {
        const [field, order] = req.query.sort.split(':');
        if (!result[0].hasOwnProperty(field)) {
          return res.status(400).json({ error: `Invalid sort field: ${field}` });
        }
        if (order !== 'asc' && order !== 'desc') {
          return res.status(400).json({ error: 'Sort order must be "asc" or "desc"' });
        }
        result = personModel.sortByField(field, order);
      }

      res.json(result);
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new PersonController();