!
    function(n) {
        function t(i) {
            if (e[i]) return e[i].exports;
            var o = e[i] = {
                i: i,
                l: !1,
                exports: {}
            };
            return n[i].call(o.exports, o, o.exports, t),
                o.l = !0,
                o.exports
        }
        var e = {};
        return t.m = n,
            t.c = e,
            t.i = function(n) {
                return n
            },
            t.d = function(n, t, e) {
                Object.defineProperty(n, t, {
                    configurable: !1,
                    enumerable: !0,
                    get: e
                })
            },
            t.n = function(n) {
                var e = n && n.__esModule ?
                    function() {
                        return n["default"]
                    }: function() {
                        return n
                    };
                return t.d(e, "a", e),
                    e
            },
            t.o = function(n, t) {
                return Object.prototype.hasOwnProperty.call(n, t)
            },
            t.p = "",
            t(t.s = 0)
    } ([function(n, t) { !
        function() {
            new(function() {
                function n() {
                    this.init()
                }
                return n.prototype.init = function() {
                    // $(".indexBanner").slick({
                    //     dots: !0,
                    //     autoplay: !0,
                    //     autoplaySpeed: 2e3,
                    //     prevArrow: '<div class="prev"><i class="glyphicon glyphicon-menu-left"></i></div>',
                    //     nextArrow: '<div class="next"><i class="glyphicon glyphicon-menu-right"></i></div>',
                    //     responsive: [{
                    //         breakpoint: 480,
                    //         settings: {
                    //             arrows: !1
                    //         }
                    //     }]
                    // })
                },
                    n
            } ()),
                new(function() {
                    function n() {
                        this.switchInfo()
                    }
                    return n.prototype.switchInfo = function() {
                        var n = $(".cat_option"),
                            t = $(".video-wrapper");
                        n.on("click",
                            function() {
                                var e = $(this).data("id");
                                n.removeClass("clicked"),
                                    $(this).addClass("clicked"),
                                    t.removeClass("showMe"),
                                    $("#" + e).addClass("showMe"),
                                    $(".indexLoad").lazy({
                                        bind: "event",
                                        delay: 0
                                    })
                            })
                    },
                        n
                } ())
        } ()
    }]);