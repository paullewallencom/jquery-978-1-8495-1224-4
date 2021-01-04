jQuery.log = function (message) {
	if (window.console) {
		console.debug (message);
	}
	else {
		alert (message);
	}
};
