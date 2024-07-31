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

    // $('.autoplay').slick({
    //     slidesToShow: 3,
    //     slidesToScroll: 1,
    //     autoplay: true,
    //     autoplaySpeed: 2000,
    //   });
})