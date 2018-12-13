// load env variables for the app
require('dotenv').config({ path: '.envconfig'});
const express = require('express');
const router = require('./routes/routes');
const app = express();

app.use(express.json());

app.use('/', router);

const server = app.listen(process.env.PORT, () => {
  console.log(`Server running on :${server.address().port}`);
});

module.exports = app;