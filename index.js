const { fetchBreedDescription } = require('./breedFetcher');
const args = process.argv.slice(2);

// call function with first element in args array and a callback that prints either error messages or description to the console.
fetchBreedDescription(args[0], (error, description) => {
  if (error) {
    console.log(error);
    return;
  } else {
    console.log(description);
  }
});