const createCalculator = require('../07AddSubtract').createCalculator;
const expect = require('chai').expect;

describe('Testing function createCalculator()', () => {
    let calc;
    beforeEach(() => calc = createCalculator());

    describe('Positive tests', () => {

        it('should return an object', () => {
            expect(typeof calc).to.be.equal('object');
        });

        it('with input empty, should return 0', () => {
            expect(calc.get()).to.be.equal(0);
        });

        it('with add(1) subtract(-2), should return 3', () => {
            calc.add(1);
            calc.subtract(-2);
            expect(calc.get()).to.be.equal(3);
        });

        it('with subtract(10), should return -10', () => {
            calc.subtract(10);
            expect(calc.get()).to.be.equal(-10);
        });

        it('with add(5) add(50) add(500), should return 555', () => {
            calc.add(5);
            expect(calc.get()).to.be.equal(5);
            calc.add(50);
            expect(calc.get()).to.be.equal(55);
            calc.add(500);
            expect(calc.get()).to.be.equal(555);
        });


        it('with add(3.14) subtract(3.12) add(500), should return 555', () => {
            calc.add(3.14);
            expect(calc.get()).to.be.equal(3.14);
            calc.subtract(3.12);
            expect(calc.get()).to.be.closeTo(0.02, 0.00001);
            calc.add(2.71);
            expect(calc.get()).to.be.equal(2.73);
        });

        it('with add(-5) subtract(-7) add(-1), should return 1', () => {
            calc.add(-5);
            expect(calc.get()).to.be.equal(-5);
            calc.subtract(-7);
            expect(calc.get()).to.be.equal(2);
            calc.add(-1);
            expect(calc.get()).to.be.equal(1);
        });

        it('with add(\'5\') add(\'50\') subtract(\'500\'), should return -445', () => {
            calc.add('5');
            expect(calc.get()).to.be.equal(5);
            calc.add('50');
            expect(calc.get()).to.be.equal(55);
            calc.subtract('500');
            expect(calc.get()).to.be.equal(-445);
        });
    });
    describe("Negative tests", function () {
        it('with add(5, 5), should return 5', () => {
            calc.add(5, 5);
            expect(calc.get()).to.be.equal(5);
        });

        it('with add({R:128, G:127, B:126}), should return NaN', () => {
            calc.add({R:128, G:127, B:126});
            expect(calc.get()).to.be.NaN;
        });

        it('with add((a) => a++), should return NaN', () => {
            calc.add((a) => a++);
            expect(calc.get()).to.be.NaN;
        });

        it('with add([128, 127, 126]), should return NaN', () => {
            calc.add([128, 127, 126]);
            expect(calc.get()).to.be.NaN;
        });
    });
});