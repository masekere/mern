const countries_tz = require("../utils/countries-timezones");
const router = require("express").Router();

router.get('/countries-tz', countries_tz)

module.exports = router;