    // load Unit.js module
    var ui = require('app/assets/js/ui');
    var test = require('unit.js');
    describe("tests", function() {
        it('will work', function() {
        // just for example of tested value
        var example = 'hello';
        // assert that example variable is a string
        test.string(example);
        // or with Must.js
        test.must(example).be.a.string();
        // or with assert
        test.assert(typeof example === 'string');
        });
    });