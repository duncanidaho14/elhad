$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').fadeOut("slow", function() {
        
    });
    
});

const progressSymfony = document.querySelector('.determinate');

setTimeout(() => {
    progressSymfony.style.width = progressSymfony.getAttribute('data-done') + '%';
    progress.style.opacity = 1;

}, 500);
