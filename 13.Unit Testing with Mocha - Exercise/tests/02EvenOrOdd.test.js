const isOddOrEven = require('../02EvenOrOdd').isOddOrEven;
const expect = require('chai').expect;

describe('Testing function isOddOrEven()', () => {
    let input = ['', ' ', 'test', 'test123', '1234567890123456', '12345678901234567', null, 10, ['array ', 'a', 'b', 'c'], {str: 'string'}, (a)=> a++];
    let output = ['even', 'odd', "even", "odd", "even", "odd", undefined, undefined, undefined, undefined, undefined, undefined];
    let typeOfTesting = ['Positive tests', 'Negative tests'];

    for (const type of typeOfTesting)
        describe(type, () => {
            if (type == 'Positive tests')
                for (let i = 0; i < 6; i++) {
                    it(`with input '${input[i]}', should return '${output[i]}'`,
                        () => expect(isOddOrEven(input[i])).to.be.equal(output[i]));
                }
            else
                for (let i = 6; i < input.length; i++) {
                    it(`with input '${input[i]}', should return '${output[i]}'`,
                        () => expect(isOddOrEven(input[i])).to.be.equal(output[i]));
                }
        });
});