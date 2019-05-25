const express = require('express');
const CountryController = require('../Controllers/CountryController');
const isAuth = require('../middleware/is-auth');


const router = express.Router();

router.get('/', CountryController.getCountries);

router.post('/add', isAuth, CountryController.postCountry);

router.post('/edit', isAuth, CountryController.editCountry);

router.post('/delete', isAuth, CountryController.deleteCountry);

module.exports = router;