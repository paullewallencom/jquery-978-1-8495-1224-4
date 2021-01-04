(function ($) {
	$.fn.accordion = function (options) {
		var defaults = {
			visibleByDefault: 0
		};
	
		var o = $.extend (defaults, options);
		
		return this.each (function () {
			var e = $(this);
			
			e.find ("p").hide ();
			e.children (":eq("+o.visibleByDefault+")").children ("p").show ();
			e.find ("h1").click (function () {
				$(this).next ("p").slideToggle (700).parent ().siblings ().children ("p").slideUp ("slow");
			});
		});
	};
})(jQuery)
