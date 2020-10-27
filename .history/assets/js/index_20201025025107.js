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
const progressPhp = document.querySelector('.determinate.php');
const progressJavascript = document.querySelector('.determinate.javascript');
const progressMongodb = document.querySelector('.determinate.mongodb');
const articleProgress = document.querySelector('.article-progress');
const section = document.querySelector('.section1');
const time = 0;

function afficher() {
    console.log(section.classList.remove('section1'));
    time = 10000;
    return time;
}

setTimeout((time) => {
    progressSymfony.style.width = progressSymfony.getAttribute('data-done') + '%';
    progressSymfony.style.opacity = 1;

    progressReact.style.width = progressReact.getAttribute('data-done') + '%';
    progressReact.style.opacity = 1;

    progressMysql.style.width = progressMysql.getAttribute('data-done') + '%';
    progressMysql.style.opacity = 1;
    
    progressPhp.style.width = progressPhp.getAttribute('data-done') + '%';
    progressPhp.style.opacity = 1;

    progressJavascript.style.width = progressJavascript.getAttribute('data-done') + '%';
    progressJavascript.style.opacity = 1;

    progressMongodb.style.width = progressMongodb.getAttribute('data-done') + '%';
    progressMongodb.style.opacity = 1;

}, time);

articleProgress.getAttribute('article-progress')
