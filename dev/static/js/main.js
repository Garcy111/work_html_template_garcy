;

$.fn.mytoggle = function () {
	var b = arguments;
	return this.each(function (i, el) {
		var a = function () {
			var c = 0;
			return function () {
				b[c++ % b.length].apply(el, arguments);
			};
		}();
		$(el).click(a);
	});
};

$(function() {
	$('.btn-menu').mytoggle(function () {
		$('.menu').removeClass('hide-menu').addClass('show-menu');
		$('.btn-menu').find('.gr').addClass('close');
	}, function () {
		$('.menu').addClass('hide-menu').removeClass('show-menu');
		$('.btn-menu').find('.gr').removeClass('close');
	});

	$('.go_to').click(function () {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top - 0 }, 600);
		}
		return false;
	});

	var mainSlider = $('.main_slider');
	mainSlider.owlCarousel({
		pagination: false,
		items: 1,
		margin: 10,
		lazyLoad: true,
		loop: false,
		autoplay: false,
		autoplayTimeout: 6000,
		autoplaySpeed: 1000,
		// responsive: {
		// 	1020: {
		// 		items: 4
		// 	},
		// 	820: {
		// 		items: 3
		// 	},
		// 	580: {
		// 		items: 2
		// 	},
		// 	0: {
		// 		items: 1
		// 	}
		// }
	});

	$('.wr_main_slider .next-slide').click(function () {
		mainSlider.trigger('next.owl.carousel');
	});

	$('.wr_main_slider .prev-slide').click(function () {
		mainSlider.trigger('prev.owl.carousel');
	});

	// $('.main_slider').find('.item').click(function() {
	// 	var dataSlide = $(this).attr('data-slide');
	// 	dataSlide = dataSlide - 1;
	// 	$('.mainSliderModal').trigger('to.owl.carousel', [dataSlide, 300]);
	// 	$('.mainModal').arcticmodal();
	// });

	// $('.phone').mask("+7 (999) 999-9999");

	// $('.class').click(function() {
	// 	$.fancybox.open($('#modal'));
	// });

	$('.close_modal').click(function() {
		$.fancybox.close( true );
	});

	$("[data-fancybox]").fancybox();

});