var toggler = document.querySelector('.tog-btn')
var navbar = document.querySelector('#collapsenav')
toggler.addEventListener('click', function(e){
  console.log(e.type);
  if(navbar.style.display == 'block'){
    navbar.style.display = 'none';
  }
  else {
    navbar.style.display = 'block';
  }
})