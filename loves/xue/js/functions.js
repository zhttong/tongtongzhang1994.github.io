/*Download by http://www.codefans.net*/(function (a) {    a.fn.typewriter = function (time) {        this.each(function () {            var d = a(this), c = d.html(), b = 0;            l = c.length;            d.html("");            var e = setInterval(function () {                var f = c.substr(b, 1);                if (f === "<") {                    //substr(index, 1) 方法在字符串中抽取从index下标开始的一个的字符                    b = c.indexOf(">", b) + 1                } else if (f === "&") {                    b = c.indexOf(";", b) + 1                } else {                    b++                }                d.html(c.substring(0, b) + (b && 1 ? "_" : ""));                // var div = document.getElementById('div_txt');                // div.scrollTop = div.scrollHeight;                var body = window.document.body.scrollHeight;                window.scroll(0, body);                var canvas = document.getElementById("c");                canvas.height = document.getElementById("div_txt").scrollHeight + 20;                if (b >= c.length) {                    clearInterval(e)                }            }, time);        });        return this    }})(jQuery);