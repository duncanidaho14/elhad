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
    element.style.width = element.getAttribute('data-done') + '%';
    element.style.opacity = 1;

}, 500);
