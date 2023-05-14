const getNames = require("../country/state/city/index");

const FirstNames = require("../utilities/utils/index");

function getPeopleInCity = (getNames) => {
    return getFirstNames(getNames);
}
module.exports = getPeopleInCity;