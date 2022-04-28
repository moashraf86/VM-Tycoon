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
  if(switchModeToggler.checked) {
    document.querySelector('html').classList.add('dark')
  } else {
    document.querySelector('html').classList.remove('dark')
  }
})

