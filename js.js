// 書き換えるURL
var url = ["store"];
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
