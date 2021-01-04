(function ($) {
	$.fn.equalHeight = function () {
		return this.each (function () {
			var tallest = 0;
			var e = $(this);
			
			e.children ().each (function () {
				tallest =  Math.max ($(this).height (), tallest);
			}).css ({"height": tallest}); 
		});
	};
})(jQuery);
