module.exports = function(app) {
	var Router 				= require('koa-router'),
    	koaBody   	  = require('koa-body'),
			customersCtrl = require('../controllers/customers');

	var router = new Router();

	router
		.get('/', function *(next) {
			this.redirect('/customers/new');

			yield next;
		})

		.get('/customers/new', customersCtrl.new)
		.post('/customers', koaBody(), customersCtrl.create)
		.get('/customers/:id', customersCtrl.show);

	app.use(router.middleware());
};
