/**
 * Created by Andy on 2017/10/6.
 */
(function () {
    function browserRedirect() {
        var sUserAgent = navigator.userAgent.toLowerCase();
        var bIsIpad = sUserAgent.match(/ipad/i) == "ipad";
        var bIsIphoneOs = sUserAgent.match(/iphone os/i) == "iphone os";
        var bIsMidp = sUserAgent.match(/midp/i) == "midp";
        var bIsUc7 = sUserAgent.match(/rv:1.2.3.4/i) == "rv:1.2.3.4";
        var bIsUc = sUserAgent.match(/ucweb/i) == "ucweb";
        var bIsAndroid = sUserAgent.match(/android/i) == "android";
        var bIsCE = sUserAgent.match(/windows ce/i) == "windows ce";
        var bIsWM = sUserAgent.match(/windows mobile/i) == "windows mobile";
        if (bIsIpad || bIsIphoneOs || bIsMidp || bIsUc7 || bIsUc || bIsAndroid || bIsCE || bIsWM) {
            return 'phone';
        } else {
            return 'pc';
        }
    }

    if (browserRedirect() == 'pc') {
        var div = document.getElementById('container');
        var son = document.getElementById('play-content');
        div.removeChild(son);
        var appd = document.createElement('h2');
        appd.style.textAlign = 'center';
        appd.style.color = 'red';
        appd.innerHTML = '请使用移动设备(手机浏览器或微信)打开，谢谢配合！';
        div.appendChild(appd);
    } else {
        var div = document.getElementById('play-content');
        var canvas = document.getElementById('myCanvas');
        canvas.width = div.offsetWidth;
        canvas.height = div.offsetHeight;
        var ctx = canvas.getContext('2d');
        ctx.moveTo(5, 5);
        ctx.lineTo(200, 200);
        ctx.stroke()

        // ctx.

    }


})()