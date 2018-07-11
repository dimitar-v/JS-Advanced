let result = (function() {

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

    class Form {
        constructor(){
            this._element = $('<div>').addClass('form');
            this.textboxes = arguments;
        }

        get textboxes() {
            return this._textboxes;
        }

        set textboxes(args) {
            for (const argument of args) {
                if (!argument instanceof Textbox)
                    throw new Error('The give parameter is not a textbox!');
            }

            this._textboxes = args;
            for (const textbox of this._textboxes) {
                for (const e of textbox._elements) {
                    this._element.append($(e));
                }
            }
        }

        submit(){
            let isAllValid = true;
            for (const textbox of this._textboxes) {
                if (textbox.isValid()){
                    for (const el of textbox._elements) {
                        $(el).css('border', '2px solid green');
                    }
                } else {
                    for (const el of textbox._elements) {
                        $(el).css('border', '2px solid red');
                    }
                    isAllValid = false;
                }
            }

            return isAllValid;
        }

        attach(selector){
            $(selector).append(this._element);
        }
    }

    return {
        Textbox: Textbox,
        Form: Form
    }
}());

let Textbox = result.Textbox;
let Form = result.Form;
let username = new Textbox("#username",/[^a-zA-Z0-9]/);
let password = new Textbox("#password",/[^a-zA-Z]/);
username.value = "username";
password.value = "password2";
let form = new Form(username,password);
form.attach("#root");
