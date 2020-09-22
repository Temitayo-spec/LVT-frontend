const yes_Button = document.querySelector(".option-yes");
const no_Button = document.querySelector(".option-no");
const next_Button = document.querySelector("#next-btn");
const option_Text = document.querySelector("#option-selected");
const error_Text = document.querySelector("#error-text");
const select_TTS = document.querySelector("#select-tutorial");
const yes_active_form = document.querySelector("#yes-active-form");
const no_active_form = document.querySelector("#no-active-form");


option_Text.style.display = 'none'

// Actions for event listener
    
    yes_Button.addEventListener("click", function(e){
        // Modifies the text content
        option_Text.textContent = "Yes"
        // Hides the error text
        error_Text.style.display = "none"
        
        

        // Checks the 'yes' radio button in the active form
            yes_active_form.checked = true;

        //Checks for the text content
        if (option_Text.textContent == "Yes") {
            yes_Button.style.background = '#25274D';
            yes_Button.style.color = '#FFF';
            select_TTS.style.display = 'block'

            

            // Changes the color of the STudent Button
            no_Button.style.color = '#25274D';
            no_Button.style.background = '#FFF';
        } 
        else if(option_Text.textContent == "No") {
            no_Button.style.background = '#25274D';
            no_Button.style.color = '#FFF';
        }
        
    })
    
    
    
    // Actions for event listener
    
    
    no_Button.addEventListener("click", function(e){
        // Modifies the text content
        option_Text.textContent = "No"
        // Hides the error text
        error_Text.style.display = "none"

        // Checks the 'yes' radio button in the active form
            no_active_form.checked = true;
        
        // Checks for thr text content
        if (option_Text.textContent == "Yes") {
            yes_Button.style.background = '#25274D';
            yes_Button.style.color = '#FFF';
            select_TTS.style.display = 'none'
            
        } 
        else if(option_Text.textContent == "No") {
            no_Button.style.background = '#25274D';
            no_Button.style.color = '#FFF';
            
            // Changes the style of the educator button
            yes_Button.style.color = '#25274D';
            yes_Button.style.background = '#FFF';
            select_TTS.style.display = 'none'
        }
    })
    
    

    // Page redirect
    
    next_Button.addEventListener("click", function(e){
        if(option_Text.textContent == "Yes" || option_Text.textContent == "No"){
            document.location.href = "student_signup_1.html";
        }
        else{
            error_Text.style.display = "block";
            error_Text.style.color = '#f00';
            error_Text.textContent = "Please Select an Option";
        }
    })



    
   