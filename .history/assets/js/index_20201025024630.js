$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').fadeOut("slow", function() {
        
    });
    
});

const progress = document.querySelectorAll('.determinate');
for
setTimeout(() => {
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;

}, 500);
