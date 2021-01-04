(function ($) {
	$.fn.formCheck = function (options) {
		var defaults = {
			errorClass: "error"
		};
	
		var o = jQuery.extend (defaults, options);
		
		return this.each (function () {
			var form = $(this);
			
			if (!form.is ("form")) return;
			
			form.submit (function () {
				var errorFlag = false;
				
				$(":input", this).each (function (index, element) {
					e = $(element);
					
					e.removeClass (o.errorClass);
					
					if (e.hasClass ("required") && e.val () == '') {
						errorFlag = true;
						e.addClass (o.errorClass);
					}
					
					if (e.hasClass ("email") && !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test (e.val ()) && e.val ().length > 0) {
						errorFlag = true;
						e.addClass (o.errorClass);
					}
					
					if (e.hasClass ("numbers") && !/^\d+$/.test (e.val ()) && e.val ().length > 0) {
						errorFlag = true;
						e.addClass (o.errorClass);
					}
					
					var p = this.className.match(/min(\d+)/i);
					if (p && e.val ().length < p[1]) {
						errorFlag = true;
						e.addClass (o.errorClass);
					}
				});
				
				return !errorFlag;
			});
		});
	};
})(jQuery)
