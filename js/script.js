const open_modal_1 = document.getElementById('open_modal1');
const modal_1 = document.getElementById('modal1');
const close_modal_1 = document.getElementById('close1');

const open_modal_2 = document.getElementById('open_modal2');
const modal_2 = document.getElementById('modal2');
const close_modal_2 = document.getElementById('close2')

const open_modal_3 = document.getElementById('open_modal3');
const modal_3 = document.getElementById('modal3');
const close_modal_3 = document.getElementById('close3')


const open_modal_4 = document.getElementById('open_modal4');
const modal_4 = document.getElementById('modal4');
const close_modal_4 = document.getElementById('close4')

const open_modal_5 = document.getElementById('open_modal5');
const modal_5 = document.getElementById('modal5');
const close_modal_5 = document.getElementById('close5')

open_modal_1.addEventListener('click', () => {
    modal_1.classList.add('show');
});

close_modal_1.addEventListener('click', () => {
    modal_1.classList.remove('show');
});

open_modal_2.addEventListener('click', () => {
    modal_2.classList.add('show');
});

close_modal_2.addEventListener('click', () => {
    modal_2.classList.remove('show');
});

open_modal_3.addEventListener('click', () => {
    modal_3.classList.add('show');
});

close_modal_3.addEventListener('click', () => {
    modal_3.classList.remove('show');
});

open_modal_4.addEventListener('click', () => {
    modal_4.classList.add('show');
});

close_modal_4.addEventListener('click', () => {
    modal_4.classList.remove('show');
});

open_modal_5.addEventListener('click', () => {
    modal_5.classList.add('show');
});

close_modal_5.addEventListener('click', () => {
    modal_5.classList.remove('show');
});

const sections = document.querySelectorAll('section');
const navList = document.querySelectorAll('.flex-nav li');

//window.addEventListener('scroll', changeBg);

function changeBg(){
    let navbar = document.getElementById('navbar-id');
    let scrollValue = window.scrollY;
    
    if (scrollValue < 150) {
        navbar.classList.remove('navbar-scroll')
    } else {
        navbar.classList.add('navbar-scroll')
    }
} 

//function for navigation to toggle when clicked on burger icon
function showNav() {
    let burger = document.querySelector('.burger');
    let nav = document.querySelector('.flex-nav');
    let navbar = document.getElementById('navbar-id');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
        navbar.classList.add('navbar-scroll');
    });
}

showNav();

window.addEventListener('scroll', () => {
    changeBg();
    let current = '';
    sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scrollY >= (sectionTop - sectionHeight / 2)){
            current = section.getAttribute('id');
        }
    });

    navList.forEach((li) => {
        li.classList.remove('active');
        if(li.classList.contains(current)){
            li.classList.add('active');
        }
    });
});
