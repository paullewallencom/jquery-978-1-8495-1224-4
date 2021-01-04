(function ($) {
	var count = 0;
	
	jQuery.fn.player = function (options) {
		var defaults = {
			swf:     "player-viral.swf",
			pId:     "myPlayer",
			mp3:     "sound.mp3",
			mute:    0,
			pPlay:   "play",
			pPause:  "pause",
			pMute:   "mute",
			pStatus: "status",
			pStatusTextPlaying: "***Playing***",
			pStatusTextPaused:  "---Paused---"
		};
		
		var o = jQuery.extend (defaults, options);
		
		return this.each (function () {
			var playerObject = new SWFObject (o.swf, o.pId + count, "0", "0", "9");
			playerObject.addVariable ("file", o.mp3);
			playerObject.addVariable ("icons", "false");
			playerObject.write ($(this).attr ('id'));
			$(this).addClass ("player-container");
			
			var player = $('#' + o.pId + count)[0]
			
			
			var mute = o.mute;
			var playing = false;
			var status = $("#"+o.pStatus);
			status.addClass ("status-container");
			
			$("#"+o.pPlay).click (function () {
				player.sendEvent ("PLAY", "true");
				status.text (o.pStatusTextPlaying);
				
				playing = true;
			}).addClass ("play-button");
			
			$("#"+o.pPause).click (function () {
				player.sendEvent ("PLAY", "false");
				status.text (o.pStatusTextPaused);
				
				playing = false;
			}).addClass ("pause-button");
			
			$("#"+o.pMute).click (function () {
				if (mute) {
					player.sendEvent ("mute", "false");
					mute = 0;
				}
				else {
					player.sendEvent ("mute", "true");
					mute = 1;
				}
			}).addClass ("mute-button");
			
			count ++;
		});
	};
})(jQuery)
