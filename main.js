$(function() {
    let burger = $("#burger"),
    nav = $("#nav"),
    nav__close = $("#nav__close");


    // burger
    burger.on("click", function(event) {
        event.preventDefault();
        nav.addClass("active");
    });

    nav__close.on("click", function(event) {
        event.preventDefault();
        nav.removeClass("active");
    });

})