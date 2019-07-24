const express = require('express');
const bodyParser = require('body-parser');
const { Client } = require('pg');
const port = process.env.PORT || 3000;
const app = express();
require('dotenv').config();
const todosRoutes = require('./routes/todos');
const categoriesRoutes = require('./routes/categories');

// parse application/json
app.use(bodyParser.json());

// Create the connection settings for the db
const connectionSettings = {
  host: process.env.PGHOST,
  user: process.env.PGUSER,
  database: process.env.PGDATABASE,
  password: process.env.PGPASSWORD,
  port: process.env.PGPORT,
};

const pgClient = new Client(connectionSettings);

// Connect to the database
pgClient
  .connect()
  .then(() => {
    console.log(`Connected to ${pgClient.database} database`);

    // Using the routes for todos and categories
    app.use('/todos', todosRoutes(pgClient));
    app.use('/categories', categoriesRoutes(pgClient));
  })
  .catch(err => console.log(err));

app.listen(port, () => console.log(`Server listening on port ${port}`));
