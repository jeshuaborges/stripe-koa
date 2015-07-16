module.exports = function(app) {
	var Router 				= require('koa-router'),
    	koaBody   	  = require('koa-body'),
			checkoutsCtrl = require('../controllers/checkouts'),
			customersCtrl = require('../controllers/customers');

	var router = new Router();

	router
		.get('/', function *(next) {
			this.redirect('/customers/new');

			yield next;
		})

		.get('/checkouts/new', checkoutsCtrl.new)
		.post('/checkouts/create', koaBody(), checkoutsCtrl.create)
		.get('/checkouts/:id', checkoutsCtrl.show)

		.get('/customers/new', customersCtrl.new)
		.post('/customers/create', koaBody(), customersCtrl.create)
		.get('/customers/:id', customersCtrl.show);

	app.use(router.middleware());
};
