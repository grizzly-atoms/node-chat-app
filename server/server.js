const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
console.log(__dirname + '/../public');

console.log(publicPath)

let app = express();
const port = process.env.PORT || 3000;

app.use(express.static('public'));

app.listen(port, () => {
  console.log(`Chat app listening on port ${port}!`);
});