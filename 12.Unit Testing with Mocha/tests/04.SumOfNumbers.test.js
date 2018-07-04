const sum = require('../04SumOfNumbers').sum;
let expect = require('chai').expect;

describe("Testing sum(arr)", function () {
    describe("Positive tests", function () {
        it("should return 3 for [1, 2]", function () {
            expect(sum([1, 2])).to.be.equal(3);
        });

        it("should return 0 for []", function () {
            expect(sum([])).to.be.equal(0);
        });

        it("should return 3 for ['1','2']", function () {
            expect(sum(['1','2'])).to.be.equal(3);
        });

        it("should return -2.7 for [0.1, -3.2, 0.1, 0.1, 0.1, 0.1]", function () {
            expect(sum([0.1, -3.2, 0.1, 0.1, 0.1, 0.1])).to.be.closeTo(-2.7, 0.00003);
        });
    });
    describe("Negative tests", function () {
        it("should return NaN for [{}, 2]", function () {
            expect(sum([{}, 2])).to.be.NaN;
        });

        it("should return NaN for ['pesho', 2]", function () {
            expect(sum(['pesho', 2])).to.be.NaN;
        });

        it("should return NaN for ['Soft', 'Uni']", function () {
            expect(sum(['Soft', 'Uni'])).to.be.NaN;
        });
    });
});