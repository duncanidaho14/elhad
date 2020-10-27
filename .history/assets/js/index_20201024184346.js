$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').fadeou("slow", function() {
        $('div.determinate.react').addClass('reactAnimation');
        console.log("slow");
    });
});