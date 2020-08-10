const menuBtn = document.querySelector('.menu-btn');
const hamburguer = document.querySelector('.menu-btn-burger');
const nav = document.querySelector('.nav');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.menu-nav-item')


let showMenu = false;

menuBtn.addEventListener('click',toggleMenu);

function toggleMenu(){
    if(!showMenu){
        hamburguer.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        navItems.forEach(item => {
            item.classList.add('open');
        });

        showMenu = true;
    } else {
        hamburguer.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        navItems.forEach(item => {
            item.classList.add('remove');
        });

        showMenu = false;
    };
};