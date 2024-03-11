const request = require('request');

// function that requests cat breed data from cat api. Function call takes a breedName and a callback as arguments
const fetchBreedDescription = function(breedName, callback) {
  // use request module to get data
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`, (err, res, body) => {
    // if request returns an error, pass an error message to callback and null for description
    if (err) {
      const errorMsg = `Request Failed -> [${err}]`;
      callback(errorMsg, null);
      return;
    }

    // if no error is returned, parse the returned body JSON
    const data = JSON.parse(body);

    // if data is an empty array, pass an error message to callback in place of description. Otherwise pass the breed description returned.
    if (data.length < 1) {
      callback(null, "Sorry! Breed not found.");
    } else {
      callback(null, data[0].description);
    }
  });
};

module.exports = { fetchBreedDescription };