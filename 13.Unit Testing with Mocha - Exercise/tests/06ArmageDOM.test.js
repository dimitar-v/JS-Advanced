let expect = require('chai').expect;
let jsdom = require('jsdom-global')();
let $ = require('jquery');
let nuke = require('../06ArmageDOM').nuke;

describe('Testing ArmageDOM', () => {
    let html;
    let oldHtml;
    beforeEach(function () {
        document.body.innerHTML = `
<div id="target">
    <div class="nested target">
        <p>This is some text</p>
    </div>
    <div class="target">
        <p>Empty div</p>
    </div>
    <div class="inside">
        <span class="nested">Some more text</span>
        <span class="target">Some more text</span>
    </div>
</div>`;
        html = $('#target');
        oldHtml = html.html();
    });

    it(`With invalid selector, should stay same html`, () => {
        let selector1 = $('.target');
        let selector2 = 'invalid selector';
        nuke(selector1, selector2);
        expect(html.html()).to.be.equal(oldHtml);
        nuke(selector2, selector1);
        expect(html.html()).to.be.equal(oldHtml);
    });
    it(`With same selector, should stay same html`, () => {
        let selector1 = $('.target');
        nuke(selector1, selector1);
        expect(html.html()).to.be.equal(oldHtml);
    });
    it(`With valid selector but not common element, should stay same html`, () => {
        let selector1 = $('.target');
        let selector2 = $('.inside');
        nuke(selector1, selector2);
        expect(html.html()).to.be.equal(oldHtml);
    });
    it(`With valid selector and common element, should change html`, () => {
        let selector1 = $('.nested');
        let selector2 = $('.target');
        nuke(selector1, selector2);
        expect(html.html()).to.not.equal(oldHtml);
    });
});