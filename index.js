var koa = require('koa'),
    path = require('path'),
    views = require('koa-views'),
    config = require('config'),
    serve = require('koa-static'),
    logger = require('koa-logger');

var app = module.exports = koa();

app
  .use(logger())
  .use(views(config.template.path, config.template.options))
  .use(serve('app/assets'));

require('./app/routes')(app);

if (!module.parent) app.listen(3000);
