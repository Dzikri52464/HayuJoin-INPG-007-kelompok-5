var url = window.location.href;

if (url.indexOf("register.html") > -1) {
    var user = {
        name: '',
        email: '',
        password: '',
        loginStatus: 0
    }
    
    var usernameCheck = false;
    var passwordCheck = false;
    var emailCheck = false;
    
    var username = document.getElementById("username");
    var email = document.getElementById("email");
    var password = document.getElementById("password");
    var passwordValidation = document.getElementById("passwordValidation");
    
    var lowerCaseLetters = /[a-z]/g;
    var upperCaseLetters = /[A-Z]/g;
    var numbers = /[0-9]/g;
    var min5 = /^.{5,}$/;
    var max10 = /^.{1,10}$/;
    var min6 = /^.{6,}$/;
    var max12 = /^.{1,12}$/;
    var space = /\s/;
    var specialCharacters = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
    var emailRegex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/;
    
    username.oninput = function() {
        var usernameError = document.getElementById("usernameError");
        if (!username.value == '') {
            if (username.value.match(min5) && username.value.match(max10)) {
                if (!username.value.match(space) && !username.value.match(specialCharacters)) {
                    usernameError.innerHTML = '';
                    usernameCheck = true;
                } else {
                    usernameError.innerHTML = "Username can not contain space and special characters";
                }
            } else {
                usernameError.innerHTML = 'Username must be between 5 and 10 characters';
            }
        } else {
            usernameError.innerHTML = "Username cannot be empty";
        }
    }
    
    email.oninput = function() {
        var emailError = document.getElementById("emailError");
        if (!email.value == '') {
            if (email.value.match(emailRegex)) {
                emailError.innerHTML = '';
                emailCheck = true;
            } else {
                emailError.innerHTML = "Email is not valid";
            }
        } else {
            emailError.innerHTML = "Email cannot be empty";
        }
    }
    
    password.oninput = function() {
        var passwordError = document.getElementById("passwordError");
        var passwordValidationError = document.getElementById("passwordValidationError");
        if (!password.value == null || !password.value == "") {
            if(password.value.match(lowerCaseLetters)){
                if(password.value.match(upperCaseLetters)){
                    if(password.value.match(numbers)){
                        if(password.value.match(min6) && password.value.match(max12)){
                            if(!password.value.match(space) && !password.value.match(specialCharacters)){
                                if(password.value == passwordValidation.value) {
                                    passwordError.innerHTML = '';
                                    passwordValidationError.innerHTML = '';
                                    passwordCheck = true;
                                } else {
                                    passwordError.innerHTML = "Password does not match";
                                    passwordValidationError.innerHTML = "Password does not match";
                                    passwordValidation.oninput = function() {
                                        if(password.value == passwordValidation.value){
                                            passwordError.innerHTML = '';
                                            passwordValidationError.innerHTML = '';
                                            passwordCheck = true;
                                        }
                                    }
                                }
                            }else{
                                passwordError.innerHTML = "Password can not contain space and special characters";
                            }
                        } else {
                            passwordError.innerHTML = "Password must be between 6 and 12 characters";
                        }
                    } else {
                        passwordError.innerHTML = "Password must contain at least one number";
                    }
                } else {
                    passwordError.innerHTML = "Password must contain at least one uppercase letter";
                }
            }
            else {
                passwordError.innerHTML = "Password must contain at least one lowercase letter";
            }
        } else {
            passwordError.innerHTML = "Password can not be empty";
        }
    };
    
    function store() {
        var errorText = document.getElementById("errorText");
        var errorToast = document.getElementById("errorToast");
        if (usernameCheck){
            if (emailCheck){
                if (passwordCheck){
                    user.name = username.value;
                    user.email = email.value;
                    user.password = password.value;
                    localStorage.setItem('user', JSON.stringify(user));
                    const registerToast = document.getElementById('registered');
                    const toast = new bootstrap.Toast(registerToast);
                    toast.show();
                    setTimeout(function() {
                        window.location.href = "login.html";
                    }, 2000);
                } else {
                    errorText.innerHTML = "Please check your password";
                    const toast = new bootstrap.Toast(errorToast);
                    toast.show();
                }
            } else {
                errorText.innerHTML = "Please check your email";
                const toast = new bootstrap.Toast(errorToast);
                toast.show();
            }
        } else {
            errorText.innerHTML = "Please check your username";
            const toast = new bootstrap.Toast(errorToast);
            toast.show();
        }
    }
}

if (url.indexOf("login.html") > -1) {
    var user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
}

if (url.indexOf('index.html') > -1) {
    alert("index");
}