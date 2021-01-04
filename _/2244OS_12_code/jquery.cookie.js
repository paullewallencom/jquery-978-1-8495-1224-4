(function ($) {
	$.extend ({
		setcookie: function (cookieName, cookieValue, options) {
			var defaults = {
				cookieExpires: 0,
				cookiePath:    '',
				cookieDomain:  '',
				cookieSecure:  0
			};
			
			var o = $.extend (defaults, options);
                	
			var name    = cookieName;
			var value   = cookieValue;
			var expires = o.cookieExpires;
			var path    = o.cookiePath   ? '; path=' + (o.cookiePath) : '';
			var domain  = o.cookieDomain ? '; domain=' + (o.cookieDomain) : '';
			var secure  = o.cookieSecure ? '; secure' : '';
                	
                	if (expires) {
                		var date = new Date ();
                		date.setDate (date.getDate () + expires);
                		expires = '; expires=' + date.toUTCString ();
                	}
                	
                	document.cookie = name + '=' + encodeURIComponent (value) + expires + path + domain + secure;
		},
		
		getcookie: function (cookieName) {
			if (document.cookie) {
				var i, cookie, cookies = document.cookie.split (';');
				var len = cookies.length, nLen = cookieName.length;
				
				for (i = 0; i < len; i ++) {
					cookie = $.trim (cookies[i]);
					
					if (cookie.substring (0, nLen + 1) == (cookieName + '=')) {
						return decodeURIComponent (cookie.substring (nLen + 1));
					}
				}
			}
			
			return null;
		},
		
		delcookie: function (cookieName) {
			$.setcookie (cookieName, null);
		}
	});
}) (jQuery);
