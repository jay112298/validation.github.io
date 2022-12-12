function validateName() {
    var nameField = document.getElementById('name-inp');
    var nameValue = nameField.value
    var nameWarn = document.getElementById('name-warn')

    if (nameValue === undefined || nameValue == "") {
        nameField.classList.add('input-red')
        nameWarn.style.display = "block"
        nameWarn.innerHTML = "Please enter your name"

    } else if (nameValue.length < 2) {
        nameWarn.style.display = "block"
        nameWarn.innerHTML = "Name should be at least two characters long"
    }
     else {
        nameField.classList.remove('input-red')
        nameWarn.style.display = "none"
    }
}

function validateMail() {
    var emailField = document.getElementById('email-inp');
    var emailValue = emailField.value
    var emailWarn = document.getElementById('email-warn')

    if(emailValue.includes('@')){
        console.log('Email contains @');
    }

    if (emailValue === undefined || emailValue == "") {
        emailField.classList.add('input-red')
        emailWarn.style.display = "block"
        emailWarn.innerHTML = "Please enter your email"

    } else if (!emailValue.includes("@")) {
        emailField.classList.add('input-red')
        emailWarn.style.display = "block"
        emailWarn.innerHTML = "Email should be valid"
    }
     else {
        emailField.classList.remove('input-red')
        emailWarn.style.display = "none"
    }
}

function validateGender() {
    var genderField = document.getElementsByName('gender');
    var genderWarn = document.getElementById('gender-warn')

    if (genderField[0].checked == false && genderField[1].checked == false) {
        genderWarn.style.display = "block"
        genderWarn.innerHTML = "Please select your gender"
        console.log("If triggered")
    } //else if (false) {
    //     genderField.classList.add('input-red')
    //     genderWarn.style.display = "block"
    //     genderWarn.innerHTML = "Email should be valid"
    // }
     else {
        // nameField.classList.remove('input-red')
        console.log("Else triggered")
        genderWarn.style.display = "none"
    }
}

function validatePass() {
    var passField = document.getElementById('pass-inp');
    var passValue = passField.value
    var passWarn = document.getElementById('pass-warn')
    console.log(passValue)
    let pattern = new RegExp("^(?=(.*[a-zA-Z]){1,})(?=(.*[0-9]){2,}).{8,}$");
    
    if (passValue === undefined || passValue == "") {
        passField.classList.add('input-red')
        passWarn.style.display = "block"
        passWarn.innerHTML = "Please enter your password"

    } else if (passValue.length < 8) {
        passField.classList.add('input-red')
        passWarn.style.display = "block"
        passWarn.innerHTML = "Password should be atleast 8 characters long"
    } else if (!pattern.test(passValue)) {
        passField.classList.add('input-red')
        passWarn.style.display = "block"
        passWarn.innerHTML = "Password should contain Uppercase lowercase letters, number and speacial characters"
    }
     else {
        passField.classList.remove('input-red')
        passWarn.style.display = "none"
    }
}

function submitForm() {
    console.log("submitForm was clicked")
    // event.preventDefault()
    var submitButton = document.getElementById('form-submit')
    submitButton.innerHTML = "<img height='30px' src='./assets/loading.jpg' />"
    setTimeout(function() {
        submitButton.innerHTML = "Form submitted"
        
    }, 2000)
}