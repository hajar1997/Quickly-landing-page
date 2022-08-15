const navList = document.getElementById('navList');
const toggler = document.getElementById('toggle');

toggler.addEventListener('click',togglerShow);

function togglerShow(){
    navList.classList.toggle('show');
}