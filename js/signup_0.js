const student_Button = document.querySelector(".student-button");
const educator_Button = document.querySelector(".educator-button");
const next_Button = document.querySelector("#next-btn");
const option_Text = document.querySelector("#option-selected");
const test = document.querySelector("main");
const student_active = document.querySelector('#student-active-form');
const educator_active = document.querySelector('#educator-active-form');


    // Actions for event listener
    
    educator_Button.addEventListener("click", function(e){
        // Modifies the text content
        option_Text.textContent = "Educator"
        

        //Checks for the text content
        if (option_Text.textContent == "Educator") {
            educator_Button.style.background = '#25274D';
            educator_Button.style.color = '#FFF';

            //Checks the educator active form
            educator_active.checked = true;


            // Changes the color of the STudent Button
            student_Button.style.color = '#25274D';
            student_Button.style.background = '#FFF';
        } 
        else if(option_Text.textContent == "Student") {
            student_Button.style.background = '#25274D';
            student_Button.style.color = '#FFF';
        }

    })


    
    // Actions for event listener


        student_Button.addEventListener("click", function(e){
        // Modifies the text content
        option_Text.textContent = "Student"

        
        // Checks for thr text content
        if (option_Text.textContent == "Educator") {
            educator_Button.style.background = '#25274D';
            educator_Button.style.color = '#FFF';
        } 
        else if(option_Text.textContent == "Student") {
            student_Button.style.background = '#25274D';
            student_Button.style.color = '#FFF';

            //Checks the student active form
            student_active.checked = true;

            // Changes the style of the educator button
            educator_Button.style.color = '#25274D';
            educator_Button.style.background = '#FFF';
        }
    })



    // Page redirect




    next_Button.addEventListener("click", function(e){
        if(option_Text.textContent == "Student"){
            document.location.href = "student_signup_0.html"
        }
        else if(option_Text.textContent == "Educator"){
            document.location.href = "educator_signup_0.html"
        }

        // Effect on the active form
        
    })


