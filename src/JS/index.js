function validInput (input, res, selector, max = 99999, min = 1, errors) {
    input.addEventListener("input", () => {
        if (input.value === res) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else if (input.value.length > max) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = `Поле не должно превышать ${max} символов`;
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else if (input.value.length < min) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = `Поле должно состоять минимум из ${min} символов`;
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else {
            input.parentElement.parentElement.querySelector(".form__error").style.display="none";
            input.parentElement.classList.remove("form__input-invalid");
        }
    })
}

function validEmail(input, selector, errors) {
    input.addEventListener("input", () => {
        if (input.value.indexOf("@") === -1) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = errors[1];
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else if (!input.value.match(/^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu)) {
            console.log("ok");
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = errors[1];
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled"); 

        } else {
            input.parentElement.parentElement.querySelector(".form__error").style.display="none";
            input.parentElement.classList.remove("form__input-invalid");
        }
    })
}

function passValid (input, inputConf, selector, errors) {
    inputConf.addEventListener("input", () => {
        console.log(inputConf.value + ' ' + input.value);
        if (inputConf.value === '') {
            inputConf.parentElement.parentElement.querySelector(".form__error").style.display="block";
            inputConf.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            inputConf.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else if (input.value !== inputConf.value || inputConf.value !== input.value) {
            inputConf.parentElement.parentElement.querySelector(".form__error").style.display="block";
            inputConf.parentElement.parentElement.querySelector(".form__error").textContent = errors[3];
            inputConf.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else {
            input.parentElement.parentElement.querySelector(".form__error").style.display="none";
            input.parentElement.classList.remove("form__input-invalid");
            inputConf.parentElement.parentElement.querySelector(".form__error").style.display="none";
            inputConf.parentElement.classList.remove("form__input-invalid");
        }
    })
    input.addEventListener("input", () => {
        console.log(inputConf.value + ' ' + input.value);
        if (input.value === '') {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else if (!input.value.match(/(?=.*[a-z])/g)) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = "Пароль должен содержать минимум одну букву в нижнем регистре";
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else if (!input.value.match(/^[A-Za-z0-9!@#$%^&*]+$/)) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = "Пароль должен содержать только латинские буквы и цифры";
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else if (!input.value.match(/(?=.*[A-Z])/g)) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = "Пароль должен содержать минимум одну букву в верхнем регистре";
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else if (!input.value.match(/(?=.*[0-9])/g)) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = "Пароль должен содержать цифры";
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else if (input.value < min) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = "Пароль должен содержать не менее 8 символов";
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else if (inputConf.value !== input.value || input.value !== inputConf.value) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = errors[3];
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else {
            input.parentElement.parentElement.querySelector(".form__error").style.display="none";
            input.parentElement.classList.remove("form__input-invalid");
            inputConf.parentElement.parentElement.querySelector(".form__error").style.display="none";
            inputConf.parentElement.classList.remove("form__input-invalid");
        }
    })
}

function validPhone(input, res, selector, min = 0, errors) {
    input.addEventListener("input", () => {
        if (input.value === res) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else if (input.value.indexOf('_') != -1) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = `Поле не заполнено`;
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else if (input.value.length < min) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = `Поле должно состоять минимум из ${min} символов`;
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else {
            input.parentElement.parentElement.querySelector(".form__error").style.display="none";
            input.parentElement.classList.remove("form__input-invalid");
        }
    })

}

function validNum(input, res, selector, max = 20, min = 10, errors) {
    input.addEventListener("input", () => {
        console.log(input.value.length);
        if (input.value === res) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else if (isNaN(input.value)) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = errors[4];
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else if (input.value.length < min) {
            console.log('ok');
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = `Поле должно состоять минимум из ${min} символов`;
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else if (input.value.length > max) {
            input.parentElement.parentElement.querySelector(".form__error").style.display="block";
            input.parentElement.parentElement.querySelector(".form__error").textContent = `Поле не должно превышать ${max} символов`;
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");

        } else {
            input.parentElement.parentElement.querySelector(".form__error").style.display="none";
            input.parentElement.classList.remove("form__input-invalid");
        }
    })

}

function validCheckbox(input, res, selector) {
    input.addEventListener("input", () => {
        if (input.checked === res) {
            input.parentElement.classList.add("form__input-invalid");
            selector.classList.add("disabled");
        } else {
            input.parentElement.classList.remove("form__input-invalid");
        }
    })
}

document.addEventListener('DOMContentLoaded', function () {
    // phone mask
    var phones = document.querySelectorAll('[name="phone"]');
    var phoheMaskOptions = {
        mask: '+7 (000) 000-00-00',
        lazy: false
    } 

    phones.forEach(element => {
        var mask = new IMask(element, phoheMaskOptions);
    });

    const burger = document.querySelector(".header__burger");
    const menuItem = document.querySelectorAll(".header__menu-item");
    const menu = document.querySelector(".header__menu");
    const cookiesAlert = document.querySelector(".cookies-alert");
    const cookiesAlertClose = document.querySelector(".cookies-alert__btn");
    const popLoad = document.querySelector(".popup-load");
    let errors = ['Поле не заполнено', "ВВЕДИТЕ ВАШ E-MAIL В ПРАВИЛЬНОМ ФОРМАТЕ.", "Некорректный ИИН", "Пароли должны совпадать", "Некорректное значение"];

    if (document.querySelector(".access__form")) {
        const accesForm = document.querySelector(".access__form");
        const inputAll = accesForm.querySelectorAll("input")
        const inputName = accesForm.querySelector("[name='companyName']");
        const inputIin = accesForm.querySelector("[name='iin']");
        const inputEmail = accesForm.querySelector("[name='email']");
        const inputPhone = accesForm.querySelector("[name='phone']");
        const inputPass = accesForm.querySelector("[name='password']");
        const inputConfirmPass = accesForm.querySelector("[name='confirmPassword']");
        const inputOfert = accesForm.querySelector("[name='agreeOfert']");
        const inputPersonal = accesForm.querySelector('[name="agreePersonal"]');
        const btn = accesForm.querySelector("[type='submit']");

        btn.classList.add("disabled");

        validInput(inputName, '', btn, 10, errors);
        validNum(inputIin, '', btn, 12, 10, errors);
        validEmail(inputEmail, btn, errors);
        validPhone(inputPhone, '', btn, 0, errors);
        passValid(inputPass, inputConfirmPass, btn, errors);
        validInput(inputConfirmPass, '', btn, errors);
        validCheckbox(inputOfert, false, btn);
        validCheckbox(inputPersonal, false, btn);

        inputAll.forEach(el => {
                el.addEventListener("input", () => {
                    if (inputName.parentElement.classList.contains("form__input-invalid") || inputName.value === '') {
                        btn.classList.add("disabled");
                    } else if (inputName.parentElement.classList.contains("form__input-invalid") || inputName.value === '') {
                        btn.classList.add("disabled");
                    } else if (inputEmail.parentElement.classList.contains("form__input-invalid") || inputEmail.value === '') {
                        btn.classList.add("disabled");
                    } else if (inputPhone.parentElement.classList.contains("form__input-invalid") || inputPhone.value === '') {
                        btn.classList.add("disabled");
                    } else if (inputPass.parentElement.classList.contains("form__input-invalid") || inputPass.value === '') {
                        btn.classList.add("disabled");
                    } else if (inputConfirmPass.parentElement.classList.contains("form__input-invalid") || inputConfirmPass.value === '') {
                        btn.classList.add("disabled");
                    } else if (inputOfert.parentElement.classList.contains("form__input-invalid") || inputOfert.value === '') {
                        btn.classList.add("disabled");
                    } else if (inputPersonal.parentElement.classList.contains("form__input-invalid") || inputPersonal.value === '') {
                        btn.classList.add("disabled");
                    } else {
                        btn.classList.remove("disabled");
                    }

             })
        });

        accesForm.addEventListener("submit", (e) => {
            if (inputName.parentElement.classList.contains("form__input-invalid")) {
                e.preventDefault();
            }
            if (inputName.parentElement.classList.contains("form__input-invalid")) {
                e.preventDefault();
            }
            if (inputEmail.parentElement.classList.contains("form__input-invalid")) {
                e.preventDefault();
            }
            if (inputPhone.parentElement.classList.contains("form__input-invalid")) {
                e.preventDefault();
            }
            if (inputPass.parentElement.classList.contains("form__input-invalid")) {
                e.preventDefault();
            }
            if (inputConfirmPass.parentElement.classList.contains("form__input-invalid")) {
                e.preventDefault();
            }
            if (inputOfert.parentElement.classList.contains("form__input-invalid")) {
                e.preventDefault();
            }
            if (inputPersonal.parentElement.classList.contains("form__input-invalid")) {
                e.preventDefault();
            }
        })

        btn.addEventListener("click", () => {
            if (inputName.value === '') {
                inputName.parentElement.classList.add("form__input-invalid");
                inputName.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputName.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            }
            if (inputIin.value === '') {
                inputIin.parentElement.classList.add("form__input-invalid");
                inputIin.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputIin.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            }
            if (inputEmail.value.indexOf("@") === -1) {
                inputEmail.parentElement.classList.add("form__input-invalid");
                inputEmail.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputEmail.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            }
            if (inputPhone.value === '' || inputPhone.value.indexOf('_')) {
                console.log(inputPhone.value);
                inputPhone.parentElement.classList.add("form__input-invalid");
                inputPhone.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputPhone.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            }
            if (inputPass.value === '') {
                inputPass.parentElement.classList.add("form__input-invalid");
                inputPass.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputPass.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            } 
            if (inputConfirmPass.value === '') {
                inputConfirmPass.parentElement.classList.add("form__input-invalid");
                inputConfirmPass.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputConfirmPass.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            } 
            if (inputOfert.checked === false) {
                inputOfert.parentElement.classList.add("form__input-invalid");
            }
            if (inputPersonal.checked === false) {
                inputPersonal.parentElement.classList.add("form__input-invalid");
            }
        })
    }

    if (document.querySelector(".questions__form")) {
        const qForm = document.querySelector(".questions__form");
        const inputsAll = qForm.querySelectorAll("input");
        const inputName = qForm.querySelector("[name='companyName']");
        const inputEmali = qForm.querySelector("[name='email']");
        const inputPersonal = qForm.querySelector('[name="agreePersonal"]');
        const inputMessage = qForm.querySelector('[name="message"]');
        const btn = qForm.querySelector("[type='submit']");

        validInput(inputName, '', btn, 150, errors);
        validEmail(inputEmali, btn, errors);
        validInput(inputMessage, '', btn, 9999, 30, errors);
        validCheckbox(inputPersonal, false, btn);

        inputsAll.forEach(el => {
            el.addEventListener("input", () => {
                if (inputName.parentElement.classList.contains("form__input-invalid")) {
                    btn.classList.add("disabled");
                } else if (inputEmali.parentElement.classList.contains("form__input-invalid")) {
                    btn.classList.add("disabled");
                } else if (inputPersonal.parentElement.classList.contains("form__input-invalid")) {
                    btn.classList.add("disabled");
                } else if (inputMessage.parentElement.classList.contains("form__input-invalid")) {
                    btn.classList.add("disabled");
    
                } else {
                    btn.classList.remove("disabled");
                }
            })
        });

        btn.classList.add("disabled");

        btn.addEventListener("click", () => {
            if (inputName.value === '') {
                inputName.parentElement.classList.add("form__input-invalid");
                inputName.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputName.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            }
            if (inputEmali.value === '') {
                inputEmali.parentElement.classList.add("form__input-invalid");
                inputEmali.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputEmali.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            } else if (inputEmali.value.indexOf("@") === -1) {
                inputEmali.parentElement.classList.add("form__input-invalid");
                inputEmali.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputEmali.parentElement.parentElement.querySelector(".form__error").textContent = errors[1];
            }
            if (inputPersonal.checked === false) {
                inputPersonal.parentElement.classList.add("form__input-invalid");
            }
            if (inputMessage.value === '') {
                inputMessage.parentElement.classList.add("form__input-invalid");
                inputMessage.parentElement.parentElement.querySelector(".form__error").style.display="block";
                inputMessage.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            }

            if (!btn.classList.contains("disabled")) {
                popLoad.classList.add("show");
                document.body.classList.add("lock");
            }
        });

        qForm.addEventListener('submit', (e)=> {
            e.preventDefault();
        })

    }

    burger.addEventListener("click", () => {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
    });

    menuItem.forEach(el => {
        el.addEventListener("click", () => {
            burger.classList.toggle("active");
            menu.classList.toggle("active");
        })
    })

    if (document.cookie.indexOf("cookieOn") < 0) {
        cookiesAlert.classList.add("active");
    }

    cookiesAlertClose.addEventListener("click", () => {
        cookiesAlert.classList.remove("active");
        document.cookie = "cookieOn=true";
    });

    if (document.querySelector(".recovery")) {
        const formRecovery = document.querySelector(".recovery");
        const formRecoveryEmail = formRecovery.querySelector("[type='email']");
        const formRecoveryAgree = formRecovery.querySelector("[name='agreePersonal']");
        const formRecoveryBtn = formRecovery.querySelector("[type='submit'");

        formRecoveryBtn.classList.add("disabled");


        validEmail(formRecoveryEmail, formRecoveryBtn, errors);
        validCheckbox(formRecoveryAgree, formRecoveryBtn, errors);

        formRecovery.querySelectorAll("input").forEach(el => {
            el.addEventListener("input", () => {
                if (formRecoveryEmail.value.indexOf("@") === -1) {
                    formRecoveryEmail.parentElement.classList.add("form__input-invalid");
                    formRecoveryBtn.classList.add("disabled");
                } else if(formRecoveryAgree.checked === false) {
                    formRecoveryEmail.parentElement.classList.add("form__input-invalid");
                    formRecoveryBtn.classList.add("disabled");
                } else {
                    formRecoveryBtn.classList.remove("disabled");
                }
            })
        })
        formRecovery.addEventListener("submit", (e) => {
            if (formRecoveryEmail.value.indexOf("@") <= 0) {
                formRecoveryEmail.parentElement.classList.add("form__input-invalid");
                formRecoveryEmail.parentElement.parentElement.querySelector(".form__error").style.display="block";
                formRecoveryEmail.parentElement.parentElement.querySelector(".form__error").textContent = errors[1];
                e.preventDefault();
            } else {
                formRecoveryEmail.parentElement.classList.remove("form__input-invalid");
            }
            if (formRecoveryAgree.checked === false) {
                formRecoveryAgree.parentElement.classList.add("form__input-invalid");
                e.preventDefault();
            } else {
                formRecoveryEmail.parentElement.classList.remove("form__input-invalid");
            }
        });
    }

    if (document.querySelector(".questions__form")) {
        document.querySelector(".questions__form-clear").addEventListener("click", () => {
            document.querySelector(".questions__form").reset();
        })
    }

    if (document.querySelector(".login__form")) {
        const login = document.querySelector(".login__form");
        const loginAll = login.querySelectorAll("input[required]");
        const loginEmail = login.querySelector("[name='email']");
        const loginPass = login.querySelector("[name='password']");
        const loginPersonal = login.querySelector("[name='agreePersonal']");
        const btn = login.querySelector("[type='submit']");

        validEmail(loginEmail, btn, errors);
        validInput(loginPass, '', btn, errors);
        validCheckbox(loginPersonal, btn, errors);

        btn.classList.add("disabled");

        loginAll.forEach(el => {
            el.addEventListener("input", () => {
                if (loginPass.value === '') {
                    btn.classList.add("disabled");
                } else if (loginEmail.parentElement.classList.contains("form__input-invalid")) {
                    btn.classList.add("disabled");
                } else if (loginPersonal.value === false) {
                    btn.classList.add("disabled");
                } else {
                    btn.classList.remove("disabled");
                }
            })
        })

        btn.addEventListener("click", () => {
            if (loginPass.value === '') {
                loginPass.parentElement.classList.add("form__input-invalid");
                loginPass.parentElement.parentElement.querySelector(".form__error").style.display="block";
                loginPass.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            }
            if (loginEmail.value === '') {
                loginEmail.parentElement.classList.add("form__input-invalid");
                loginEmail.parentElement.parentElement.querySelector(".form__error").style.display="block";
                loginEmail.parentElement.parentElement.querySelector(".form__error").textContent = errors[0];
            } else if (loginEmail.value.indexOf("@") === -1) {
                loginEmail.parentElement.classList.add("form__input-invalid");
                loginEmail.parentElement.parentElement.querySelector(".form__error").style.display="block";
                loginEmail.parentElement.parentElement.querySelector(".form__error").textContent = errors[1];
                
            }

            if (loginPersonal.checked === false) {
                loginPersonal.parentElement.classList.add("form__input-invalid");
            }

            if (!btn.classList.contains("disabled")) {
                popLoad.classList.add("show");
                document.body.classList.add("lock");
            }
        });

        login.addEventListener('submit', (e)=> {
            e.preventDefault();
        })
    }



});