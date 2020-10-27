$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').fadeOut("slow", function() {
        
    });
    
});

const progressSymfony = document.querySelector('.determinate.symfony');
const progressReact = document.querySelector('')

setTimeout(() => {
    progressSymfony.style.width = progressSymfony.getAttribute('data-done') + '%';
    progressSymfony.style.opacity = 1;

}, 2500);
