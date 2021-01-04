(function ($) {
	function _debug (msg)
	{
		if (window.console) {
			console.debug (msg);
		} else {
			alert (msg);
		}
	};

	jQuery.fn.txtHover = function (options) {
		var defaults = {
			txt: 'Mouse hover'
		};
	
		var o = jQuery.extend (defaults, options);

		return this.each (function () {
			var e      = jQuery(this);
			var oldTxt = e.text ();
		
			e.hover (function () {
				_debug ("Mouse hovers #" + e.attr ('id') + " (\"" + o.txt + "\")");
				e.text (o.txt);
			}, function () {
				_debug ("Mouse leaves #" + e.attr ('id'));
				e.text (oldTxt);
			});
		});
	};
})(jQuery)
