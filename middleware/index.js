
const express = require('express');
const router = require('../router/index');
const errorMiddleware = require('./error-middleware');
const cookieParser = require('cookie-parser');

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use('/api', router);
app.use(errorMiddleware);
app.use((req, res, next) => {
  res.status(404).send('Nor Found');
});

module.exports = app;
