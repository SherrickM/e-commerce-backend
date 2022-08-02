const express = require('express');
const routes = require('./routes');
// added dotenv
require("dotenv").config();
// import sequelize connection
const sequelize = require('./config/connection');
// do i need to add the models to server.js looks like its being accessed via index.js
// const Book = require('./models/Book'); 


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// sync sequelize models to the database, then turn on the server

// sequelize.sync({ force: true }).then(() => {
//   app.listen(PORT, () => console.log('Now listening'));
// });


app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
});


