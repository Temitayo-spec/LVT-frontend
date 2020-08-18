var password1 = document.getElementById("firstpassword");
var password2 = document.getElementById("secondPassword");

function validate(){
if(password1.value == password2.value){
    document.getElementById('error-text').innerHTML = "Passwords Match";
    return true;
  }else if(password1.value != password2.value){
    document.getElementById('error-text').innerHTML = "Passwords do not match";
    return false;
  }
}
