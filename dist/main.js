const Header = document.getElementById('header');
//Sticky Header animation
window.onscroll = function() {
  if(window.scrollY > 0) {
    Header.classList.add('sticky');
  } else {
    Header.classList.remove('sticky')
  }
  // show scroll to top button when scrolling
  if(this.scrollY > 600) {
  document.querySelector('#scrollTop').classList.add('show')
  } else {
    document.querySelector('#scrollTop').classList.remove('show')
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

// open modal
document.querySelector('#connect_wallet').addEventListener('click', function() {
  document.querySelector('#modal-wrapper').classList.remove('hidden');
  document.querySelector('body').style.overflowY = 'hidden';
  document.querySelector('header').classList.add('move-left');
});

// Close modal on clicking 'x' icon
document.querySelector('#close_modal').addEventListener('click', function() {
  this.parentElement.parentElement.parentElement.classList.add('hidden');
  document.querySelector('body').style.overflowY = '';
  document.querySelector('header').classList.remove('move-left');
});

//close modal on clicking anywhere outside the modal
document.querySelector('#modal-wrapper').addEventListener('click', function() {
  this.classList.add('hidden');
  document.querySelector('body').style.overflowY = '';
  document.querySelector('header').classList.remove('move-left');
});

//close modal on clicking the Update Button
document.querySelector('#modal-wrapper form button').addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('#modal-wrapper').classList.add('hidden');
  document.querySelector('body').style.overflowY = '';
  document.querySelector('header').classList.remove('move-left');
});

// modal stopPropagation
document.querySelector('#modal-wrapper #modal').addEventListener('click', function(e) {
  e.stopPropagation();
});

// Cusror follow
document.addEventListener('mousemove', function(e) {
  var curX = e.clientX;
  var curY = e.clientY;
  document.querySelectorAll('.cursor').forEach(cursor => {
    cursor.style.transform = `translate(${curX}px, ${curY}px)`
    cursor.style.transitionDuration = `${75}ms`
  });
});

//change cursor style on hoveringn any link on the document
document.querySelectorAll('a').forEach(link => {
  //ON mouse over
  link.addEventListener('mouseover', function() {
    document.querySelectorAll('.cursor').forEach(cursor => {
      cursor.classList.add('hover');
      cursor.style.transitionDuration = `${300}ms`
    })
  });

  //On mouse leave
    link.addEventListener('mouseleave', function() {
    document.querySelectorAll('.cursor').forEach(cursor => {
      cursor.classList.remove('hover');
      cursor.style.transitionDuration = `${300}ms`
    })
  });
})

