$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').animate("slow", function() {
        $('.react').progress()
        console.log("slow");
    });
});