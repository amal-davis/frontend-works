const header = document.querySelector("header");

window.addEventListener("scroll", function(){
  header.classList.toggle("sticky", window.scrollY > 80);
});

let menu = document.querySelector('#menu-icon');
let navlist = document.querySelector('.navlist');

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};
window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open')
};
const sr = scrollReveal({
  origin: 'top',
  distance: '85px',
  duration: 2500,
  reset: true
})
sr.Reveal ('.home-text',{delay:300});
sr.Reveal ('.home-img',{delay:400});
