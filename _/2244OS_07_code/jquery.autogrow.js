(function ($) {
	$.fn.autoGrow = function (options) {
		var defaults = {
			minHeight: 0,
			maxHeight: 9999
		};
	
		var o = jQuery.extend (defaults, options);
		
		return this.each (function () {
			var e = $(this);
			var pValLength, pWidth, valLength, width, h;
			
			if (!e.is ("textarea")) return;
			
			e.css ("overflow", "hidden").keyup (function () {
				valLength = $(this).val ().length;
				width = $(this).attr ("offsetWidth");
				
				if (valLength < pValLength || width != pWidth) {
					$(this).height (0);
				}
				
				h = Math.max (o.minHeight, Math.min ($(this).attr ("scrollHeight"), o.maxHeight));
				
				$(this).css ("overflow", ($(this).attr ("scrollHeight") > h ? "auto" : "hidden")).height (h);
				
				pValLength = valLength;
				pWidth = width;
			});
		});
	};
})(jQuery)
