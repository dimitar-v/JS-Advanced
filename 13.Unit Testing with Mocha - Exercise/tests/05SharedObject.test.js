let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');

const sharedObject = require('../05SharedObject').sharedObject;

document.body.innerHTML = `
<div id="wrapper">
    <input type="text" id="name">
    <input type="text" id="income">
</div>`;

describe('Testing Shared Object', () => {
    describe('Initial value tests', () => {
        it(`Test name initial value`,
            () => expect(sharedObject.name).to.be.null);
        it(`Test income initial value`,
            () => expect(sharedObject.income).to.be.null);
    });
    describe('Change name tests', () => {
        it(`With empty string, should be null`, () => {
            sharedObject.changeName('');
            expect(sharedObject.name).to.be.null;
        });
        it(`With non-empty string, should be changed`, () => {
            sharedObject.changeName('Pesho');
            expect(sharedObject.name).to.be.equal('Pesho')
        });
        describe('Input element name tests', () => {
            it(`With empty string, should be not changed`, () => {
                sharedObject.changeName('Name');
                sharedObject.changeName('');
                let nameInput = $('#name');
                expect(nameInput.val()).to.be.equal('Name');
            });
            it(`With non-empty string, should be changed`, () => {
                sharedObject.changeName('Pesho');
                let nameInput = $('#name');
                expect(nameInput.val()).to.be.equal('Pesho')
            });
        });
    });
    describe('Change income tests', () => {
        it(`With positive integer, should changed to positive integer`, () => {
            sharedObject.changeIncome(3);
            expect(sharedObject.income).to.be.equal(3);
        });
        it(`With string, should stay null`, () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome('test');
            expect(sharedObject.income).to.be.equal(5);
        });
        it(`With floating-point, should stay null`, () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(3.14);
            expect(sharedObject.income).to.be.equal(5);
        });
        it(`With zero, should stay null`, () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(0);
            expect(sharedObject.income).to.be.equal(5);
        });
        it(`With negative, should stay null`, () => {
            sharedObject.changeIncome(5);
            sharedObject.changeIncome(-5);
            expect(sharedObject.income).to.be.equal(5);
        });

        describe('Input element income tests', () => {
            it(`With string, should stay null`, () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome('test');
                let incomeInput = $('#income');
                expect(incomeInput.val()).to.be.equal('5');
            });
            it(`With floating-point, should stay null`, () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(3.14);
                let incomeInput = $('#income');
                expect(incomeInput.val()).to.be.equal('5');
            });
            it(`With zero, should stay null`, () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(0);
                let incomeInput = $('#income');
                expect(incomeInput.val()).to.be.equal('5');
            });
            it(`With negative, should stay null`, () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(-5);
                let incomeInput = $('#income');
                expect(incomeInput.val()).to.be.equal('5');
            });
            it(`With positive integer, should changed to positive integer`, () => {
                sharedObject.changeIncome(5);
                sharedObject.changeIncome(3);
                let incomeInput = $('#income');
                expect(incomeInput.val()).to.be.equal('3');
            });
        });
    });
    describe('Update name tests', () => {
        it(`With empty string, should be not changed`, () => {
            sharedObject.changeName('Name');
            let nameInput = $('#name');
            nameInput.val('');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Name');
        });
        it(`With non-empty string, should be changed`, () => {
            let nameInput = $('#name');
            nameInput.val('Pesho');
            sharedObject.updateName();
            expect(sharedObject.name).to.be.equal('Pesho')
        });
    });
    describe('Update income tests', () => {
        it(`With string, should stay null`, () => {
            sharedObject.changeIncome(5);
            let incomeInput = $('#income');
            incomeInput.val('test');
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
        it(`With floating-point, should stay null`, () => {
            sharedObject.changeIncome(5);
            let incomeInput = $('#income');
            incomeInput.val(3.14);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
        it(`With zero, should stay null`, () => {
            sharedObject.changeIncome(5);
            let incomeInput = $('#income');
            incomeInput.val(0);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
        it(`With negative, should stay null`, () => {
            sharedObject.changeIncome(5);
            let incomeInput = $('#income');
            incomeInput.val(-5);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(5);
        });
        it(`With positive integer, should changed to positive integer`, () => {
            sharedObject.changeIncome(5);
            let incomeInput = $('#income');
            incomeInput.val(3);
            sharedObject.updateIncome();
            expect(sharedObject.income).to.be.equal(3);
        });
    });
});