module.exports = {
	index: function *index(next) {
		this.body = "Welcome to koajs-starter";
	},

	view: function *(next) {
		yield this.render('index.ect', {
			title: 'Render view template'
		});
		yield next;
	},

	post: function *(next) {
		this.body = this.request.body;
	}
};
