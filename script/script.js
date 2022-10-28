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
                    user.name = username.value;
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
                user.email = email.value;
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
        if (!password.value == null || !password.value == "") {
            if(password.value.match(lowerCaseLetters)){
                if(password.value.match(upperCaseLetters)){
                    if(password.value.match(numbers)){
                        if(password.value.match(min6) && password.value.match(max12)){
                            if(!password.value.match(space) && !password.value.match(specialCharacters)){
                                if(password.value == passwordValidation.value) {
                                    user.password = password.value;
                                    passwordError.innerHTML = '';
                                    passwordCheck = true;
                                } else {
                                    passwordError.innerHTML = "Password does not match";
                                    passwordValidation.oninput = function() {
                                        if(password.value == passwordValidation.value){
                                            user.password = password.value;
                                            passwordError.innerHTML = '';
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
        if (usernameCheck){
            if (emailCheck){
                if (passwordCheck){
                    console.log(user);
                } else {
                    alert("Please check your password");
                }
            } else {
                alert("Please check your email");
            }
        } else {
            alert("Please check your username");
        }
    }
}

if (url.indexOf("login.html") > -1) {
    alert("login");
}

if (url.indexOf('index.html') > -1) {
    alert("index");
}