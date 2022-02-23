require('env-yaml').config({ path: '.env.yaml' });

/**
 * HTTP Cloud Function.
 *
 * @param {Object} req Cloud Function request context.
 *                     More info: https://expressjs.com/en/api.html#req
 * @param {Object} res Cloud Function response context.
 *                     More info: https://expressjs.com/en/api.html#res
 */
exports.run = async (req, res) => {
  const { page, getAmountOfPages } = req.query;
  // eslint-disable-next-line camelcase
  const { test } = process.env;
  res.status(200).send(test);
};
// Needed for Quokka
// exports.run({ query: { page: 1 } }, null);
// exports.run({ query: { getAmountOfPages: true } }, null);