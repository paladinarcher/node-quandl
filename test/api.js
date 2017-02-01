var assert = require("assert");
var sinon = require("sinon");
var request = require("request");
var Quandl = require([__dirname, "..", "main"].join("/"));
var quandl, requestStub;

describe("api", function(){
    before(function(fn){
        quandl = new Quandl();
        requestStub = sinon.stub(request, "get");
        fn();
    });

    describe("Quandl", function() {
        describe("#dataset()", function() {
            it("returns a promise if callback is omitted", function() {
                assert(quandl.dataset({}) instanceof Promise);
            });

            it("returns undefined if callback is provided", function() {
                assert.equal(quandl.dataset({}, function(){}), undefined);
                assert.equal(quandl.dataset({}, {}, function(){}), undefined);
            });

        });

        describe("#datatables()", function() {
            it("returns a promise if callback is omitted", function() {
                assert(quandl.datatables({}) instanceof Promise);
            });

            it("returns undefined if callback is provided", function() {
                assert.equal(quandl.datatables({}, function(){}), undefined);
                assert.equal(quandl.datatables({}, {}, function(){}), undefined);
            });

        });

        describe("#metadata()", function() {
            it("returns a promise if callback is omitted", function() {
                assert(quandl.metadata({}) instanceof Promise);
            });

            it("returns undefined if callback is provided", function() {
                assert.equal(quandl.metadata({}, function(){}), undefined);
                assert.equal(quandl.metadata({}, {}, function(){}), undefined);
            });

        });

        describe("#multiset()", function() {
            it("returns a promise if callback is omitted", function() {
                assert(quandl.multiset({}) instanceof Promise);
            });

            it("returns undefined if callback is provided", function() {
                assert.equal(quandl.multiset({}, function(){}), undefined);
                assert.equal(quandl.multiset({}, {}, function(){}), undefined);
            });

        });

        describe("#favorites()", function() {
            it("returns a promise if callback is omitted", function() {
                assert(quandl.favorites() instanceof Promise);
            });

            it("returns undefined if callback is provided", function() {
                assert.equal(quandl.favorites(function(){}), undefined);
                assert.equal(quandl.favorites({}, function(){}), undefined);
            });

        });

        describe("#search()", function() {
            it("returns a promise if callback is omitted", function() {
                assert(quandl.search("") instanceof Promise);
            });

            it("returns undefined if callback is provided", function() {
                assert.equal(quandl.search("", function(){}), undefined);
                assert.equal(quandl.search("", {}, function(){}), undefined);
            });

        });

    });

});
