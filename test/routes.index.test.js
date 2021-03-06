
process.env.NODE_ENV = 'test';

var chai = require('chai');
var should = chai.should();
var chaiHttp = require('chai-http');
chai.use(chaiHttp);

var server = require('../index');

describe('routes: index', () => {
    describe('GET /', () => {
        it('should return json', (done) => {
            chai.request(server)
            .get('/')
            .end((err,res)=> {
                should.not.exist(err);
                res.status.should.eql(200);
                res.type.should.eql('application/json');
                res.body.status.should.equal('success');
                res.body.message.should.eql('hello,world');
                done();
            });
        });
    });
});