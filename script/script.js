var formRegister = document.getElementById('formRegister');

formRegister.addEventListener('submit', function(e){
    e.preventDefault();
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

    if(username.value.match(lowerCaseLetters) && username.value.match(numbers) && username.value.match(min5) && username.value.match(max10) && !username.value.match(space) && !username.value.match(specialCharacters)){
        alert("Username is valid");
    }else{
        alert("Username is not valid");
    }

    if(password.value == passwordValidation.value && password.value.match(lowerCaseLetters) && password.value.match(upperCaseLetters) && password.value.match(numbers) && password.value.match(min6) && password.value.match(max12) && !password.value.match(space) && !password.value.match(specialCharacters)){
        alert("Password is valid");
    }else{
        alert("Password is not valid");
    }
});