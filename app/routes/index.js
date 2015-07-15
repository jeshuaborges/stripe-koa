module.exports = function(app) {
	var Router 		= require('koa-router'),
    	koaBody   = require('koa-body'),
			indexCtrl = require('../controllers/index');

	var router = new Router();

	router
		.get('/', indexCtrl.index)

		.get('/render/view', indexCtrl.view)
		.post('/render/view', koaBody(), indexCtrl.post);

	app.use(router.middleware());
};
