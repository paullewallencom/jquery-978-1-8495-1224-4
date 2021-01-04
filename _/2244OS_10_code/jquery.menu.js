(function ($) { 
	jQuery.fn.menu = function () { 
		return this.each (function () { 
			$(this).addClass ("dropdownMenu"); 
			 
			$("li", this).hover (function () { 
				$("ul:first", this).css ({ visibility: "visible" }).fadeIn (600); 
			}, function () { 
				$("ul:first", this).hide (); 
			}); 
		}); 
	}; 
})(jQuery)
