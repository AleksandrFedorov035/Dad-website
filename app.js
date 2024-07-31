$(function() {

	var header = $("#header"),
	 	introH = $("#intro").innerHeight(),
	 	scrollOffset = $(window).scrollTop();
	 	checkScroll(scrollOffset);


	 	/* fixed-header*/

	$(window).on("scroll", function() {

		scrollOffset = $(this).scrollTop();

		checkScroll(scrollOffset);
	});

	function checkScroll() {

		if (scrollOffset >= introH) {
			header.addClass("fixed");
		}
		else {
			header.removeClass("fixed")
		}
	}

		/* smooth-scroll*/
	$("[data-scroll]").on("click", function(event) {
		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('scroll'),
			blockOffset = $(blockId).offset().top;

		$("#nav a").removeClass("active");
		$this.addClass("active");

		$("html, body").animate ({
			scrollTop: blockOffset
		}, 1000);
	});

		/* Menu nav-toggle*/

	$("#nav-toggle").on("click", function(event){
		event.preventDefault();

		$(this).toggleClass("active"),
		$("#nav").toggleClass("active");

	});

		/* collapse */

	$("[data-collapse]").on("click", function(event) {

		event.preventDefault();

		var $this = $(this),
			blockId = $this.data('collapse');

		$this.toggleClass("active");
		$(blockId).slideToggle();


	});


	$("[data-slider]").slick({

		infinite: true,
		fade: false,
		slidesToShow: 1,
		slidesToScroll: 1

	});

});