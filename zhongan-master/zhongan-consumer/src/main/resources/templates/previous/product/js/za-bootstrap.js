(function () {
	var theUA = window.navigator.userAgent.toLowerCase();
	if ((theUA.match(/msie\s\d+/) && theUA.match(/msie\s\d+/)[0]) || (theUA.match(/trident\s?\d+/) && theUA.match(/trident\s?\d+/)[0])) {
	    var ieVersion = theUA.match(/msie\s\d+/)[0].match(/\d+/)[0] || theUA.match(/trident\s?\d+/)[0];
	    if (ieVersion < 9) {
	    	if (location.pathname !== '/notsupport') {
	    		location.href = '/notsupport'
	    	}
		}
	}
	try {
		var $xiaomi = $(".xiaomi");
		if ($xiaomi[0]) {
			if ($.trim($xiaomi.parent().text()) === "小米意外保") {
				$xiaomi[0].nextSibling.nodeValue = '小米手机意外保';
			}
		}
	} catch(e) {}
})();