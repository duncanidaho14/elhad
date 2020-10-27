$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').fadeOut("slow", function() {
        
    });
    $('.section1').fadeIn(10000, function() {
        show();
    });
    $('.section2').fadeIn(10000, function () {
        
    });
});

const progressSymfony = document.querySelector('.determinate.symfony');
const progressReact = document.querySelector('.determinate.react');
const progressMysql = document.querySelector('.determinate.mysql');
const progressPhp = document.querySelector('.determinate.php');
const progressJavascript = document.querySelector('.determinate.javascript');
const progressMongodb = document.querySelector('.determinate.mongodb');
const articleProgress = document.querySelector('.article-progress');
const 

function show() {
   setTimeout(() => {
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

    }, 2500); 
}

const progressGit = document.querySelector('.git');


function show2() {
    setTimeout(() => {
        progressSymfony.style.width = progressSymfony.getAttribute('data-done') + '%';
        progressSymfony.style.opacity = 1;
    }, 2500);
}

articleProgress.getAttribute('article-progress')
