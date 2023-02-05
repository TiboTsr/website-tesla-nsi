const toggle = document.getElementById('toggle');
const nav = document.getElementById('nav');
const leftbar = document.getElementById('leftbar');
const page = document.getElementById('page');
toggle.onclick = function(){
    toggle.classList.toggle('active');
    nav.classList.toggle('active');
    page.classList.toggle('active');
    leftbar.classList.toggle('active');

}