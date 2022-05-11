
module.exports = (req, res) => {
    const countriesAndTimezones = require('countries-and-timezones');
    const countries = countriesAndTimezones.getAllCountries();
    let countryInfo = [];
    const countryCode = Object.keys(countries);

    countryCode.map(c => {
        countryInfo.push(countries[c])
    })

    res.status(200).json(countryInfo)
}
