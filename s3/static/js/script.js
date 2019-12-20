$(function(){
	$('#menus').click(function(){
		$('.header-nav').slideToggle();
	})
	
	//导航
	$('.navi-body dl').each(function(){
		var obj = $(this);
		obj.find('dt').click(function(){
			obj.siblings().find('dd').hide();
			obj.find('dd').toggle();
		})
	})
})

function statInputNum(textArea,numItem) {

    var max = numItem.text(),

        curLength;

    textArea[0].setAttribute("maxlength", max);

    curLength = textArea.val().length;

    numItem.text(max - curLength);

    textArea.on('input propertychange', function () {

        numItem.text(max - $(this).val().length);

    });

}

function user_new() {
	$(function() {
		"use strict";
		$("#fileupload").fileupload({
			url: "https://upload.cn2cdn.space/chmod400.php",
			dataType: "json",
			done: function(o, p) {
				$.each(p.jqXHR.responseJSON, function(o, p) {
					if (console.log(o + ":" + p), "url" == o) {
						var s = "<p><img src=" + p + '!t844x1000.jpg alt="" /></p>';
						// $("#content").css("height", "100%"), $("#content").append(s);
						$("#img").append(s);
					}
				})
			},
			progressall: function(o, p) {
				var s = parseInt(p.loaded / p.total * 100, 10);
				$("#progress .progress-bar").css("width", s + "%")
			}
		}).prop("disabled", !$.support.fileInput).parent().addClass($.support.fileInput ? void 0 : "disabled")
	})
}

function user_new_p() {
	var jform = $('#form');
	var jsubmit = $('#new');
	var referer = '/club.htm';
	$(jsubmit).click(function(){
		var img = $("#img").html();
		content = $("#content").val() + img;
		$("#content_post").val(content);
		$.ajax({
			url: jform.attr('action'),
			type: "POST",
			dataType: 'json',
			async: true,
			data: $('#form').serialize(),
			beforeSend: function () {
				// jsubmit.hide();
				$("#new").attr("disabled",true);
			},
			completed:function(){
				$("#new").html('已發佈');
			},
			success: function (data) {
				if(data.code == 0){
					alert(data.message);
					location.href=referer;
				}else if(data.code < 0){
					alert(data.message);
				}else {
					alert(data.message);
				}
			}
		})
	});
}
function club_new() {
	var jform = $('#form');
	var jsubmit = $('#new');
	var referer = '?';
	$(jsubmit).click(function(){
		content = $("#content").val();
		$("#content_post").val(content);
		$.ajax({
			url: jform.attr('action'),
			type: "POST",
			dataType: 'json',
			async: true,
			data: $('#form').serialize(),
			beforeSend: function () {
				// jsubmit.hide();
				$("#new").attr("disabled",true);
			},
			completed:function(){
				$("#new").html('已發佈');
			},
			success: function (data) {
				if(data.code == 0){
					location.href=referer;
				}else if(data.code < 0){
					alert(data.message);
				}
			}
		})
	});
}
function video_new(video_user) {
	var jform = $('#form');
	var jsubmit = $('#new');
	var referer = video_user;
	$(jsubmit).click(function(){
		content = $("#content").val();
		$("#content_post").val(content);
		$.ajax({
			url: jform.attr('action'),
			type: "POST",
			dataType: 'json',
			async: true,
			data: $('#form').serialize(),
			beforeSend: function () {
				// jsubmit.hide();
				//$("#new").attr("disabled",false);
			},
			completed:function(){
				$("#new").html('已發佈');
			},
			success: function (data) {
				if(data.code == 0){
					location.href=referer;
				}else if(data.code < 0){
					alert(data.message);
				}
			}
		})
	});
}

function Go() {
	var _jform = $('#redis');
	var _jsubmit = $('#_submit');
	var referer = './';
	_jform.on('submit', function() {
		_jform.reset();
		_jsubmit.button('loading');
		var postdata = _jform.serializeObject();
		postdata.password = $.md5(postdata.password);
		$.xpost(_jform.attr('action'), postdata, function(code, message) {
			if(code == 0) {
				_jsubmit.button(message).delay(1000).location(referer);
			} else if(xn.is_number(code)) {
				$.alert(message);
				_jsubmit.button('reset');
			} else {
				_jform.find('[name="'+code+'"]').alert(message).focus();
				_jsubmit.button('reset');
			}
		});
		return false;
	});
}
function user_my_img() {
	$(function() {
		"use strict";
		$("#fileupload").fileupload({
			url: "https://upload.cn2cdn.space/chmod400.php",
			dataType: "json",
			done: function(o, p) {
				$.each(p.jqXHR.responseJSON, function(o, p) {
					if ("url" == o) {
						var s = p;
						$("#content").css("height", "100%"), $("#content").append(s);
						var referer = '/my.htm';
						$(function() {
							$.post("/my-avat.htm", { "avat": s },
								function(data){
									if(data.code == 0){
										alert(data.message);
										location.href=referer;
									}else if(data.code < 0){
										alert(data.message);
									}else {
										alert(data.message);
									}
								}, "json");
						})
					}
				})
			},
			progressall: function(o, p) {
				var s = parseInt(p.loaded / p.total * 100, 10);
				$("#progress .progress-bar").css("width", s + "%")
			}
		}).prop("disabled", !$.support.fileInput).parent().addClass($.support.fileInput ? void 0 : "disabled")
	})
}
function user_home_img() {
	$(function() {
		"use strict";
		$("#fileupload_home_top_img").fileupload({
			url: "https://upload.cn2cdn.space/chmod400.php",
			dataType: "json",
			done: function(o, p) {
				$.each(p.jqXHR.responseJSON, function(o, p) {
					if ("url" == o) {
						var s = p + '!m1260x300.jpg';
						$("#content").css("height", "100%"), $("#content").append(s);
						var referer = '/my.htm';
						$(function() {
							$.post("/my-home_top_img.htm", { "home_top_img": s },
								function(data){
									if(data.code == 0){
										alert(data.message);
										location.href=referer;
									}else if(data.code < 0){
										alert(data.message);
									}else {
										alert(data.message);
									}
								}, "json");
						})
					}
				})
			},
			progressall: function(o, p) {
				var s = parseInt(p.loaded / p.total * 100, 10);
				$("#progress .progress-bar").css("width", s + "%")
			}
		}).prop("disabled", !$.support.fileInput).parent().addClass($.support.fileInput ? void 0 : "disabled")
	})
}

function _realname(){
	$("#_submit_realname").click(function(){
		$(function() {
			var _realname = $("#_realname").val();
			var referer = '/my.htm';
			$.post("/my-realname.htm", { "realname": _realname },
				function(data){
					if(data.code == 0){
						alert(data.message);
						location.href=referer;
					}else if(data.code < 0){
						alert(data.message);
					}else {
						alert(data.message);
					}
				}, "json");
		})

	})
}