function YesClick(){
    document.getElementById("tutorialCodeField").style.display = 'block';
}
function NoClick(){
document.getElementById("tutorialCodeField").style.display = 'none';
}
var submitBtn = document.querySelector('button[type="submit"]');

submitBtn.addEventListener('click', changePage);
function changePage(){
        document.location.href = "studentForm.html"
    }
