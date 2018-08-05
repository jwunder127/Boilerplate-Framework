const Router = require('koa-router');
const database = require('./database');
const cache = require('./cache');
const joi = require('joi');
const validate = require('koa-joi-validate');

const router = new Router();

// Check cache before continuing to any endpoint handlers
router.use(cache.checkResponseCache);

// Insert response into cache once handlers have finished
router.use(cache.addResponseToCache);

// Check that id param is valid number
const idValidator = validate({
  params: { id: joi.number().min().max()
    .required() }
});

// Check that query param is valid location type
const typeValidator = validate({
  params: { type: joi.string().valid([]).required() }
});

// Hello World Test Endpoint
router.get('/hello', ctx => {
  ctx.body = 'Hello World';
});

// Get time from DB
router.get('/time', async ctx => {
  const result = await database.queryTime();
  ctx.body = result;
});

module.exports = router;
