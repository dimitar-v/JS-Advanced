const rgbToHexColor = require('../06RGBtoHex').rgbToHexColor;
const expect = require('chai').expect;

describe('Testing function rgbToHexColor()', () => {

    describe('Positive tests', () => {
        it('with input (128, 127, 126), should return false', () => {
            expect(rgbToHexColor(128, 127, 126)).to.be.equal("#807F7E");
        });

        it('with input (12, 13, 14), should return "#0C0D0E"', () => {
            expect(rgbToHexColor(12, 13, 14)).to.be.equal("#0C0D0E");
        });

        it('with input (0, 0, 0), should return "#000000"', () => {
            expect(rgbToHexColor(0, 0, 0)).to.be.equal("#000000");
        });

        it('with input (255, 255, 255), should return "#FFFFFF"', () => {
            expect(rgbToHexColor(255, 255, 255)).to.be.equal("#FFFFFF");
        });

        it('with input (15, 127, 127), should return "#0F7F7F"', () => {
            expect(rgbToHexColor(15, 127, 127)).to.be.equal("#0F7F7F");
        });
        
    });
    describe("Negative tests", function () {
        it('with input (256, 257, 258), should return undefined', () => {
            expect(rgbToHexColor(256, 257, 258)).to.be.undefined;
        });

        it('with input (-3, -2, -1), should return undefined', () => {
            expect(rgbToHexColor(-3, -2, -1)).to.be.undefined;
        });

        it('with input (256, 0, 0), should return undefined', () => {
            expect(rgbToHexColor(256, 0, 0)).to.be.undefined;
        });

        it('with input (0, 256, 0), should return undefined', () => {
            expect(rgbToHexColor(0, 256, 0)).to.be.undefined;
        });

        it('with input (0, 0, 256), should return undefined', () => {
            expect(rgbToHexColor(0, 0, 256)).to.be.undefined;
        });

        it('with input (-1, 0, 0), should return undefined', () => {
            expect(rgbToHexColor(-1, 0, 0)).to.be.undefined;
        });

        it('with input (0, -1, 0), should return undefined', () => {
            expect(rgbToHexColor(0, -1, 0)).to.be.undefined;
        });

        it('with input (0, 0, -1), should return undefined', () => {
            expect(rgbToHexColor(0, 0, -1)).to.be.undefined;
        });

        it('with input ("15", "15", "15"), should return undefined', () => {
            expect(rgbToHexColor("15", "15", "15")).to.be.undefined;
        });

        it('with input ([128, 127, 126]), should return undefined', () => {
            expect(rgbToHexColor([128, 127, 126])).to.be.undefined;
        });

        it('with input ({R:128, G:127, B:126}), should return undefined', () => {
            expect(rgbToHexColor({R:128, G:127, B:126})).to.be.undefined;
        });

        it('with input (a) => a++ , should return undefined', () => {
            expect(rgbToHexColor((a) => a++)).to.be.undefined;
        });
    });
});