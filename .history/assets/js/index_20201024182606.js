$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').animate("slow", function() {
        $('div.determinate.react').addClass('reactAnimation');
        console.log("slow");
    });
});