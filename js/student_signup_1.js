const password1 = document.getElementById("firstpassword");
const password2 = document.getElementById("secondPassword");
const submit_Button = document.querySelector('button[type="submit"]');
const error_Text = document.getElementById('error-text');


// function validate(){
//   if(password1.value.length < 8){
//     // password must be at least 8 characters
//   }
// if(password1.value == password2.value){
//     document.getElementById('error-text').innerHTML = "Passwords Match";
//     return true;
//   }else if(password1.value != password2.value){
//     document.getElementById('error-text').innerHTML = "Passwords do not match";
//     return false;
//   }
// }

submit_Button.addEventListener("click", function(e){
  console.log(e.type);

  if(password1.value.length){
    error_Text.textContent = "Password should not be less that 8 characters"
    // return false
    // this.disabled = true;
    event.preventDefault();
  }

  if(password1.value !== password2.value){
    error_Text.textContent = "Passwords don't match"
    event.preventDefault();
  }
})