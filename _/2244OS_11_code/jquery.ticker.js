(function ($) {
	$.fn.ticker = function (options) {
		var defaults = {
			startWith: 0,
			showDelay: 2000
		};
	
		var o = jQuery.extend (defaults, options);
		
		return this.each (function () {
			var e = $(this);
			
			e.children (":lt("+(o.startWith)+")").appendTo (e);
			
			e.children (':not(:first)').hide ();
			
			setInterval (function () {
				e.children (":first").fadeOut ().next ().fadeIn ().end ().appendTo (e);
			}, o.showDelay);
		});
	};
})(jQuery)
