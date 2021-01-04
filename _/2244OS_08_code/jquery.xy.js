(function ($) {
	$.fn.xy = function () {
		return this.each (function () {
			$(this).mousemove (function (event) {
				$(".result").text ("(" + event.pageX + ", " + event.pageY + ")");
			});
		});
	};
})(jQuery)
