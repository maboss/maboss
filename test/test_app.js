var request = require('request');

var should = require("should");

describe('maboss', function() {
    describe('dataset', function() {
        //pass parameter done when do call async method.
        it('dataset should success', function(done) {

            var start = new Date();

            var url = 'http://127.0.0.1:6226/dataset';
            request.post(url, function(err, httpResponse, body) {

                console.log(url);
                console.log(body);

                httpResponse.headers['content-type'].should.equal('application/json');
                httpResponse.statusCode.should.equal(200);

                JSON.parse(body).jsonrpc.should.equal("2.0");

                (err == null).should.be.true;

                if (err) {
                    return console.error('failed:', err);
                }

                done();
            }).form({});

        })
    });

    describe('dbfunc', function() {
        it('dbfunc should success', function(done) {

            var start = new Date();
            var url = 'http://127.0.0.1:6227/dbfunc';

            request.post(url, function(err, httpResponse, body) {

                /*
            ms = new Date() - start;
            console.log(url_dbfunc);
            console.log(ms);
            */
                (err == null).should.be.true;
                if (err) {
                    return console.error('failed:', err);
                }
                //throw("err");
                console.log(url);
                console.log(body);

                httpResponse.headers['content-type'].should.equal('application/json');
                httpResponse.statusCode.should.equal(200);

                done();
            }).form({
                key: 'value',
                attr: {
                    'name': 'tobi',
                    'info': {
                        "time": start.toISOString()
                    }
                }
            })

        })
    });

    after(function() {

        //console.log("after")
    });

});