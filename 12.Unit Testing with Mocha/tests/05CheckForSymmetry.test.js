const isSymmetric = require('../05CheckForSymmetry').isSymmetric;
const expect = require('chai').expect;

describe('Testing function isSymmetric()', () => {

    describe('Positive tests', () => {
        it('with a symmetric array [1], should return true', () => {
            expect(isSymmetric([1])).to.equal(true, 'Function not return the correct result');
        });

        it("should return false for [1, 2]", function () {
            expect(isSymmetric([1, 2])).to.be.equal(false, 'Function not return the correct result');
        });

        it("should return true for [1, 2, 1]", function () {
            expect(isSymmetric([1, 2, 1])).to.be.equal(true);
        });

        it("should return true for []", function () {
            expect(isSymmetric([])).to.be.equal(true);
        });

        it('with input [{a:1}, function () { return true;} , {a:1}], should return true', () => {
            expect(isSymmetric([{a:1}, function () { return true;} , {a:1}])).to.equal(true);
        });

        it("with input [{a:1}, function () { return true;} , function () { return true;} , {x:1}], should return false", function () {
            expect(isSymmetric([{a:1}, function () { return true;} , function () { return true;} , {x:1}])).to.be.equal(false);
        });

        it("should return true for ['1', '2', '2', '1']", function () {
            expect(isSymmetric(['1', '2', '2', '1'])).to.be.equal(true);
        });
    });
    describe("Negative tests", function () {
        it('with input {a:[1]}, should return true', () => {
            expect(isSymmetric({a:[1]})).to.equal(false, );
        });

        it("should return false for {1:1, 2:2, 1:1}", function () {
            expect(isSymmetric({1:1, 2:2, 1:1})).to.be.equal(false);
        });

        it("should return false for (a) => a++)", function () {
            expect(isSymmetric((a) => a++)).to.be.equal(false);
        });

        it("should return false for non", function () {
            expect(isSymmetric()).to.be.equal(false);
        });
    });
});