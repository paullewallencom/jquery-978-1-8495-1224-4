(function ($) {
	$.fn.cloud = function (options) {
		var defaults = {
			minFontSizePercentage: 100,
			maxFontSizePercentage: 150
		};
		
		var o = $.extend (defaults, options);
		
		return this.each (function () {
			var e = $(this);
			
			var txtarray = e.text ()                 // retrieve text
			                .toLowerCase ()          // change case
			                .replace (/[,.;:]/g,'')  // delete unwanted characters
			                .replace (/[\n\t]/g,' ') // remove line breaks
			                .split (' ');            // split words
			
			var i,
			    count,
			    tags = {},
			    minCount = 100000,
			    maxCount = 1,
			    len = txtarray.length;
			
			for (i = 0; i < len; i ++) {
				// skip if shorter than 3 characters
				if (txtarray[i].length < 3) continue;
				
				// update tag counter: if it's the first time this tag appears,
				// it means we have to set the counter to 1 (i.e. appeared this
				// time only); we'll increment the tag count by 1 otherwise.
				tags[txtarray[i]] = tags[txtarray[i]] ? ++tags[txtarray[i]] : 1;
			}
			
			// also, we must make sure the maximum and minimum counters
			// are still truthful.
			for (tag in tags) {
				if (tags[tag] > maxCount) maxCount = tags[tag];
				if (tags[tag] < minCount) minCount = tags[tag];
			}
			
			e.empty ();
			
			for (tag in tags) {
				size = (o.maxFontSizePercentage - o.minFontSizePercentage) * (tags[tag] - minCount) / (maxCount - minCount) + o.minFontSizePercentage;
				
				e.append ('<span style="font-size: ' + size + '%">' + tag + '</span> ');
			}
		});
	};
}) (jQuery);
