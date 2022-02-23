require('env-yaml').config({ path: '.env.yaml' });
const express = require('express');

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */

const getId = async (req, res) => {
  const { id } = req.params;
  res.status(200).send(`dit is test2 met id ${id}`);
};

const getTest = async (req, res) => {
  res.status(200).send('dit is test2');
};

const getDefault = async (req, res) => {
  const { param } = req.query;
  // eslint-disable-next-line camelcase
  const { test } = process.env;
  res.status(200).send(test);
};

// Create an Express object and routes (in order)
const app = express();
app.use('/test2/:id', getId);
app.use('/test2/', getTest);
app.use(getDefault);

// Set our GCF handler to our Express app.
exports.run = app;
// Needed for Quokka
// exports.run(
//   { query: { q: 'drunk with a gun nosferatu' } },
//   {
//     status: (text) => {
//       console.log('status >> ', text);
//       // eslint-disable-next-line no-unused-expressions
//       return { send: (text) => console.log('send >> ', text) };
//     },
//   }
// );
