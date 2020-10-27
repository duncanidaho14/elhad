$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').fadeOut("slow", function() {
        
    });
    
});

const progressSymfony = document.querySelector('.determinate.symfony');
const progressReact = document.querySelector('.determinate.react');
const progressMysql = document.querySelector('.determinate.mysql');
const progressMysql = document.querySelector('.determinate.php');
const progressMysql = document.querySelector('.determinate.javascript');
const progressMysql = document.querySelector('.determinate.mysql');
setTimeout(() => {
    progressSymfony.style.width = progressSymfony.getAttribute('data-done') + '%';
    progressSymfony.style.opacity = 1;

    progressReact.style.width = progressReact.getAttribute('data-done') + '%';
    progressReact.style.opacity = 1;

    progressMysql.style.width = progressMysql.getAttribute('data-done') + '%';
    progressMysql.style.opacity = 1;
}, 2500);

