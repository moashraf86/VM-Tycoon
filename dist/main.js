const Header = document.getElementById('header');
//Sticky Header animation
window.onscroll = function() {
  if(window.scrollY > 0) {
    Header.classList.add('sticky');
  } else {
    Header.classList.remove('sticky')
  }
}

// Toggle Dark Mode
const switchModeToggler = document.getElementById('switch');
switchModeToggler.addEventListener('click', function() {
  document.querySelector('html').classList.add('dark')
  if(switchModeToggler.checked) {
    document.querySelector('html').classList.add('dark')
  } else {
    document.querySelector('html').classList.remove('dark')
  }
});

//Open mobile menu on clicking Menu Toggler button
const  menuToggler = document.querySelector('#menu-toggler');
const  mobileMenu  = document.querySelector('.nav-wrapper');
menuToggler.addEventListener('click', function() {
  //add class active to menu toggler
  this.classList.add('active');
  // open mobile menu
  document.querySelector('.nav-wrapper').classList.add('show')
});

// [ 1 ] Close Mobile Menu on clicking the close icon
document.querySelector('#close').addEventListener('click', function() {
  this.parentElement.parentElement.classList.remove('show');
  menuToggler.classList.remove('active')
});
// [ 2 ] Close the menu on clicking any link
document.querySelectorAll('.nav-links li a').forEach((link) => {
  link.addEventListener('click', function() {
    mobileMenu.classList.remove('show');
    menuToggler.classList.remove('active')
  })
});
// [ 3 ] close the menu on clicking anywhere except the menu
mobileMenu.addEventListener('click', function (e) {
  this.classList.remove('show');
  menuToggler.classList.remove('active')
});
document.querySelector('.nav-wrapper .nav').addEventListener('click', function(e) {
    e.stopPropagation();
  });

