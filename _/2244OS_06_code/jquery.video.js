(function ($) {
	jQuery.fn.video = function (options) {
		var defaults = {
			width:    425,
			height:   355,
			autoplay: 1,
			loop:     0,
			thumb:    'default'
		};
		
		var o = jQuery.extend (defaults, options);
		
		return this.each (function () {
			var e = $(this);
			var id = e.attr ("href").match ("[\?&]v=([^&#]*)")[1];
			
			e.html ('<img src="http://img.youtube.com/vi/'+id+'/'+o.thumb+'.jpg" class="thumbnail" alt="Youtube video" />').click (function (evt) {
				evt.preventDefault ();
				
				$object  = $('<object></object>'); 
				$param   = $('<param></param>'); 
				$embed   = $('<embed></embed>'); 

				$object.attr ('width', ''+o.width) 
				       .attr ('height', ''+o.height) 
				       .prependTo ($("#popup #video")); 

				$param.attr ('name', 'movie') 
				      .attr ('value', 'http://www.youtube.com/v/'+id+'?autoplay='+o.autoplay+'&loop='+o.loop) 
				      .appendTo ($object) 
				      .clone () 
				      .attr ('name', 'allowScriptAccess') 
				      .attr ('value', 'always') 
				      .insertAfter ($param); 

				$embed.attr ('src', 'http://www.youtube.com/v/'+id+'?autoplay='+o.autoplay+'&loop='+o.loop) 
				      .attr ('type', 'application/x-shockwave-flash') 
				      .attr ('allowscriptaccess', 'always') 
				      .attr ('width', ''+o.width) 
				      .attr ('height', ''+o.height) 
				      .appendTo ($object);
				
				$("#popup #close").click (function () {
					$("#popup").fadeOut ("slow").remove ();
					$('#overlay').fadeOut ("slow");
				});
				
				$("#popup").center ().fadeIn ("slow");
				$('#overlay').fadeIn ("slow");
			});
		});
	};
})(jQuery)
