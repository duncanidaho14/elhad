$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').fadeOut("slow", function() {
        
    });
    
});

const progress = document.querySelectorAll('.determinate');
for (let i = 0; i < progress.length; i++) {
    const element = progress[i];
    
}
setTimeout(() => {
    progress.style.width = progress.getAttribute('data-done') + '%';
    progress.style.opacity = 1;

}, 500);
