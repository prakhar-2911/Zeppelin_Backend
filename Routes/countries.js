const express = require('express');
const CountryController = require('../Controllers/CountryController');

const router = express.Router();

router.get('/', CountryController.getCountries);

router.post('/add', CountryController.postCountry);

router.post('/edit', CountryController.editCountry);

router.post('/delete', CountryController.deleteCountry);

module.exports = router;