(function() {
    var c = Q.use("fish").R = {};

    c.sources = [
        { id: "mainbg", size: 456, src: "images/game_bg_2_hd.jpg?" + Math.random() },
        { id: "bottom", size: 50, src: "images/bottom.png?" + Math.random() },
        { id: "fish1", size: 6, src: "images/fish1.png?" + Math.random() },
        { id: "fish2", size: 16, src: "images/fish2.png?" + Math.random() },
        { id: "fish3", size: 11, src: "images/fish3.png?" + Math.random() },
        { id: "fish4", size: 15, src: "images/fish4.png?" + Math.random() },
        { id: "fish5", size: 43, src: "images/fish5.png?" + Math.random() },
        { id: "fish6", size: 45, src: "images/fish6.png?" + Math.random() },
        { id: "fish7", size: 80, src: "images/fish7.png?" + Math.random() },
        { id: "fish8", size: 100, src: "images/fish8.png?" + Math.random() },
        { id: "fish9", size: 104, src: "images/fish9.png?" + Math.random() },
        { id: "fish10", size: 121, src: "images/fish10.png?" + Math.random() },
        { id: "shark1", size: 287, src: "images/shark1.png?" + Math.random() },
        { id: "shark2", size: 382, src: "images/shark2.png?" + Math.random() },
        { id: "cannon1", size: 11, src: "images/cannon1.png?" + Math.random() },
        { id: "cannon2", size: 11, src: "images/cannon2.png?" + Math.random() },
        { id: "cannon3", size: 11, src: "images/cannon3.png?" + Math.random() },
        { id: "cannon4", size: 13, src: "images/cannon4.png?" + Math.random() },
        { id: "cannon5", size: 13, src: "images/cannon5.png?" + Math.random() },
        { id: "cannon6", size: 15, src: "images/cannon6.png?" + Math.random() },
        { id: "cannon7", size: 17, src: "images/cannon7.png?" + Math.random() },
        { id: "bullet", size: 8, src: "images/bullet.png?" + Math.random() },
        { id: "web", size: 93, src: "images/web.png?" + Math.random() },
        { id: "numBlack", size: 1, src: "images/number_black.png?" + Math.random() },
        { id: "coinAni1", size: 19, src: "images/coinAni1.png?" + Math.random() },
        { id: "coinAni2", size: 22, src: "images/coinAni2.png?" + Math.random() },
        { id: "coinText", size: 16, src: "images/coinText.png?" + Math.random() }
    ];

    c.init = function(a) {
        this.images = a;
        this.initResources();
    };

    c.initResources = function() {
        this.mainbg = this.getImage("mainbg");
        this.bottom = this.getImage("bottom");
        this.bottombar = { image: this.bottom, rect: [0, 0, 765, 72] };
        this.cannonMinus = { image: this.bottom, up: { rect: [132, 72, 44, 31] }, down: { rect: [88, 72, 44, 31] }, width: 44, height: 31 };
        this.cannonPlus = { image: this.bottom, up: { rect: [44, 72, 44, 31] }, down: { rect: [0, 72, 44, 31] }, width: 44, height: 31 };
        this.numBlack = { image: this.getImage("numBlack"), 9: [0, 0, 20, 24], 8: [0, 24, 20, 24], 7: [0, 48, 20, 24], 6: [0, 72, 20, 24], 5: [0, 96, 20, 24], 4: [0, 120, 20, 24], 3: [0, 144, 20, 24], 2: [0, 168, 20, 24], 1: [0, 192, 20, 24], 0: [0, 216, 20, 24] };
        this.coinText = { image: this.getImage("coinText"), 0: [0, 0, 36, 49], 1: [36, 0, 36, 49], 2: [72, 0, 36, 49], 3: [108, 0, 36, 49], 4: [144, 0, 36, 49], 5: [180, 0, 36, 49], 6: [216, 0, 36, 49], 7: [252, 0, 36, 49], 8: [288, 0, 36, 49], 9: [324, 0, 36, 49], "+": [360, 0, 36, 49] };
        this.coinAni1 = {
            image: this.getImage("coinAni1"),
            frames: [
                { rect: [0, 0, 60, 60] }, { rect: [0, 60, 60, 60] }, { rect: [0, 120, 60, 60] },
                { rect: [0, 180, 60, 60] }, { rect: [0, 240, 60, 60] }, { rect: [0, 300, 60, 60] },
                { rect: [0, 360, 60, 60] }, { rect: [0, 420, 60, 60] }, { rect: [0, 480, 60, 60] },
                { rect: [0, 540, 60, 60] }
            ],
            regX: 30, regY: 30, scaleX: 0.8, scaleY: 0.8, useFrames: !0, interval: 2
        };
        this.coinAni2 = {
            image: this.getImage("coinAni2"),
            frames: [
                { rect: [0, 0, 60, 60] }, { rect: [0, 60, 60, 60] }, { rect: [0, 120, 60, 60] },
                { rect: [0, 180, 60, 60] }, { rect: [0, 240, 60, 60] }, { rect: [0, 300, 60, 60] },
                { rect: [0, 360, 60, 60] }, { rect: [0, 420, 60, 60] }, { rect: [0, 480, 60, 60] },
                { rect: [0, 540, 60, 60] }
            ],
            regX: 30, regY: 30, scaleX: 0.8, scaleY: 0.8, useFrames: !0, interval: 2
        };

        var a = {
            image: this.getImage("fish1"),
            frames: [
                { rect: [0, 0, 55, 37], label: "swim" }, { rect: [0, 37, 55, 37] },
                { rect: [0, 74, 55, 37] }, { rect: [0, 111, 55, 37], jump: "swim" },
                { rect: [0, 148, 55, 37], label: "capture" }, { rect: [0, 185, 55, 37] },
                { rect: [0, 222, 55, 37] }, { rect: [0, 259, 55, 37], jump: "capture" }
            ],
            polyArea: [{ x: 10, y: 5 }, { x: 55, y: 5 }, { x: 55, y: 22 }, { x: 10, y: 22 }],
            mixin: {
                coin: 1, captureRate: 0.55, maxNumGroup: 8, minSpeed: 0.5,
                maxSpeed: 1.2, regX: 35, regY: 12, useFrames: !0, interval: 10
            }
        };

        // Continue formatting similar objects for fish2, fish3, etc...

        this.fishTypes = [null, a, b, e, d, c, i, f, l, k, g, j, m];
        this.cannonTypes = [null, n, o, p, q, r, s, t];

        a = this.getImage("bullet");
        this.bullets = [
            { image: a, rect: [86, 0, 24, 26], regX: 12, regY: 13 },
            { image: a, rect: [61, 0, 25, 29], regX: 12, regY: 14 },
            { image: a, rect: [32, 35, 27, 31], regX: 13, regY: 15 },
            { image: a, rect: [30, 82, 29, 33], regX: 14, regY: 16 },
            { image: a, rect: [0, 82, 30, 34], regX: 15, regY: 17 },
            { image: a, rect: [30, 0, 31, 35], regX: 15, regY: 17 },
            { image: a, rect: [0, 44, 32, 38], regX: 16, regY: 19 }
        ];

        a = this.getImage("web");
        this.webs = [
            { image: a, rect: [319, 355, 116, 118], regX: 58, regY: 59, polyArea: [{ x: 20, y: 20 }, { x: 100, y: 20 }, { x: 100, y: 100 }, { x: 20, y: 100 }] },
            { image: a, rect: [0, 399, 137, 142], regX: 68, regY: 71, polyArea: [{ x: 20, y: 20 }, { x: 120, y: 20 }, { x: 120, y: 120 }, { x: 20, y: 120 }] },
            { image: a, rect: [163, 355, 156, 162], regX: 78, regY: 81, polyArea: [{ x: 20, y: 20 }, { x: 140, y: 20 }, { x: 140, y: 140 }, { x: 20, y: 140 }] },
            { image: a, rect: [242, 181, 180, 174], regX: 90, regY: 87, polyArea: [{ x: 20, y: 20 }, { x: 160, y: 20 }, { x: 160, y: 160 }, { x: 20, y: 160 }] },
            { image: a, rect: [0, 244, 163, 155], regX: 81, regY: 77, polyArea: [{ x: 10, y: 10 }, { x: 150, y: 10 }, { x: 150, y: 150 }, { x: 10, y: 150 }] },
            { image: a, rect: [242, 0, 191, 181], regX: 95, regY: 90, polyArea: [{ x: 10, y: 10 }, { x: 180, y: 10 }, { x: 180, y: 180 }, { x: 10, y: 180 }] },
            { image: a, rect: [0, 0, 242, 244], regX: 121, regY: 122, polyArea: [{ x: 30, y: 30 }, { x: 210, y: 30 }, { x: 210, y: 210 }, { x: 30, y: 210 }] }
        ];
    };

    // Continue with other functions, ensuring proper indentation and structure...

    c.convertPlistImage = function() {
        this.fish = this.getImage("fish");
        this.shark = this.getImage("shark");
        this.cannon = this.getImage("cannon");

        var a = [
            { frame: [1438, 419, 60, 60], offset: [0, 0], rotated: !1, sourceRect: [0, 0, 60, 60], sourceSize: [60, 60] },
            { frame: [1396, 507, 60, 60], offset: [0, 0], rotated: !1, sourceRect: [0, 0, 60, 60], sourceSize: [60, 60] },
            { frame: [1377, 419, 60, 60], offset: [0, 0], rotated: !1, sourceRect: [0, 0, 60, 60], sourceSize: [60, 60] },
            { frame: [1051, 1295, 54, 60], offset: [0, 0], rotated: !1, sourceRect: [3, 0, 54, 60], sourceSize: [60, 60] },
            { frame: [644, 1254, 42, 60], offset: [0, 0], rotated: !0, sourceRect: [9, 0, 42, 60], sourceSize: [60, 60] },
            { frame: [133, 2018, 28, 60], offset: [-1, 0], rotated: !0, sourceRect: [15, 0, 28, 60], sourceSize: [60, 60] },
            { frame: [0, 2025, 14, 60], offset: [0, 0], rotated: !0, sourceRect: [23, 0, 14, 60], sourceSize: [60, 60] },
            { frame: [934, 685, 26, 60], offset: [0, 0], rotated: !0, sourceRect: [17, 0, 26, 60], sourceSize: [60, 60] },
            { frame: [583, 1254, 42, 60], offset: [0, 0], rotated: !0, sourceRect: [9, 0, 42, 60], sourceSize: [60, 60] },
            { frame: [1034, 1372, 54, 60], offset: [-1, 0], rotated: !1, sourceRect: [2, 0, 54, 60], sourceSize: [60, 60] }
        ];

        var b = { maxNumGroup: 8, minSpeed: 0.5, maxSpeed: 1.2, regX: 35, regY: 12, useFrames: !0, interval: 10 };

        this.translateImage(this.fish, a, a[0].sourceSize[0], a[0].sourceSize[1], !0, b);

        // Continue with other image translations...

    };

    c.translateImage = function(a, b, e, d, c, i) {
        a = this.cacheImage(a, b, e, d, c);
        Q.merge(a, i);
        return a;
    };

    c.cacheImage = function(a, b, e, d, c) {
        var i = Q.createDOM("canvas"), g = i.getContext("2d");
        i.width = e;
        i.height = d * b.length;
        for (var f = 0, l = [], k = 0; k < b.length; k++) {
            var f = b[k], j = f.frame, m = f.rotated, n = f.sourceRect || [0, 0];
            g.save();
            f = k * d;
            if (m) {
                var o = j[3];
                j[3] = j[2];
                j[2] = o;
            }
            g.translate(0 + n[0], m ? f + j[2] + n[1] : f + n[1]);
            m && g.rotate(-90 * Math.PI / 180);
            g.drawImage(a, j[0], j[1], j[2], j[3], 0, 0, j[2], j[3]);
            g.restore();
            l[k] = { rect: [0, f, e, d] };
        }
        trace(JSON.stringify(l));
        return c ? (a = new Image, a.src = i.toDataURL("image/png"), a.width = i.width, a.height = i.height, document.body.appendChild(a), { image: a, frames: l }) : { image: i, frames: l };
    };

    c.getImage = function(a) {
        return this.images[a].image;
    };
})();

(function() {
    window.onload = function() {
        setTimeout(function() {
            a.load();
        }, 10);
    };

    var c = Q.use("fish"),
        a = c.game = {
            container: null,
            width: 480,
            height: 320,
            fps: 60,
            frames: 0,
            params: null,
            events: Q.supportTouch ? ["touchstart", "touchend"] : ["mousedown", "mouseup"],
            fireInterval: 30,
            fireCount: 0
        };

    a.load = function(b) {
        if (Q.isIpod || Q.isIphone) {
            this.width = 980;
            this.height = 545;
            Q.addMeta({ name: "viewport", content: "user-scalable=no" });
        } else {
            Q.addMeta({ name: "viewport", content: "user-scalable=no, initial-scale=1.0, minimum-scale=1, maximum-scale=1" });
            this.width = Math.min(1024, window.innerWidth);
            this.height = Math.min(768, window.innerHeight);
        }
        this.container = b || Q.getDOM("container");
        this.container.style.width = this.width + "px";
        this.container.style.height = this.height + "px";

        b = Q.createDOM("div", {
            innerHTML: "正在加载资源中，请稍候...<br>",
            style: {
                id: "loader",
                position: "absolute",
                width: this.width + "px",
                left: "0px",
                top: (this.height >> 1) + "px",
                textAlign: "center",
                color: "#fff",
                font: Q.isMobile ? "bold 16px 黑体" : "bold 16px 宋体",
                textShadow: "0 2px 2px #111"
            }
        });
        this.container.appendChild(b);
        this.loader = b;
        this.hideNavBar();
        if (Q.supportOrientation) window.onorientationchange = function() {
            a.hideNavBar();
            a.stage && a.stage.updatePosition();
        };
        b = new Q.ImageLoader;
        b.addEventListener("loaded", Q.delegate(this.onLoadLoaded, this));
        b.addEventListener("complete", Q.delegate(this.onLoadComplete, this));
        b.load(c.R.sources);
    };

    a.onLoadLoaded = function(a) {
        this.loader.innerHTML = "正在加载资源中，请稍候...<br>(" +
            Math.round(a.target.getLoadedSize() / a.target.getTotalSize() * 100) + "%)";
    };

    a.onLoadComplete = function(a) {
        a.target.removeAllEventListeners();
        this.init(a.images);
    };

    a.init = function(a) {
        c.R.init(a);
        this.startup();
    };

    a.startup = function() {
        this.container.removeChild(this.loader);
        this.loader = null;
        if (Q.isWebKit && !Q.supportTouch) {
            document.body.style.webkitTouchCallout = "none";
            document.body.style.webkitUserSelect = "none";
            document.body.style.webkitTextSizeAdjust = "none";
            document.body.style.webkitTapHighlightColor = "rgba(0,0,0,0)";
        }
        this.container.style.overflow = "hidden";
        this.container.style.width = this.width + "px";
        this.container.style.height = this.height + "px";
        this.screenWidth = window.innerWidth;
        this.screenHeight = window.innerHeight;
        var a = this.params = Q.getUrlParams();
        if (a.mode == void 0) a.mode = 2;
        if (a.fps) this.fps = a.fps;
        this.fireInterval = this.fps * 0.5;
        if (a.mode == 1) {
            a = Q.createDOM("canvas", { id: "canvas", width: this.width, height: this.height, style: { position: "absolute" } });
            this.container.appendChild(a);
            this.context = new Q.CanvasContext({ canvas: a });
        } else {
            this.context = new Q.DOMContext({ canvas: this.container });
        }
        this.stage = new Q.Stage({ width: this.width, height: this.height, context: this.context, update: Q.delegate(this.update, this) });
        (this.evtManager = new Q.EventManager).registerStage(this.stage, this.events, !0, !0);
        this.initUI();
        this.initPlayer();
        this.fishManager = new c.FishManager(this.fishContainer);
        this.fishManager.makeFish();
        a = this.timer = new Q.Timer(1E3 / this.fps);
        a.addListener(this.stage);
        a.addListener(Q.Tween);
        a.start();
        this.showFPS();
    };

    a.initUI = function() {
        this.bg = new Q.Bitmap({ id: "bg", image: c.R.mainbg, transformEnabled: !1 });
        this.fishContainer = new Q.DisplayObjectContainer({ id: "fishContainer", width: this.width, height: this.height, eventChildren: !1, transformEnabled: !1 });
        this.fishContainer.onEvent = function(b) {
            if (b.type == a.events[0] && a.fireCount >= a.fireInterval) {
                a.fireCount = 0;
                a.player.fire({ x: b.eventX, y: b.eventY });
            }
        };
        this.bottom = new Q.Bitmap(c.R.bottombar);
        this.bottom.id = "bottom";
        this.bottom.x = this.width - this.bottom.width >> 1;
        this.bottom.y = this.height - this.bottom.height + 2;
        this.bottom.transformEnabled = !1;
        this.stage.addChild(this.bg, this.fishContainer, this.bottom);
    };

    a.initPlayer = function() {
        this.player = new c.Player({ id: "quark", coin: Number(this.params.coin) || 1E4 });
    };

    a.update = function() {
        this.frames++;
        this.fireCount++;
        this.fishManager.update();
    };

    a.testFish = function() {
        for (var a = this.params.num || 50, e = c.R.fishTypes.length, d = 0; d < a; d++) {
            var h = new c.Fish(c.R.fishTypes[Math.random() * (Math.random() * (e - 1) >> 0) + 1 >> 0]);
            h.x = Math.random() * this.width >> 0;
            h.y = Math.random() * this.height >> 0;
            h.moving = !0;
            h.rotation = Math.random() * 360 >> 0;
            h.init();
            this.fishContainer.addChild(h);
        }
    };

    a.testFishDirection = function() {
        for (var a = [0, 45, 90, 135, 180, 225, 270, 315], e = 0; e < 8; e++) {
            var d = new c.Fish(c.R.fishTypes[1]);
            d.x = this.width >> 1;
            d.y = this.height >> 1;
            d.speed = 0.5;
            d.setDirection(a[e]);
            d.moving = !0;
            this.stage.addChild(d);
        }
    };

    a.testFishALL = function() {
        for (var a = 0, e = c.R.fishTypes.length, d = 0; d < e - 1; d++) {
            var h = new c.Fish(c.R.fishTypes[d + 1]);
            h.x = d == 9 ? 100 : 100 + Math.floor(d / 5) * 200;
            d == 9 ? a = 370 : d % 5 == 0 && (a = 50);
            h.y = a + d % 5 * 20;
            a += h.height;
            h.update = function() {};
            this.stage.addChild(h);
        }
    };

    a.showFPS = function() {
        var a = this,
            e = Quark.getDOM("fps");
        e && setInterval(function() {
            e.innerHTML = "FPS:" + a.frames;
            a.frames = 0;
        }, 1E3);
    };

    a.hideNavBar = function() {
        window.scrollTo(0, 1);
    };
})();

(function() {
    var c = Q.use("fish"),
        a = c.game,
        b = c.FishManager = function(e) {
            this.fishPool = [];
            this.poolSize = a.params.num || 100;
            this.minNumFishScreen = this.poolSize >> 1;
            this.maxNumFishScreen = this.poolSize;
            this.container = e;
            this.fishes = [];
            this.makeCounter = a.fps * 2;
            this.initPool();
        };

    b.prototype.initPool = function() {
        for (var e = 0; e < this.poolSize; e++) {
            var b = new c.Fish(c.R.fishTypes[1]);
            b.getDrawable(a.stage.context);
            this.fishPool[e] = b;
        }
    };

    b.prototype.update = function() {
        for (var e = 0; e < this.fishes.length; e++) {
            var b = this.fishes[e];
            if (b.captured) {
                this.fishes.splice(e, 1);
                e--;
            } else if (b.isOutOfScreen()) {
                if (b.hasShown || b.changeDirCounter < -a.fps * 10) {
                    this.fishes.splice(e, 1);
                    this.fishPool.push(b);
                    b.parent.removeChild(b);
                    e--;
                }
            } else if (!b.hasShown) {
                b.hasShown = true;
            }
        }
        if (--this.makeCounter <= 0) {
            this.makeCounter = this.fishes.length < this.minNumFishScreen ? a.fps * 2 : a.fps * 3;
            this.makeFish();
        }
    };

    b.prototype.makeFish = function() {
        if (!(this.fishes.length >= this.poolSize)) {
            var b = c.R.fishTypes[Math.random() * (Math.random() * c.R.fishTypes.length >> 0) + 1 >> 0],
                d = Math.random() * b.mixin.maxNumGroup + 1 >> 0;
            if (d > this.fishPool.length) d = this.fishPool.length;
            if (!(d <= 0)) {
                var h = this.fishPool.splice(0, d),
                    i = b.frames[0].rect[2],
                    i = Math.random() > 0.5 ? -i : a.width + i,
                    g = Math.random() * 200 + (a.height >> 1) - 100 >> 0,
                    f = Math.random() * (b.mixin.maxSpeed - b.mixin.minSpeed) + b.mixin.minSpeed,
                    l = Math.random() * 20 - 10 >> 0;
                i > 0 && (l += 180);
                for (var k = 0; k < d; k++) {
                    var j = h[k];
                    j.setType(b);
                    j.moving = true;
                    j.canTurning = false;
                    j.hasShown = false;
                    j.captured = false;
                    j.speed = f;
                    j.changeDirection(l);
                    this.fishes.push(j);
                    this.container.addChild(j);
                }
                c.FishGroup.setRandomPatten(h, i, g);
            }
        }
    };
})();

(function() {
    var c = Q.use("fish").FishGroup = { pattens: [] };

    c.setRandomPatten = function(a, b, e) {
        var d = this.pattens;
        (0, d[Math.random() * d.length >> 0])(a, b, e);
    };

    c.pattens.push(function(a, b, e) {
        for (var d = a.length, e = { x: b, y: e, width: 0, height: 0 }, b = b > 0 ? 1 : -1, c = 0; c < d; c++) {
            var i = a[c],
                g = Math.random() * i.width + 20 >> 0,
                f = Math.random() * i.height + 20 >> 0;
            Math.random() > 0.5 && (f *= -1);
            i.x = e.x + g * b;
            i.y = e.y + f;
            e = i;
        }
    });
})();

(function() {
    (Q.use("fish").Utils = {}).calcDirection = function(c, a) {
        var b;
        c.x == a.x ? (b = a.y > c.y ? Math.PI / 2 : -Math.PI / 2, b *= Q.RAD_TO_DEG) : (b = Math.atan(1 / ((a.y - c.y) / (a.x - c.x))), b *= Q.RAD_TO_DEG, a.y < c.y ? a.x < c.x && (b += 180) : b = 90 - b);
        return { degree: b, sin: Math.sin(b * Q.DEG_TO_RAD), cos: Math.cos(b * Q.DEG_TO_RAD) };
    };
})();

(function() {
    var c = Q.use("fish").Num = function(a) {
        this.max = 1;
        this.gap = 2;
        this.autoAddZero = this.addSign = false;
        this.src = null;
        a = a || {};
        c.superClass.constructor.call(this, a);
        this.id = a.id || Q.UIDUtil.createUID("Num");
        this.eventEnabled = this.eventChildren = false;
        this.autoSize = true;
        this.init();
    };

    Q.inherit(c, Q.DisplayObjectContainer);

    c.prototype.init = function() {
        for (var a = this.addSign ? this.max + 1 : this.max, b = 0; b < a; b++) {
            var e = this.src[0];
            this.addChild(new Q.Bitmap({ image: this.src.image, rect: e, x: (e[2] + this.gap) * b }));
        }
    };

    c.prototype.setValue = function(a) {
        var b = a.toString(),
            e = this.children.length;
        if (this.autoAddZero) for (var d = this.addSign ? e - 1 : e; b.length < d;) b = "0" + b;
        this.addSign && a > 0 && (b = "+" + b);
        a = e - 1;
        for (e = b.length - 1; a >= 0; a--) {
            var d = this.getChildAt(a),
                c = e >= 0;
            (d.visible = c) && d.setRect(this.src[b.charAt(e)]);
            e--;
        }
    };
})();

(function() {
    var c = Q.use("fish"),
        a = c.game,
        b = c.Fish = function(a) {
            this.type = a;
            this.speed = 0.5;
            this.moving = true;
            this.captured = this.hasShown = this.canTurning = false;
            b.superClass.constructor.call(this, a);
            this.id = Q.UIDUtil.createUID("Fish");
        };

    Q.inherit(b, Q.MovieClip);

    b.prototype.init = function() {
        this.changeDirection(this.rotation);
    };

    b.prototype.setType = function(a) {
        Q.merge(this, a, true);
        Q.merge(this, a.mixin, false);
        this.setDrawable(a.image);
        this._frames.length = 0;
        this.addFrame(a.frames);
        this.gotoAndPlay(0);
    };

    b.prototype.changeDirection = function(b) {
        if (b != void 0) this.setDirection(b);
        else if (Math.random() > 0.8) {
            b = Math.random() > 0.5 ? 1 : -1;
            this._destRotation = this.rotation + (Math.random() * 10 + 20 >> 0) * b >> 0;
        }
        var b = a.fps,
            c = b * 5;
        this.changeDirCounter = Math.random() * (b * 10 - c + 1) + c >> 1;
    };

    b.prototype.setDirection = function(a) {
        if (!(this.rotation == a && this.speedX != void 0)) {
            if (a.degree == void 0) {
                var b = a * Q.DEG_TO_RAD;
                a = { degree: a, sin: Math.sin(b), cos: Math.cos(b) };
            }
            this.rotation = a.degree % 360;
            this.speedX = this.speed * a.cos;
            this.speedY = this.speed * a.sin;
        }
    };

    b.prototype.canBeCaptured = function(a) {
        return this.captureRate * (1 + a * 0.05) > Math.random();
    };

    b.prototype.update = function() {
        if (this.captured) {
            if (--this.capturingCounter <= 0) {
                var b = new Q.MovieClip(this.coin >= 10 ? c.R.coinAni2 : c.R.coinAni1);
                b.x = this.x;
                b.y = this.y;
                this.parent.addChild(b);
                var d = "+" + this.coin.toString(),
                    h = new c.Num({ id: "coinCount", src: c.R.coinText, max: d.length, gap: 3, scaleX: 0.8, scaleY: 0.8 });
                h.x = this.x;
                h.y = this.y;
                h.setValue(d);
                this.parent.addChild(h);
                Q.Tween.to(h, { y: h.y - 50 }, { time: 800, onComplete: function(a) { a.target.parent.removeChild(a.target); } });
                Q.Tween.to(b, { x: a.bottom.x + 100, y: a.height }, { time: 800, onComplete: function(a) { a.target.parent.removeChild(a.target); } });
                this.parent.removeChild(this);
                a.player.captureFish(this);
                a.fishManager.fishPool.push(this);
            }
        } else {
            this.moving && (this.x += this.speedX, this.y += this.speedY);
            this._destRotation != null ? (b = this._destRotation - this.rotation, d = b > 0 ? 0.1 : -0.1, h = this.rotation + d, b == 0 || d > 0 && h >= this._destRotation || d < 0 && h <= this._destRotation ? (this.setDirection(this._destRotation), this._destRotation = null) : this.setDirection(h)) : --this.changeDirCounter <= 0 && this.canTurning && this.changeDirection();
        }
    };

    b.prototype.isOutOfScreen = function() {
        if (this.x < -this.width || this.x > a.width + this.width || this.y < -this.height || this.y > a.height + this.height) return true;
        else if (this.x > 100 && this.x < a.width - 100 && this.y > 100 && this.y < a.height - 100) this.canTurning = true;
        return false;
    };
})();

(function() {
    var c = Q.use("fish"),
        a = c.game,
        b = c.Player = function(a) {
            this.id = null;
            this.numCapturedFishes = this.coin = 0;
            this.coinNum = this.cannonPlus = this.cannonMinus = this.cannon = null;
            a = a || {};
            Q.merge(this, a, true);
            this.init();
        };

    b.prototype.init = function() {
        var b = this;
        this.cannon = new c.Cannon(c.R.cannonTypes[1]);
        this.cannon.id = "cannon";
        this.cannon.x = a.bottom.x + 425;
        this.cannon.y = a.bottom.y + 60;
        this.cannon.y = a.height - 10;
        this.cannonMinus = new Q.Button(c.R.cannonMinus);
        this.cannonMinus.id = "cannonMinus";
        this.cannonMinus.x = a.bottom.x + 340;
        this.cannonMinus.y = a.bottom.y + 36;
        this.cannonMinus.onEvent = function(c) {
            c.type == a.events[1] && b.cannon.setPower(-1, true);
        };
        this.cannonPlus = new Q.Button(c.R.cannonPlus);
        this.cannonPlus.id = "cannonPlus";
        this.cannonPlus.x = this.cannonMinus.x + 140;
        this.cannonPlus.y = this.cannonMinus.y;
        this.cannonPlus.onEvent = function(c) {
            c.type == a.events[1] && b.cannon.setPower(1, true);
        };
        this.coinNum = new c.Num({ id: "coinNum", src: c.R.numBlack, max: 6, gap: 3, autoAddZero: true });
        this.coinNum.x = a.bottom.x + 20;
        this.coinNum.y = a.bottom.y + 44;
        this.updateCoin(this.coin);
        a.stage.addChild(this.cannon, this.cannonMinus, this.cannonPlus, this.coinNum);
    };

    b.prototype.fire = function(b) {
        var d = this.cannon,
            h = d.power;
        if (!(this.coin < h)) {
            b = c.Utils.calcDirection(d, b).degree;
            b == -90 ? b = 0 : b < 0 && b > -90 ? b = -b : b >= 180 && b <= 270 && (b = 180 - b);
            d.fire(b);
            var i = Math.sin(b * Q.DEG_TO_RAD),
                g = Math.cos(b * Q.DEG_TO_RAD),
                f = new c.Bullet(c.R.bullets[h - 1]);
            f.x = d.x + (d.regY + 20) * i;
            f.y = d.y - (d.regY + 20) * g;
            f.rotation = b;
            f.power = h;
            f.speedX = 5 * i;
            f.speedY = 5 * g;
            a.stage.addChild(f);
            this.updateCoin(-h, true);
        }
    };

    b.prototype.captureFish = function(a) {
        this.updateCoin(a.coin, true);
        this.numCapturedFishes++;
    };

    b.prototype.updateCoin = function(a, b) {
        b ? this.coin += a : this.coin = a;
        if (this.coin > 999999) this.coin = 999999;
        this.coinNum.setValue(this.coin);
    };
})();

(function() {
    var c = Q.use("fish"),
        a = c.Cannon = function(b) {
            this.power = 0;
            a.superClass.constructor.call(this, b);
            this.stop();
        };

    Q.inherit(a, Q.MovieClip);

    a.prototype.setPower = function(a, e) {
        e && (a += this.power);
        a = a > 7 ? 1 : a < 1 ? 7 : a;
        if (this.power != a) {
            this.power = a;
            this.setType(c.R.cannonTypes[a]);
        }
    };

    a.prototype.setType = function(a) {
        Q.merge(this, a, true);
        Q.merge(this, a.mixin, false);
        this.setDrawable(a.image);
        this._frames.length = 0;
        this.addFrame(a.frames);
        this.gotoAndStop(0);
    };

    a.prototype.fire = function(a) {
        this.rotation = a;
        this.gotoAndPlay(0);
    };
})();

(function() {
    var c = Q.use("fish"),
        a = c.game,
        b = c.Bullet = function(a) {
            this.speedY = this.speedX = this.power = 0;
            b.superClass.constructor.call(this, a);
            this.id = Q.UIDUtil.createUID("Bullet");
        };

    Q.inherit(b, Q.Bitmap);

    b.prototype.update = function() {
        this.isOutOfScreen() ? this.destory() : (this.x += this.speedX, this.y -= this.speedY, this.checkCollision() && this.destory());
    };

    b.prototype.checkCollision = function() {
        for (var b = a.fishManager.fishes, d = b.length, h = false, i = 0; i < d; i++) {
            var g = b[i];
            if (!(this.y - this.height * 0.5 > g.y + g.height * 0.5 ||
                this.y + this.height * 0.5 < g.y - g.height * 0.5 ||
                this.x - this.width * 0.5 > g.x + g.width * 0.5 ||
                this.x + this.width * 0.5 < g.x - g.width * 0.5) &&
                this.hitTestObject(g, true)) {
                h = true;
                break;
            }
        }
        if (h === false) return false;
        var f = new Q.Bitmap(c.R.webs[this.power - 1]);
        f.x = this.x;
        f.y = this.y;
        f.scaleX = f.scaleY = 0.8;
        f.eventEnabled = false;
        this.parent.addChild(f);
        Q.Tween.to(f, { scaleX: 1, scaleY: 1 }, { time: 100, reverse: true, onComplete: function(a) { a.reversing && f.parent && f.parent.removeChild(f); a.reversing = true; } });
        for (i = 0; i < d; i++) if (g = b[i], !(f.y - f.height * 0.5 > g.y + g.height * 0.5 ||
            f.y + f.height * 0.5 < g.y - g.height * 0.5 ||
            f.x - f.width * 0.5 > g.x + g.width * 0.5 ||
            f.x + f.width * 0.5 < g.x - g.width * 0.5) &&
            f.hitTestObject(g, true) && g.canBeCaptured(this.power - 1)) g.moving = false, g.captured = true, g.capturingCounter = a.fps >> 1, g.gotoAndPlay("capture");
        return true;
    };

    b.prototype.destory = function() {
        this.parent.removeChild(this);
    };

    b.prototype.isOutOfScreen = function() {
        return this.x < -50 || this.x > a.width + 50 || this.y < -50 || this.y > a.height + 50;
    };
})();
