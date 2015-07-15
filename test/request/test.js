var app = require('../../index');
var request = require('supertest').agent(app.listen());

describe('GET /', function () {
  it('should display success"', function (done) {
    request
      .get('/')
      .expect('Welcome to koajs-starter', done);
  });
});

describe('POST /render/view with urlencoded', function(){
  it('should work', function(done){
    request
      .post('/render/view')
      .send('name=TJ')
      .expect(200)
      .expect({ name: 'TJ' }, done);
  });
});
