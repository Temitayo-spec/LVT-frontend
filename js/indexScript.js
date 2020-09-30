const toggler = document.querySelector('.fa-bars');
const nav_links = document.querySelector('.nav-links');


toggler.addEventListener('click', () => {
    if (nav_links.style.display == 'block') {
        nav_links.style.display = 'none'
        toggler.classList = 'fa fa-bars'

    } else {
        nav_links.style.display = 'block'
        toggler.classList = 'fa fa-times'
    }
})