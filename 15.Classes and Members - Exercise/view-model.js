class Textbox {
    constructor(selector, regex){
        this._elements = $(selector);
        this.value = $(this._elements[0]).val();
        this._invalidSymbols = regex;
        this.onInput();
    }

    onInput(){
        this.elements.on('input',
            (event) => this.value = $(event.target).val());
        /*
        * <===>
        *     let that = this;
        *     this.element.on('input', function () {
        *           that.value = $(this).val();
        *     }
        * */
    }

    get elements(){
        return this._elements;
    }

    get value(){
        return this._value;
    }

    set value(value){
        this._value = value;
        this.elements.toArray().forEach(el => $(el).val(value));
    }

    isValid(){
        return !this._invalidSymbols.test(this.value);
    }
}

let textbox = new Textbox(".textbox",/[^a-zA-Z0-9]/);
let inputs = $('.textbox');

inputs.on('input',function(){console.log(textbox.value);});
