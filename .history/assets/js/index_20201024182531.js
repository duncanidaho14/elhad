$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').animate("slow", function() {
        $('div.determinate.react').addClassList('bar')
        console.log("slow");
    });
});