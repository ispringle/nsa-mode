function waitForElement(selector, time) {
	if(document.querySelector(selector) != null) {
		var target = document.getElementById('widget-minimap-caption');
		target.innerHTML = 'NSA Mode';
		console.log('NSA Mode Activated!');
	} else {
		setTimeout(function() {
			waitForElement(selector, time);
		}, time);
	}
}

waitForElement('#widget-minimap-caption', 5000);
