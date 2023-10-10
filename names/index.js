let names = require("../country/state/city/index");
let utilites = require("..utils/index");
let getPeopleInCity = (names) => {
  return utilites(names);
};
module.exports = getPeopleInCity;
