const request = require('request');
const args = process.argv.slice(2);


request(`https://api.thecatapi.com/v1/breeds/search?q=${args[0]}`, (err, res, body) => {
  if (err) {
    console.log('Oops! Request failed:', err);
    return;
  }

  const data = JSON.parse(body);

  if (data.length < 1) {
    console.log('Sorry! Breed not found.');
  } else {
    console.log(data[0].description);
  }
});