const form = document.querySelector("#form")
const username = document.querySelector("#username")
const email = document.querySelector("#email")
const password = document.querySelector("#password")
const password2 = document.querySelector("#password2")

form.addEventListener('submit', (e) => {
  e.preventDefault()

  checkInput()
})


function checkInput() {
  // get the values from the inputs
  const usernameValue = username.value.trim()
  const emailValue = email.value.trim()
  const passwordValue = password.value.trim()
  const password2Value = password2.value.trim()

  if (usernameValue == ''){
    // show error
    // add error class
    setErrorFor(username, 'Username cannot be blank')
  } else {
    // add success class
    setSuccessFor(username)
  }

  if (emailValue == '') {
    setErrorFor(email, 'Email cannot be blank')
  } 
  // check Email with validateEmail function
  else if (!validateEmail(emailValue)) {
    setErrorFor(email, 'Email is not valid')
  }
  else {
    setSuccessFor(email)
  }

  if (passwordValue == ''){
    setErrorFor(password, 'Password cannot be blank')
  }else {
    setSuccessFor(password)
  }

  if (password2Value == ''){
    setErrorFor(password2, 'Password cannot be blank')
  }else if (password2Value !== passwordValue) {
    setErrorFor(password2, 'Password missmatch')
  }else {
    setSuccessFor(password2)
  }
}

function setErrorFor (input, message) {
  const formControl = input.parentElement //.form-control
  const small = formControl.querySelector('small')

  // add error message inside small
  small.innerText = message

  // add error class
  formControl.className = 'form-control error'
}

function setSuccessFor (input){
  const formControl = input.parentElement // .form-control

  formControl.className = 'form-control success'
}

function validateEmail(email) {
  var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}