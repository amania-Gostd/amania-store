// 書き換えるURL
var url = ["(乂'ω')きゅっ", "きゅっ(乂'ω')", "(乂'ω')きゅっ", "└('ω')┘ﾆｬ"];
var count = 0;
// URLを順々に書き換える
setInterval(function() {
	// URL書き換え
	window.history.replaceState(null, null, url[count]);
	if(count < url.length - 1) {
		count++;
	} else {
		count = 0;
	}
}, 500);