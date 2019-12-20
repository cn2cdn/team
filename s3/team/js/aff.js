document.addEventListener('DOMContentLoaded', function() {
    addHTML_canvas = '<div id="shareCanvas" class="overlay">';
    addHTML_canvas += '    <div class="overlay-content">';
    addHTML_canvas += '    <img id="shareImg" src="/team/p/img/ganxie_01.png" style="height:100%;max-width: 100%;" onclick="closeShare();">';
    addHTML_canvas += '    </div>';
    addHTML_canvas += '    </div>';
    addHTML_fav = '    <div class="overlay-content" onclick="closeFav();" align="center">';
    addHTML_fav += '    <img id="favImg" src="/team/p/img/share_1.png" style="height:100%;max-width: 100%;" >';
    addHTML_fav += '    </div>';
    addHTML_share = '   <table width="700" border="0" align="center" cellpadding="0" cellspacing="0">';
    addHTML_share += '  <tr>';
    addHTML_share += '  <td><img src="/team/p/img/share_2.png" height="120" width="700" onclick="openShare()"/></td>';
    addHTML_share += '  </tr>';
    addHTML_share += '  </table>';
    addHTML_share += '   <br />';
    addHTML_share += '   <hr style="border-color:#fff;"/ width="700">';
    addHTML_share += '    <br />';
    var favDiv = document.createElement('div');
    favDiv.setAttribute("id", "favCanvas");
    favDiv.setAttribute("class", "overlay");
    favDiv.innerHTML = addHTML_fav;
    document.body.appendChild(favDiv);
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/i.test(userAgent)) {
        var mobile_ios = true
    }
    if (/android/i.test(userAgent)) {
        var mobile_and = true
    }
    if (/micromessenger|wechat|weixin/i.test(userAgent)) {
        var wechat = true
    }
    if (mobile_ios || mobile_and) {
        var validShareBlock = document.getElementsByClassName('shareBlock');
        for (var i = 0; i < validShareBlock.length; i++) {
            if (i == 0) {
                validShareBlock[i].innerHTML = addHTML_canvas + addHTML_share
            } else {
                validShareBlock[i].innerHTML = addHTML_share
            }
        }
        var Obj_shareImg = document.getElementById("shareImg");
        var Obj_favImg = document.getElementById("favImg");
        if (wechat) {
            Obj_shareImg.src = "/team/p/img/wechat_share.png";
            Obj_favImg.src = "/team/p/img/wechat_fav.png"
        } else {
            if (mobile_ios) {
                if (/crios/i.test(userAgent)) {
                    Obj_shareImg.src = "/team/p/img/ios_crios_share.png";
                    Obj_favImg.src = "/team/p/img/ios_crios_fav.png"
                } else if (/fxios/i.test(userAgent)) {
                    Obj_shareImg.src = "/team/p/img/ios_fxios_share.png";
                    Obj_favImg.src = "/team/p/img/ios_fxios_fav.png"
                } else if (/sogou/i.test(userAgent)) {
                    Obj_shareImg.src = "/team/p/img/ios_sogou_share.png";
                    Obj_favImg.src = "/team/p/img/ios_sogou_fav.png"
                } else if (/ucbrowser/i.test(userAgent)) {
                    Obj_shareImg.src = "/team/p/img/ios_ucbrowser_share.png";
                    Obj_favImg.src = "/team/p/img/ios_ucbrowser_fav.png"
                } else if (/qhbrowser/i.test(userAgent)) {
                    Obj_shareImg.src = "/team/p/img/ios_qhbrowser_share.png";
                    Obj_favImg.src = "/team/p/img/ios_qhbrowser_fav.png"
                } else if (/qqbrowser/i.test(userAgent)) {
                    Obj_shareImg.src = "/team/p/img/ios_qqbrowser_share.png";
                    Obj_favImg.src = "/team/p/img/ios_qqbrowser_fav.png"
                } else if (/baidu/i.test(userAgent)) {
                    Obj_shareImg.src = "/team/p/img/ios_baidu_share.png";
                    Obj_favImg.src = "/team/p/img/ios_baidu_fav.png"
                } else if (/2345/i.test(userAgent)) {
                    Obj_shareImg.src = "/team/p/img/ios_2345_share.png";
                    Obj_favImg.src = "/team/p/img/ios_2345_fav.png"
                } else if (/version/i.test(userAgent)) {
                    Obj_shareImg.src = "/team/p/img/ios_version_share.png";
                    Obj_favImg.src = "/team/p/img/ios_version_fav.png"
                } else {
                    Obj_shareImg.src = "/team/p/img/ios_share.png";
                    Obj_favImg.src = "/team/p/img/ios_fav.png"
                }
            }
        }
    }
}, false);

function openShare() {
    document.getElementById("shareCanvas").style.height = "100%";
    document.getElementById("left_couple").style.visibility = "hidden";
    document.getElementById("right_couple").style.visibility = "hidden";
    document.getElementById("left_couplet").style.visibility = "hidden";
    document.getElementById("right_couplet").style.visibility = "hidden";
    document.getElementById("left_float").style.visibility = "hidden";
    document.getElementById("right_float").style.visibility = "hidden";
    document.getElementById("download_dibu").style.visibility = "hidden"
}
function closeShare() {
    document.getElementById("shareCanvas").style.height = "0%"
}
function openFav() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|iPad|iPhone|iPod/i.test(userAgent)) {
        document.getElementById("favCanvas").style.height = "100%";
        if (/liebao/i.test(userAgent)) {
            closeFav()
        }
    } else {
        var Obj_favImg = document.getElementById("favImg");
        Obj_favImg.src = "https://static.cn2cdn.space/team/p/img/share_1.gif";
        document.getElementById("favCanvas").style["top"] = "70%";
        document.getElementById("favCanvas").style.height = "30%"
    }
}
function GetApp() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/android/i.test(userAgent)) {
        alert('安装APP时允许所有权限,并关闭省流量模式或者更换浏览器！').window.location.href = '/app/index.php';
    }
}
function closeFav() {
    document.getElementById("favCanvas").style.height = "0%"
}
GetApp()