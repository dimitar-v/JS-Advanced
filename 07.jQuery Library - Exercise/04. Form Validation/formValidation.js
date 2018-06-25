function validate() {
    let nameRegex = /^[a-zA-Z0-9]{3,20}$/;
    let emailRegex = /^\S+@\S*\.\S*$/;
    let passRegex = /^\w{5,15}$/;
    let usernameImput = $('#username');
    let emailInput = $('#email');
    let passwordInput = $('#password');
    let confpassInput = $('#confirm-password');
    let companyNumerInput = $('#companyNumber');
    let companyCheckbox = $('#company');
    let companyInfo = $('#companyInfo');
    let submit = $('#submit');
    let valid = $('#valid');

    companyCheckbox.change(() => companyInfo.toggle(this.checked));

    submit.click(function (ev) {
        ev.preventDefault();
        let isValid = true;

        checkValidity(nameRegex, usernameImput);
        checkValidity(emailRegex, emailInput);

        if(!passRegex.test(passwordInput.val()) || passwordInput.val() !== confpassInput.val()){
            passwordInput.css('border','solid red');
            confpassInput.css('border','solid red');
            isValid = false;
        } else {
            passwordInput.css('border','none');
            confpassInput.css('border','none');
        }

        if (companyCheckbox.is(':checked')) {
            let compNum = +companyNumerInput.val();
            if(compNum < 1000 || compNum > 9999){
                companyNumerInput.css('border','solid red');
                isValid = false;
            } else
                companyNumerInput.css('border','none');
        }

        function checkValidity(regex, input) {
            if(!regex.test(input.val())){
                input.css('border','solid red');
                isValid = false;
            } else
                input.css('border','none');
        }

        if(isValid)
            valid.show();
        else
            valid.hide();
    });
}
