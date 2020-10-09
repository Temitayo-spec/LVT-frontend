//INDICATING ANCHOR BUTTONS
const currentLocation = location.href;
const menuItem = document.querySelectorAll('a');
const menuLength = menuItem.length
for (let i = 0; i < menuLength; i++) {
   if (menuItem[i].href === currentLocation) {
       menuItem[i].className = "active"
   }  
}

//MODAL PPOUP
const modalBtn = document.querySelector('#add');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', ()=>{
    modalBg.classList.add('bg-active');
})


modalClose.addEventListener('click', ()=>{
    modalBg.classList.remove('bg-active');
})

//Input JavaScript codes

//Input Class: Represent an Input
class Input{
    constructor(course, category, level){
        this.course = course;
        this.category = category;
        this.level = level;
    }
}

//UI Class: Handle UI Tasks
class UI{
    static displayInput() {

        const inputs = Store.getInput();

    inputs.forEach((input) => UI.addInputToList(input));
    }
    static addInputToList(input) {
        const list = document.querySelector('#item-list');

        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${input.course}</td>
            <td class="middle">${input.category}</td>
            <td class="right">${input.level}</td>
            <td><a href="#" class="btn btn-primary delete"><span><i class="fas fa-trash-alt"></i></span>Remove</a></td>
        `;
        list.appendChild(row);
    }
    static deleteInputs(el){
        if (el.classList.contains('delete')) {
            el.parentElement.parentElement.remove();
        }
    }

    static clearFields() {
        document.querySelector('#course_title').value = '';
        document.querySelector('#categ').value = '';
        document.querySelector('#lev').value = '';
    }
}

//Store Class: Handles Storage
class Store{
    static getInput() {
        let inputs;
        if (localStorage.getItem('inputs') === null) {
            inputs = [];
        }else{
            inputs = JSON.parse(localStorage.getItem('inputs'));
        }
        return inputs;
    }
    static addInputs(input) {
        const inputs = Store.getInput();
        inputs.push(input);

        localStorage.setItem('inputs', JSON.stringify(inputs));
    }

    static removeInputs(level) {
        const inputs = Store.getInput();
        inputs.forEach((input, index) => {
            if (input.level === level) {
                inputs.splice(index, 1);
            }
        });

        localStorage.setItem('inputs', JSON.stringify(inputs));
    }
}

//Event: Display Inputs
document.addEventListener('DOMContentLoaded', UI.displayInput);

//Event: Add an Inputs
document.querySelector('#book-form').addEventListener('submit', (e)=>{
    //Prevent actual submit
    e.preventDefault();
    //Get form values
    const course = document.querySelector('#course_title').value;
    const category = document.querySelector('#categ').value;
    const level = document.querySelector('#lev').value;

    //Validate
    //if (course === ''|| category === '' || level === '') {
    //    UI.showAlert('Please fill in all fields', danger);
    //}
    modalBg.classList.remove('bg-active');


    //Instantiate Inputs
    const input = new Input(course, category, level);

    //Add inputs to UI
    UI.addInputToList(input);

    //Add inputs to Store
    Store.addInputs(input);

    //Clear fields
    UI.clearFields();
});

//Event: Remove an Input
document.querySelector('#item-list').addEventListener('click', (e)=>{

    //Remove input from UI
    UI.deleteInputs(e.target);

    //Remove book from store

    Store.removeInputs(e.target.parentElement.previousElementSibling.textContent);
})

//Form Validation
