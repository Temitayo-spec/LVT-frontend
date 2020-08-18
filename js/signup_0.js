function studentClick() {
    var studentTest = document.getElementsByClassName("text").innerHTML = "bt";
}
function educatorClick() {
    var educatorTest = document.getElementsByClassName("text").innerHTML = "btn";
}

function submitChoice(choice) {
    var choice = document.getElementsByClassName("text").innerHTML;

    if (choice == "btn") {
        document.location.href= "educator_signup_0.html";
        
        }
    else if (choice == "bt") {
        document.location.href= "student_signup_0.html";
    }
}