const burger = document.querySelector("button");
const nav = document.querySelector('nav')
const nav__close = document.getElementById('nav__close');

burger.addEventListener('click', () => {
    nav.classList.add('active')
})

nav__close.addEventListener('click', () => {
    nav.classList.remove('active')
})