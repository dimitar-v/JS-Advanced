const createList = require('./list-add-swap-shift-left-right').createList;
const expect = require('chai').expect;

describe('Testing createList', () => {
    let list;

    beforeEach(() =>
        list = createList());

    describe('test createList obj and its props', () => {
        it('should return object', () =>
            expect(typeof list).to.equal('object'));

        it('check if data is an empty array', () =>
            expect(list.toString()).to.equal(''));

        it('check if holds property add', () =>
            expect(list.hasOwnProperty("add")).to.be.true);

        it('check if holds property shiftLeft', () =>
            expect(list.hasOwnProperty("shiftLeft")).to.be.true);

        it('check if holds property shiftRight', () =>
            expect(list.hasOwnProperty("shiftRight")).to.be.true);

        it('check if holds property swap', () =>
            expect(list.hasOwnProperty("swap")).to.be.true);
    });

    describe('check if add', () => {
        it('should add element in the end', function () {
            list.add(3);
            expect(list.toString()).to.be.equal('3');
            list.add(4);
            expect(list.toString()).to.be.equal('3, 4');
        });
        it('test it with mixed types', function () {
            let arr = ['a', 3, {}, []];
            list.add('a');
            list.add(3);
            list.add({});
            list.add([]);
            expect(list.toString()).to.be.equal(arr.join(', '));
        });
    });

    describe('check it shiftLeft', () => {
        it('should move first element in the end', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('2, 3, 1', 'not shifted left');
            list.add({});
            list.add(true);
            list.shiftLeft();
            let arr = [3, 1, {}, true, 2];
            expect(list.toString()).to.be.equal(arr.join(', '), 'not shifted left mixed elements');
        });
        it('should empty and one element', function () {
            list.shiftLeft();
            expect(list.toString()).to.be.equal('', 'not empty');
            list.add(1);
            list.shiftLeft();
            expect(list.toString()).to.be.equal('1', 'not one element');
        });
    });

    describe('check it shiftRight', () => {
        it('should move last element in first place', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            list.shiftRight();
            expect(list.toString()).to.be.equal('3, 1, 2', 'not shifted right');
            list.add({});
            list.add(true);
            list.shiftRight();
            let arr = [true, 3, 1, 2, {}];
            expect(list.toString()).to.be.equal(arr.join(', '), 'not shifted right mixed elements');
        });
        it('should empty and one element', function () {
            list.shiftRight();
            expect(list.toString()).to.be.equal('', 'not empty');
            list.add(1);
            list.shiftRight();
            expect(list.toString()).to.be.equal('1', 'not one element');
        });
    });

    describe('check it swap', () => {
        it('first index is integer and in the range', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(1.1, 1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with double');
            expect(list.swap('2', 1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with string');
            expect(list.swap([2], 1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with array');
            expect(list.swap({2:2}, 1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with object');
            expect(list.swap(-1, 1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with negative');
            expect(list.swap(3, 1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with out of range');
        });
        it('second index is integer and in the range', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(1, 1.1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with double');
            expect(list.swap(1, '2')).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with string');
            expect(list.swap(1, [2])).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with array');
            expect(list.swap(1, {2:2})).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with object');
            expect(list.swap(1, -1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with negative');
            expect(list.swap(1, 3)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with out of range');
        });
        it('equal index', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(1, 1)).to.be.equal(false);
            expect(list.toString()).to.be.equal('1, 2, 3', 'swap with equal index');
        });
        it('with 0 and 1', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(0, 1)).to.be.equal(true);
            expect(list.toString()).to.be.equal('2, 1, 3', 'not swap');
        });
        it('with 1 and 0', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(1, 0)).to.be.equal(true);
            expect(list.toString()).to.be.equal('2, 1, 3', 'not swap');
        });
        it('with 2 and 1', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(2, 1)).to.be.equal(true);
            expect(list.toString()).to.be.equal('1, 3, 2', 'not swap');
        });
        it('with 1 and 2', function () {
            list.add(1);
            list.add(2);
            list.add(3);
            expect(list.swap(1, 2)).to.be.equal(true);
            expect(list.toString()).to.be.equal('1, 3, 2', 'not swap');
        });
    });
});