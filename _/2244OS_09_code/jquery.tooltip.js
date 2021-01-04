(function ($) {
	$.expr[':'].external = function (object) {
		return (object.hostname != location.hostname);
	};

	$.fn.updatePosition = function (event) {
		return this.each (function () {
			$(this).css ({
				left: event.pageX+20,
				top:  event.pageY-20
			});
		});
	};
	
	$.fn.tooltip = function () {
		return this.each (function () {
			var e = $(this);
			var title = e.attr ("title");
			
			if (e.is ("a") && title != '') {
				e.removeAttr ('title')
				 .hover (function (event) {
					// mouse hovers
					$('<div id="tooltip" />').appendTo ("body")
					                         .text (title)
					                         .hide ()
					                         .updatePosition (event)
					                         .fadeIn (400);
				 }, function () {
					// mouse leaves
					$("#tooltip").remove ();
				 }).mousemove (function (event) {
					// mouse moves
					$("#tooltip").updatePosition (event);
				 });
			}
		});
	};
})(jQuery)
