const mathEnforcer = require('../04MathEnforcer').mathEnforcer;
const expect = require('chai').expect;

describe('Testing function mathEnforcer()', () => {

    describe('Positive tests', () => {
        describe('addFive', () => {
            it(`with input '10', should return '15'`,
                () => expect(mathEnforcer.addFive(10)).to.be.equal(15));

            it(`with input '0', should return '5'`,
                () => expect(mathEnforcer.addFive(0)).to.be.equal(5));

            it(`with input '3.5', should return '8.5'`,
                () => expect(mathEnforcer.addFive(3.5)).to.be.equal(8.5));

            it(`with input '-15', should return '-10`,
                () => expect(mathEnforcer.addFive(-15)).to.be.equal(-10));
        });

        describe('subtractTen', () => {
            it(`with input '1', should return '-9'`,
                () => expect(mathEnforcer.subtractTen(1)).to.be.equal(-9));

            it(`with input '0', should return '-10'`,
                () => expect(mathEnforcer.subtractTen(0)).to.be.equal(-10));

            it(`with input '13.14', should return '3.14'`,
                () => expect(mathEnforcer.subtractTen(13.14)).to.be.closeTo(3.14, 0.000001));

            it(`with input '-100', should return '-110'`,
                () => expect(mathEnforcer.subtractTen(-100)).to.be.equal(-110));
        });

        describe('sum', () => {
            it(`with input '3, 5', should return '8'`,
                () => expect(mathEnforcer.sum(3, 5)).to.be.equal(8));

            it(`with input '0, 1', should return '1'`,
                () => expect(mathEnforcer.sum(0, 1)).to.be.equal(1));

            it(`with input '2.71, 3.14', should return '5.85'`,
                () => expect(mathEnforcer.sum(2.71, 3.14)).to.be.equal(5.85));

            it(`with input '-3, -7', should return '-10'`,
                () => expect(mathEnforcer.sum(-3, -7)).to.be.equal(-10));
        });
    });

    describe('Negative tests', () => {
        describe('addFive', () => {
            it(`with input ''10'', should return 'undefined'`,
                () => expect(mathEnforcer.addFive('10')).to.be.undefined);

            it(`with input '[3, 5, 8]', should return 'undefined'`,
                () => expect(mathEnforcer.addFive([3, 5, 8])).to.be.undefined);

            it(`with input '{5:5}', should return 'undefined'`,
                () => expect(mathEnforcer.addFive({5:5})).to.be.undefined);

            it(`with input '(a)=> a++', should return '-undefined'`,
                () => expect(mathEnforcer.addFive((a)=> a++)).to.be.undefined);
        });

        describe('subtractTen', () => {
            it(`with input ''1'', should return 'undefined'`,
                () => expect(mathEnforcer.subtractTen('1')).to.be.undefined);

            it(`with input '[1, 7, 9]', should return 'undefined'`,
                () => expect(mathEnforcer.subtractTen([1, 7, 9])).to.be.undefined);

            it(`with input '{5:5}', should return 'undefined'`,
                () => expect(mathEnforcer.subtractTen({5:5})).to.be.undefined);

            it(`with input '(a)=> a++', should return 'undefined'`,
                () => expect(mathEnforcer.subtractTen((a)=> a++)).to.be.undefined);
        });

        describe('sum', () => {
            it(`with input ''3', '5'', should return 'undefined'`,
                () => expect(mathEnforcer.sum('3', '5')).to.be.undefined);

            it(`with input '[3, 5], 5', should return 'undefined'`,
                () => expect(mathEnforcer.sum([3, 5], 5)).to.be.undefined);

            it(`with input '[3, [5, 5]]', should return 'undefined'`,
                () => expect(mathEnforcer.sum(3, [5, 5])).to.be.undefined);

            it(`with input ''3', 5', should return 'undefined'`,
                () => expect(mathEnforcer.sum('3', 5)).to.be.undefined);

            it(`with input '3, '5'', should return 'undefined'`,
                () => expect(mathEnforcer.sum([3, '5'])).to.be.undefined);

        });
    });
});