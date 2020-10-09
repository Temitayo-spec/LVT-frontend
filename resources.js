//MODAL POPUP
const modalBtn = document.querySelector('#add');
const modalBg = document.querySelector('.modal-bg');
const modalClose = document.querySelector('.modal-close');

modalBtn.addEventListener('click', ()=>{
    modalBg.classList.add('bg-active');
})


modalClose.addEventListener('click', ()=>{
    modalBg.classList.remove('bg-active');
})
//SIDEBAR BUTTONS
const currentLocation = location.href;
const sidebarLink = document.querySelectorAll('.sidebar a');
const sidebarLength = sidebarLink.length;
for (let i = 0; i < sidebarLength; i++) {
    if (sidebarLink[i].href === currentLocation) {
        sidebarLink[i].className = 'active'
    }
}

//Selectors
let resourceInput = document.querySelector('#resource-title');
let resourceButton = document.querySelector('#add-btn');
let resourceList = document.querySelector('.display-list');

//Event Listeners
document.addEventListener('DOMContentLoaded', getInput);
resourceButton.addEventListener('click', add);

resourceList.addEventListener('click', deleteCheck)

//Functions

function add(e) {
    //Prevent form from submitting
    e.preventDefault();

    modalBg.classList.remove('bg-active');


    //Resource DIV
    const resourceDiv = document.createElement('div');
    resourceDiv.classList.add('resource');
    //Create Li
    const newResource = document.createElement('li');
    newResource.innerText = resourceInput.value;
    newResource.classList.add('resource-item');

    resourceDiv.appendChild(newResource);
    //ADD INPUT TO LOCAL STORAGE
    saveLocalInput(resourceInput.value);


    //DELETE Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fa fa-trash-o"></i>'

    deleteButton.classList.add('delete-btn');
    resourceDiv.appendChild(deleteButton);

    //APPEND TO LIST
    resourceList.appendChild(resourceDiv);
    //Clear Resource Input Value
    resourceInput.value = "";
}

function deleteCheck(e) {
    e.preventDefault();
    const item = e.target;
    //Delete Input
    if (item.classList[0] === 'delete-btn') {
        const resource = item.parentElement;
        resource.classList.add('fall');

        removeLocalInput(resource);

        resource.addEventListener('transitionend', ()=>{
            resource.remove();
        })
    }
}

function saveLocalInput(resource) {
    //CHECK---HEY Do I already have thing in there?
    let resources;
    if (localStorage.getItem('resources') === null) {
        resources = [];
    }else{
        resources = JSON.parse(localStorage.getItem('resources'));
    }
    resources.push(resource);
    localStorage.setItem('resources', JSON.stringify(resources));
}

function getInput() {
        //CHECK---HEY Do I already have thing in there?
        let resources;
        if (localStorage.getItem('resources') === null) {
            resources = [];
        }else{
            resources = JSON.parse(localStorage.getItem('resources'));
        }
        resources.forEach(function(resource) {
            //Resource DIV
    const resourceDiv = document.createElement('div');
    resourceDiv.classList.add('resource');
    //Create Li
    const newResource = document.createElement('li');
    newResource.innerText = resource;
    newResource.classList.add('resource-item');

    resourceDiv.appendChild(newResource);



    //DELETE Button
    const deleteButton = document.createElement('button');
    deleteButton.innerHTML = '<i class="fas fa-trash"></i>'

    deleteButton.classList.add('delete-btn');
    resourceDiv.appendChild(deleteButton);

    //APPEND TO LIST
    resourceList.appendChild(resourceDiv);
        })
}

function removeLocalInput(resource) {
            //CHECK---HEY Do I already have thing in there?
            let resources;
            if (localStorage.getItem('resources') === null) {
                resources = [];
            }else{
                resources = JSON.parse(localStorage.getItem('resources'));
            }
            const resourceIndex = resource.children[0].innerText;
            resources.splice(resources.indexOf(resourceIndex), 1);
            localStorage.setItem('resources', JSON.stringify(resources));
}

