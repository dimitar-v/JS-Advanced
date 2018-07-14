const SubscriptionCard = require('./SubscriptionCard');
const expect = require('chai').expect;

describe('Testing SubscriptionCard', () => {
    let card;

    beforeEach(() =>
        card =  new SubscriptionCard('Pesho', 'Petrov', '00000000'));

    describe('test create card', () => {
        it('should return object', () =>
            expect(typeof card).to.equal('object'));
        it('firstName', () =>
            expect(card.firstName).to.equal('Pesho'));
        it('lastName', () =>
            expect(card.lastName).to.equal('Petrov'));
        it('SSN', () =>
            expect(card.SSN).to.equal('00000000'));
        it('isBlocked', () =>
            expect(card.isBlocked).to.equal(false));
        it('change firstName', () => {
            card.firstName = 'test';
            card.lastName = 'test';
            card.SSN = 'test';
            expect(card.firstName).to.equal('Pesho');
            expect(card.lastName).to.equal('Petrov');
            expect(card.SSN).to.equal('00000000');
        });
    });

    describe('test add subscription', () => {
        it('one line', () =>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('120', new Date('2018-04-21'))).to.equal(false);
            expect(card.isValid('120', new Date('2018-05-22'))).to.equal(false);
            expect(card.isValid('120', new Date('2018-04-22'))).to.equal(true);
            expect(card.isValid('120', new Date('2018-05-21'))).to.equal(true);
        });
        it('all line', () =>{
            card.addSubscription('*', new Date('2018-04-22'), new Date('2018-05-21'));
            expect(card.isValid('1', new Date('2018-04-21'))).to.equal(false);
            expect(card.isValid('2', new Date('2018-05-22'))).to.equal(false);
            expect(card.isValid('3', new Date('2018-04-22'))).to.equal(true);
            expect(card.isValid('4', new Date('2018-05-21'))).to.equal(true);
        });
        it('more subscriptions', () =>{
            card.addSubscription('120', new Date('2018-04-22'), new Date('2018-05-21'));
            card.addSubscription('*', new Date('2018-05-25'), new Date('2018-06-24'));
            expect(card.isValid('120', new Date('2018-04-21'))).to.equal(false);
            expect(card.isValid('120', new Date('2018-05-22'))).to.equal(false);
            expect(card.isValid('120', new Date('2018-04-22'))).to.equal(true);
            expect(card.isValid('120', new Date('2018-05-21'))).to.equal(true);
            expect(card.isValid('120', new Date('2018-05-24'))).to.equal(false);
            expect(card.isValid('120', new Date('2018-06-25'))).to.equal(false);
            expect(card.isValid('120', new Date('2018-05-25'))).to.equal(true);
            expect(card.isValid('120', new Date('2018-06-24'))).to.equal(true);
            expect(card.isValid('1', new Date('2018-04-21'))).to.equal(false);
            expect(card.isValid('2', new Date('2018-05-22'))).to.equal(false);
            expect(card.isValid('3', new Date('2018-04-22'))).to.equal(false);
            expect(card.isValid('4', new Date('2018-05-21'))).to.equal(false);
            expect(card.isValid('1', new Date('2018-05-24'))).to.equal(false);
            expect(card.isValid('2', new Date('2018-06-25'))).to.equal(false);
            expect(card.isValid('3', new Date('2018-05-25'))).to.equal(true);
            expect(card.isValid('4', new Date('2018-06-24'))).to.equal(true);
            card.block();
            expect(card.isValid('4', new Date('2018-06-24'))).to.equal(false);
            card.unblock();
            expect(card.isValid('4', new Date('2018-06-24'))).to.equal(true);
        });
    });
});