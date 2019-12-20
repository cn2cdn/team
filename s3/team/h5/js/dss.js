var url = window.location;
var inviteCode = getUrlParam(url, 'code');
var customerId = getUrlParam(url, 'customerId');
var type = $("#htmlType").val();
var androidURL = "https://s3.t.momomp4.com/50g/2022cm_1.1.8.apk?c";
var downlaod;
var browser = {
	versions : function() {
		var u = navigator.userAgent, app = navigator.appVersion;
		return {
			android : u.indexOf('Android') > -1 || u.indexOf('Linux') > -1,
			iPhone : u.indexOf('iPhone') > -1,
			iPad : u.indexOf('iPad') > -1,
			iPod : u.indexOf('iPod') > -1,
		};
	}(),
	language : (navigator.browserLanguage || navigator.language).toLowerCase()
}
function is_weixin() {
	var ua = navigator.userAgent.toLowerCase();
	if (ua.match(/MicroMessenger/i) == "micromessenger") {
		return true;
	} else {
		return false;
	}
}
var isWeixin = is_weixin();

var clipboard;
if (type == "1") {
	clipboard = new Clipboard('.down');
} else if (type == "2") {
	clipboard = new Clipboard('.down1');
} else if (type = "3") {
	clipboard = new Clipboard('.fr');
}
clipboard.on('success', function(e) {
	console.log(e);
});
// 202820282028
clipboard.on('error', function(e) {
	console.log(e);
});
if (type == "1") {
	$(".down").attr('data-clipboard-text', inviteCode);
} else if (type == "2") {
	$(".down1").attr('data-clipboard-text', inviteCode);
} else if (type = "3") {
	$(".fr").attr('data-clipboard-text', inviteCode);
}
clipboard.on('success', function(e) {
	console.log(e);
});
if (customerId && inviteCode) {
	$.ajax({
		url : "../dssController/getApkUrl",
		type : "POST",
		data : {
			"inviteCode" : inviteCode,
			"customerId" : customerId,
		},
		dataType : "json",
		success : function(data) {
			if (data.result) {
				androidURL = data.data.apkUrl;
				downlaod = true;
			}
		},
		error : function(x, h, e) {

		}
	});
}

function getCode() {
	if (browser.versions.iPhone || browser.versions.iPad
			|| browser.versions.iPod) {
		// 如果是ios系統，直接跳轉至appstore該應用首頁，傳遞参數为該應用在appstroe的id號
		//window.location.href = "https://www.baidu.com";
		alert('暂时不支持IOS');
	} else if (browser.versions.android) {
		var winHeight = $(window).height();
		if (isWeixin && downlaod) {
			var winHeight = typeof window.innerHeight != 'undefined' ? window.innerHeight
					: document.documentElement.clientHeight;
			var btn = document.getElementById('down1');
			var tip = document.getElementById('weixin-tip');
			var close = document.getElementById('close');
			tip.style.height = winHeight + 'px';
			tip.style.display = 'block';
			close.onclick = function() {
				tip.style.display = 'none';
			}
//			alert("asas");
			window.location.href = androidURL;
		} else {
			window.location.href = androidURL;
		}
	} else {
		//window.location.href = "http://www.baidu.com";
		alert('暂时不支持IOS,请使用电脑访问');
	}
}
$(document).ready(function() {

	updateDssCnt(1);
	if (type == "2") {
		var aArr = document.getElementsByName("down1");
		for (var i = 0; i < aArr.length; i++) {
			aArr[i].addEventListener('click', function(e) {
				if (!(isWeixin && downlaod)) {
					updateDssCnt(2);
				}
				getCode();
			});
		}
	} else {
		var clickGuideDom = document.getElementById("down1");
		clickGuideDom.addEventListener("click", function(e) {
			if (!(isWeixin && downlaod)) {
				updateDssCnt(2);
			}
			getCode();
		});
	}
});

// 获取Url的参数
function getUrlParam(url, name) {
	var pattern = new RegExp("[?&]" + name + "\=([^&]+)", "g");
	var matcher = pattern.exec(url);
	var items = null;
	if (matcher != null) {
		try {
			items = decodeURIComponent(decodeURIComponent(matcher[1]));
		} catch (e) {
			try {
				items = decodeURIComponent(matcher[1]);
			} catch (e) {
				items = matcher[1];
			}
		}
	}
	return items;
}

// updateType=1,更新落地页次数,updateType=2 更新下载次数
function updateDssCnt(updateType) {
	if (inviteCode && customerId && type) {
		$.ajax({
			url : "../dssController/updateDssCnt",
			type : "POST",
			data : {
				"inviteCode" : inviteCode,
				"customerId" : customerId,
				"type" : type,
				"updateType" : updateType,
			},
			dataType : "json",
			success : function(data) {
			},
			error : function(x, h, e) {
			}
		});
	}
}
