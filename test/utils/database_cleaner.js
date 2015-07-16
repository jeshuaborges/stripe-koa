var assert 				  = require('assert'),
		knex					  = require('../../utils/knex'),
		databaseCleaner = require('../../utils/database_cleaner');

require('co-mocha');

describe('databaseCleaner', function() {
	// e2e test
	it('empties tables', function(done){
		table = 'customers';

		knex(table).insert({}).then(function() {
			knex(table).count().then(function(count) {
				console.log('count', count);
				assert(count, 1);

				done();
			});
		});

		console.warn('there');

		// yield databaseCleaner('customers');
	});
});
