(function ($) {
	jQuery.fn.gallery = function () {
		return this.each (function () {
			var e      = $(this);
			var h      = e.height ();

			e.height (128);
			
			e.click (function () {
				// removes the currently displayed preview (if any)
				$("#myGalleryId").remove ();
				
				e.clone ()
				 .attr ("id", "myGalleryId")
				 .height (h)
				 .css ("position", "absolute")
				 .prependTo ("body")
				 .center()
				 .click (function () {
					// whenever we click on the big preview,
					// it will disappear.
					// NOTE $(this) always refers to the currently
					// selected element, the preview in this case
				 	$(this).remove ()
				 });
			});
		});
	};
})(jQuery)
