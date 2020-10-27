$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.fixed-action-btn').floatingActionButton();
    $('.loader').fadeOut("slow", function() {
        
    });
    $('.section1').fadeIn(10000, function() {
        show();
    });
    $('.section2').fadeIn(10000, function () {
        show2();
    });
    $('.section3').fadeIn(10000, function() {
        show3();
    });
});

const progressSymfony = document.querySelector('.determinate.symfony');
const progressReact = document.querySelector('.determinate.react');
const progressMysql = document.querySelector('.determinate.mysql');
const progressPhp = document.querySelector('.determinate.php');
const progressJavascript = document.querySelector('.determinate.javascript');
const progressMongodb = document.querySelector('.determinate.mongodb');

const articleProgress = document.querySelector('.article-progress');


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
const progressSass = document.querySelector('.sass');
const progressBootstrap = document.querySelector('.bootstrap');
const progressPatern = document.querySelector('.patern');
const progressAjax = document.querySelector('.ajax');
const progressHttp = document.querySelector('.http');

function show2() {
    setTimeout(() => {
        progressGit.style.width = progressGit.getAttribute('data-done') + '%';
        progressGit.style.opacity = 1;

        progressSass.style.width = progressSass.getAttribute('data-done') + '%';
        progressSass.style.opacity = 1;

        progressBootstrap.style.width = progressBootstrap.getAttribute('data-done') + '%';
        progressBootstrap.style.opacity = 1;

        progressPatern.style.width = progressPatern.getAttribute('data-done') + '%';
        progressPatern.style.opacity = 1;

        progressAjax.style.width = progressAjax.getAttribute('data-done') + '%';
        progressAjax.style.opacity = 1;

        progressHttp.style.width = progressHttp.getAttribute('data-done') + '%';
        progressHttp.style.opacity = 1;

    }, 2500);
}

const progressEcmascript = document.querySelector('.determinate.ecmascript');
const progressHtml = document.querySelector('.determinate.html');
const progressVue = document.querySelector('.determinate.vue');
const progressScp = document.querySelector('.determinate.scp');
const progressRedis = document.querySelector('.determinate.redis');
const progressWordpress = document.querySelector('.determinate.wordpress');

function show3() {
    setTimeout(() => {
        progressEcmascript.style.width = progressEcmascript.getAttribute('data-done') + '%';
        progressEcmascript.style.opacity = 1;

        progressHtml.style.width = progressHtml.getAttribute('data-done') + '%';
        progressHtml.style.opacity = 1;

        progressVue.style.width = progressVue.getAttribute('data-done') + '%';
        progressVue.style.opacity = 1;

        progressScp.style.width = progressScp.getAttribute('data-done') + '%';
        progressScp.style.opacity = 1;

        progressRedis.style.width = progressRedis.getAttribute('data-done') + '%';
        progressRedis.style.opacity = 1;

        progressWordpress.style.width = progressWordpress.getAttribute('data-done') + '%';
        progressWordpress.style.opacity = 1;
    }, 2500);
}

let myText = "Création de sites web";
let myArray = myText.split("");
let timeLooper;

function loop() {
    if(myArray.length > 0){
        document.getElementById('textMachine').innerHTML += myArray.shift();
    } else {
        clearTimeout(timeLooper);
    }
    timeLooper = setTimeout('loop()', 70);
}
loop();