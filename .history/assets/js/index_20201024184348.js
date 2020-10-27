$(document).ready(function () {
    $('.sidenav').sidenav();
    $('.carousel').carousel();
    $('.parallax').parallax();
    $('.loader').fadeOut("slow", function() {
        $('div.determinate.react').addClass('reactAnimation');
        console.log("slow");
    });
});