const fs = require('fs');
const path = require('path').join(__dirname, 'text.txt');
const read = fs.createReadStream(path);
read.on('data', (text) => {
  console.log(text.toString());
});