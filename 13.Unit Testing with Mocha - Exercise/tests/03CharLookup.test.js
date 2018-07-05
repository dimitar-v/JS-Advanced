const lookupChar = require('../03CharLookup').lookupChar;
const expect = require('chai').expect;

describe('Testing function lookupChar()', () => {
    let typeOfTesting = ['Positive tests', 'Negative tests'];
    let input = [['string', 1], ['1234', 0], ['1234', 1], ['1234', 2], ['1234', 3],
        ['1234', -1], ['1234', -100], ['1234', 4], ['1234', 100], ['1234', 5],
        [1234, 5], ['1234', '5'], [' ', null], ['abc', 3.5], [['array ', 'a', 'b', 'c'], 2], [{str: 'string'}, 2], [(a)=> a++, 2]];
    let output = ['t', '1', '2', '3', '4',
        'Incorrect index', 'Incorrect index', 'Incorrect index', 'Incorrect index', 'Incorrect index',
        undefined, undefined, undefined, undefined, undefined, undefined, undefined];

    for (const type of typeOfTesting)
        describe(type, () => {
            if (type == 'Positive tests')
                for (let i = 0; i < 5; i++) {
                    it(`with input '${input[i][0]}, ${input[i][1]}', should return '${output[i]}'`,
                        () => expect(lookupChar(input[i][0], input[i][1])).to.be.equal(output[i]));
                }
            else
                for (let i = 5; i < input.length; i++) {
                    it(`with input '${input[i][0]}, ${input[i][1]}', should return '${output[i]}'`,
                        () => expect(lookupChar(input[i][0], input[i][1])).to.be.equal(output[i]));
                }
        });
});