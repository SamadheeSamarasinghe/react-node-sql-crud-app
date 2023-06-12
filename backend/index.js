'use strict';
const express = require('express');
const config = require('./config');
const cors = require('cors');
const bodyParser = require('body-parser');
const batchRoutes = require('./routes/batchRoutes');
const categoryRoutes = require('./routes/categoryRoutes');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/batch', batchRoutes.routes); // Mount batchRoutes under '/api/batch' path
app.use('/api/category', categoryRoutes.routes); // Mount categoryRoutes under '/api/category' path

app.listen(config.port, () => {
  console.log(`Server is listening on http://localhost:${config.port}`);
});
