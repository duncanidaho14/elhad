$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').fadeOut("slow", function() {
        
    });
    const progress = document.querySelector('.determinate');

    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;
});