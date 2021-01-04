(function ($) {
	jQuery.fn.center = function () {
		return this.each (function () {
			var e = $(this);
			
			e.css ({
				position: 'absolute',
				top:       ($(window).height () - $(this).height ()) / 2 + $(window).scrollTop () + "px",
				left:     ($(window).width () - $(this).width ()) / 2 + $(window).scrollLeft () + "px"
			});
		});
	};
})(jQuery);
