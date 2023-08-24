
const { config } = require('dotenv');
const express = require('express');
const app = express();
config();
const PORT = 5555;
const routes = require("./routes")

app.all('/api/v1', (req, res, next) => {
  console.log('Accessing the secret section ...')
  next() // pass control to the next handler
})
app.use('/api/v1', routes);

console.log(PORT);
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});

module.exports = {
    app
};