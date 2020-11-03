const fs = require('fs');

const breedDetailsFromFile = function(breed, returnBreedData) {
  console.log('breedDetailsFromFile: Calling readFile...');
  fs.readFile(`./data/${breed}.txt`, 'utf8', (error, data) => {
    console.log("In readFile's Callback: it has the data.");
    if (!error) {
      returnBreedData(data);
    } else {
      returnBreedData(undefined);
    }
  });
};

module.exports = breedDetailsFromFile;

