(function () {
    'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
                t[p[i]] = s[p[i]];
        return t;
    }

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __exportStar(m, exports) {
        for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
    }

    function __values(o) {
        var m = typeof Symbol === "function" && o[Symbol.iterator], i = 0;
        if (m) return m.call(o);
        return {
            next: function () {
                if (o && i >= o.length) o = void 0;
                return { value: o && o[i++], done: !o };
            }
        };
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    function __await(v) {
        return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var g = generator.apply(thisArg, _arguments || []), i, q = [];
        return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
        function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
        function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
        function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
        function fulfill(value) { resume("next", value); }
        function reject(value) { resume("throw", value); }
        function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
    }

    function __asyncDelegator(o) {
        var i, p;
        return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
        function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
    }

    function __asyncValues(o) {
        if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
        var m = o[Symbol.asyncIterator], i;
        return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
        function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
        function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
    }

    function __makeTemplateObject(cooked, raw) {
        if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
        return cooked;
    };

    function __importStar(mod) {
        if (mod && mod.__esModule) return mod;
        var result = {};
        if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
        result.default = mod;
        return result;
    }

    function __importDefault(mod) {
        return (mod && mod.__esModule) ? mod : { default: mod };
    }

    class MathUtils {
        static isBetween($t, $v1, $v2, $includeEqual = false) {
            if ($includeEqual) {
                return $t >= Math.min($v1, $v2) && $t <= Math.max($v1, $v2);
            }
            else {
                return $t > Math.min($v1, $v2) && $t < Math.max($v1, $v2);
            }
        }
        static minMax($v1, $v2) {
            return { min: Math.min($v1, $v2), max: Math.max($v1, $v2) };
        }
        static calValueBetween($t, $min, $max) {
            const { min, max } = this.minMax($min, $max);
            return Math.max(Math.min(max, $t), min);
        }
        static randomBetween($min, $max) {
            const { min, max } = this.minMax($min, $max);
            return min + Math.random() * (max - min);
        }
        static calLen($x, $y) {
            return Math.sqrt($x * $x + $y * $y);
        }
        static easeTo($cur, $to, $easeFactor) {
            return $cur + ($to - $cur) * $easeFactor;
        }
        static isEqual($a, $b, $threshold = 0.000000001) {
            return Math.abs($a - $b) < $threshold;
        }
        static fixRotationDegree($degree) {
            if ($degree < 0) {
                $degree += 360 * (Math.abs(Math.ceil($degree / 360)) + 1);
            }
            return $degree % 360;
        }
        static calRotation($myX, $myY, $targetX, $targetY) {
            const deltaX = $targetX - $myX;
            const deltaY = $targetY - $myY;
            return this.calRotationByDelta(deltaX, deltaY);
        }
        static isInBox($testX, $testY, $testZ, $boxX, $boxY, $boxZ, $boxLongZ, $boxWidthX, $boxHeightY) {
            return this.isBetween($testY, $boxY, $boxY + $boxHeightY) &&
                this.isBetween($testX, $boxX - $boxWidthX * .5, $boxX + $boxWidthX * .5) &&
                this.isBetween($testZ, $boxZ - $boxLongZ * .5, $boxZ + $boxLongZ * .5);
        }
        static calRotationByDelta($deltaX, $deltaY) {
            let result = 0;
            if (!$deltaX) {
                result = ($deltaY > 0 ? 1 : -1) * 90;
            }
            else {
                result = Math.atan($deltaY / $deltaX) * 180 / Math.PI;
                if ($deltaX < 0) {
                    result = result - 180;
                }
            }
            return this.fixRotationDegree(result);
        }
    }
    MathUtils.DEGREE_2_RADIAN_FACTOR = Math.PI / 180;

    class LayaUtils {
        static fixWxOpenDataViewer($wx) {
            const sharedCanvas = window.sharedCanvas;
            if (!sharedCanvas)
                return;
            $wx.on(Laya.Event.DISPLAY, undefined, () => {
                sharedCanvas.width = $wx.width;
                sharedCanvas.height = $wx.height;
            });
        }
        static addClickListener($btn, $handler, $caller) {
            $btn.on(Laya.Event.CLICK, $caller, $handler);
        }
        static addBtnsClickHandler($btns, $handler, $caller) {
            $btns.forEach(($btn) => {
                $btn && $btn.on(Laya.Event.CLICK, $caller, $handler);
            });
        }
        static removeBtnsClickHandler($btns, $handler, $caller) {
            $btns.forEach(($btn) => {
                $btn && $btn.off(Laya.Event.CLICK, $caller, $handler);
            });
        }
        static asyncLoadTexture2D($url, $isCrossDomain = false) {
            return new Promise(($resolved, $reject) => __awaiter(this, void 0, void 0, function* () {
                if ($isCrossDomain) {
                    const onError = () => {
                        console.log("加载失败", $url);
                        Laya.loader.off(Laya.Event.ERROR, undefined, onError);
                        $reject();
                    };
                    Laya.loader.on(Laya.Event.ERROR, undefined, onError);
                    Laya.loader.load($url, Laya.Handler.create(undefined, ($result) => {
                        Laya.loader.off(Laya.Event.ERROR, undefined, onError);
                        $resolved($result);
                    }), undefined, Laya.Loader.TEXTURE2D);
                }
                else {
                    Laya.Texture2D.load($url, Laya.Handler.create(undefined, $resolved));
                }
            }));
        }
        static asyncLoadMaterial($url) {
            return new Promise(($resolved) => {
                Laya.BaseMaterial.load($url, Laya.Handler.create(undefined, $resolved));
            });
        }
        static asyncCreateRes($urls, $progress) {
            return new Promise(($resolved) => {
                Laya.loader.create($urls, Laya.Handler.create(undefined, $resolved), $progress ? Laya.Handler.create(undefined, $progress, undefined, true) : undefined);
            });
        }
        static asyncLoad2DRes($urls, $progress) {
            return new Promise(($resolved) => {
                Laya.loader.load($urls, Laya.Handler.create(undefined, $resolved), $progress ? Laya.Handler.create(undefined, $progress, undefined, false) : undefined);
            });
        }
        static asyncLoadScene3D($url4LS) {
            return new Promise(($resolved) => __awaiter(this, void 0, void 0, function* () {
                yield this.asyncCreateRes($url4LS);
                $resolved(Laya.Loader.getRes($url4LS));
            }));
        }
        static asyncLoadSprite3D($url4LH) {
            return new Promise(($resolved) => __awaiter(this, void 0, void 0, function* () {
                yield this.asyncCreateRes($url4LH);
                const result = Laya.Sprite3D.instantiate(Laya.Loader.getRes($url4LH));
                result.transform.localPosition = new Laya.Vector3(0, 0, 0);
                $resolved(result);
            }));
        }
        static asyncLoadParticle($url4LH) {
            return new Promise(($resolved) => __awaiter(this, void 0, void 0, function* () {
                yield this.asyncCreateRes($url4LH);
                const result = Laya.ShuriKenParticle3D.instantiate(Laya.Loader.getRes($url4LH));
                result.transform.localPosition = new Laya.Vector3(0, 0, 0);
                $resolved(result);
            }));
        }
        static asyncOpenScene($url, $isCloseOther = true) {
            return new Promise(($resolved) => __awaiter(this, void 0, void 0, function* () {
                yield this.asyncCreateRes($url);
                Laya.Scene.open($url, $isCloseOther, undefined, Laya.Handler.create(undefined, $resolved));
            }));
        }
        static asyncLoadScene($url, $progress, $progressCaller) {
            return new Promise(($resolved) => {
                const onComplete = ($node) => {
                    if ($progress) {
                        $progress.call($progressCaller, 1);
                    }
                    $resolved($node);
                };
                Laya.Scene.load($url, Laya.Handler.create(null, onComplete), $progress ? Laya.Handler.create($progressCaller, $progress, undefined, false) : undefined);
            });
        }
        static asyncLoadView(sceneUrl) {
            return __awaiter(this, void 0, void 0, function* () {
                if (typeof (sceneUrl) != "string") {
                    console.error("sceneUrl必须是url地址");
                    return;
                }
                let view = Laya.loader.getRes(sceneUrl);
                if (!view || view && view['type'] && view['loadList']) {
                    view = yield new Promise((resolve, reject) => {
                        Laya.View.load(sceneUrl, Laya.Handler.create(undefined, resolve));
                    });
                }
                return view;
            });
        }
        static asyncLoadJson($url) {
            return new Promise(($resolved) => __awaiter(this, void 0, void 0, function* () {
                yield this.asyncCreateRes($url);
                let result = Laya.Loader.getRes($url);
                if (!Array.isArray(result)) {
                    if (result) {
                        result = [result];
                    }
                    else {
                        result = [];
                    }
                }
                $resolved(result);
            }));
        }
        static getUrlParamsObj() {
            const result = {};
            if (!Laya.Browser.window.conch) {
                const url = Laya.Browser.window.location && Laya.Browser.window.location.href || "";
                const paramstrs = (url.split("?")[1] || "").split("&");
                paramstrs.forEach($p => {
                    if ($p && $p.indexOf("=") !== -1) {
                        const prop = $p.split("=");
                        result[prop[0]] = prop[1];
                    }
                });
            }
            return result;
        }
        static asyncLoadRes($url) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise(($resolved) => __awaiter(this, void 0, void 0, function* () {
                    yield this.asyncCreateRes($url);
                    $resolved(Laya.loader.getRes($url));
                }));
            });
        }
        static browerAlert($content) {
            if (!Laya.Browser.window.conch) {
                Laya.Browser.window.alert($content);
            }
        }
        static rgb2V3($rgb) {
            $rgb = $rgb.replace(/^#/, "");
            const result = new Laya.Vector3();
            if ($rgb.length === 6) {
                result.x = parseInt($rgb.substr(0, 2), 16) / 256;
                result.y = parseInt($rgb.substr(0, 2), 16) / 256;
                result.z = parseInt($rgb.substr(0, 2), 16) / 256;
            }
            return result;
        }
        static try2SetTexture($target, $textureUrl, $scale2Fix = "none", $isCrossDomain = false) {
            return __awaiter(this, void 0, void 0, function* () {
                let texture;
                let material;
                if ($target instanceof Laya.MeshSprite3D) {
                    material = $target.meshRenderer.material;
                }
                else if ($target instanceof Laya.SkinnedMeshSprite3D) {
                    material = $target.skinnedMeshRenderer.material;
                }
                if (material instanceof Laya.UnlitMaterial) {
                    texture = yield this.asyncLoadTexture2D($textureUrl, $isCrossDomain);
                    material.albedoTexture = texture;
                }
                if ($scale2Fix === "x") {
                    $target.transform.localScaleZ = $target.transform.localScaleX * texture.height / texture.width;
                }
                else if ($scale2Fix === "z") {
                    $target.transform.localScaleX = $target.transform.localScaleZ * texture.width / texture.height;
                }
                return texture;
            });
        }
        static getMeshSprite3DChildDeep($parent) {
            const childrenNum = $parent.numChildren;
            for (let i = 0; i < childrenNum; i++) {
                const child = $parent.getChildAt(i);
                if (child instanceof Laya.MeshSprite3D || child instanceof Laya.SkinnedMeshSprite3D) {
                    return child;
                }
                else {
                    const temp = this.getMeshSprite3DChildDeep(child);
                    if (temp) {
                        return temp;
                    }
                }
            }
            return undefined;
        }
        static getChildByNameDeep($parent, $name) {
            let child = $parent.getChildByName($name);
            if (child)
                return child;
            const childrenNum = $parent.numChildren;
            for (let i = 0; i < childrenNum; i++) {
                child = $parent.getChildAt(i);
                const temp = this.getChildByNameDeep(child, $name);
                if (temp) {
                    return temp;
                }
            }
            return undefined;
        }
        static playOrStopParticle($particle, $isPlayOrStop) {
            if ($particle instanceof Laya.ShuriKenParticle3D) {
                if (!$particle.active) {
                    console.log("粒子没有active？");
                    $particle.active = true;
                }
                const pSystem = $particle.particleSystem;
                if (pSystem.isEmitting === $isPlayOrStop)
                    return;
                if ($isPlayOrStop) {
                    pSystem.play();
                }
                else {
                    pSystem.stop();
                }
            }
        }
        static playParticleEffectOnce($url, $parent, $durationMS2Destroy, $position = new Laya.Vector3()) {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise(($resolved) => __awaiter(this, void 0, void 0, function* () {
                    const effect = yield LayaUtils.asyncLoadSprite3D($url);
                    effect.transform.position = $position;
                    $parent.addChild(effect);
                    effect.timerOnce($durationMS2Destroy, undefined, () => {
                        effect.destroy(true);
                        $resolved();
                    });
                }));
            });
        }
        static getFrameDelta($lowestFrameRate = 40) {
            return Math.min(Laya.timer.delta, 1000 / $lowestFrameRate);
        }
        static getVFrameDelta($v, $lowestFrameRate = 40) {
            return $v * this.getFrameDelta($lowestFrameRate) / 1000;
        }
        static calFrameValue($secondValue) {
            return $secondValue * this.getFrameDelta() / 1000;
        }
        static updateSelfProps($t, $p, $createLayaHandler = true) {
            const ps = (Array.isArray($p)) ? $p : [$p];
            const update = () => ps.forEach($e => $t[$e] = $t[$e]);
            if (!$createLayaHandler) {
                update();
            }
            else {
                return Laya.Handler.create(undefined, update, undefined, false);
            }
        }
        static createUlitPlane($long, $width, $textureUrl, $alpha = 1, $isCrossDomain = false) {
            return __awaiter(this, void 0, void 0, function* () {
                const sp = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane($long, $width));
                const mat = new Laya.UnlitMaterial();
                mat.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT;
                mat.cull = Laya.RenderState.CULL_NONE;
                sp.meshRenderer.sharedMaterial = mat;
                if (!MathUtils.isEqual($alpha, 1)) {
                    mat.albedoColor = new Laya.Vector4(1, 1, 1, $alpha);
                }
                mat.albedoTexture = yield this.try2SetTexture(sp, $textureUrl, "z", $isCrossDomain);
                return sp;
            });
        }
        static asyncRequest($url, $data, $method = "post") {
            return __awaiter(this, void 0, void 0, function* () {
                return new Promise(($resolved, $rejected) => {
                    const req = new Laya.HttpRequest();
                    req.once(Laya.Event.COMPLETE, undefined, $resolved);
                    req.once(Laya.Event.ERROR, undefined, $rejected);
                    req.send($url, $data, $method, "json", ["Content-Type", "application/json;charset=UTF-8"]);
                });
            });
        }
        static setVisibleAndAlpha($sp, $isShowing) {
            $sp.visible = $isShowing;
            $sp.alpha = $isShowing ? 1 : 0;
        }
        static prewarmParticle($url) {
        }
    }

    class ViewMgr {
        constructor() {
            this.loadScene = [];
            this.viewMaps = new Map();
            this.popMaps = new Map();
            this.runtimeMaps = new Map();
            this.openViews = new Array();
            this.onOpenViewArr = new Array();
        }
        static get instance() {
            if (!this._instance) {
                this._instance = new ViewMgr();
            }
            return this._instance;
        }
        Init() {
            this.viewRoot = new Laya.Sprite();
            this.viewRoot.name = "viewRoot";
            this.viewRoot.zOrder = 99;
            Laya.stage.addChild(this.viewRoot);
            console.log("this.viewRoot", this.viewRoot);
            this.onResize();
            Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
            this.viewRoot.addChildren(this.view, this.dialog);
        }
        addChild(node) {
            this.viewRoot.addChild(node);
        }
        onResize() {
            this.viewRoot.height = Laya.stage.height;
            this.viewRoot.width = Laya.stage.width;
        }
        asyncOpen(url, param) {
            return __awaiter(this, void 0, void 0, function* () {
                let viewUrl = this.viewMaps.get(url);
                let popUrl = this.popMaps.get(url);
                if (!viewUrl || !popUrl) {
                    this.onOpenViewArr.push({ url: url, param: param });
                    return new Promise((res, rej) => {
                        this.onLoadScene((viewData) => {
                            this.popMaps.set(url, viewData);
                            res(viewData);
                        }, this.onOpenViewArr[0]);
                    });
                }
                else {
                    if (viewUrl) {
                        this.view.addChild(viewUrl);
                    }
                    else if (popUrl) {
                        this.view.addChild(popUrl);
                    }
                }
            });
        }
        onLoadScene(Promise, viewdata) {
            return __awaiter(this, void 0, void 0, function* () {
                let viewData = yield LayaUtils.asyncLoadView(viewdata.url);
                if (viewData instanceof AbstractRuntimeView) {
                    (this.view ? this.view : this.viewRoot).addChild(viewData);
                }
                else if (viewData['sceneType'] == "dialog" && viewData) {
                    this.dialog.addChild(viewData);
                }
                else if (viewData) {
                    this.viewRoot.addChild(viewData);
                }
                else {
                    console.error("加载" + viewdata.url + "错误", viewData);
                }
                this.onOpenViewArr.splice(0, 1);
                Promise.call(window, viewData);
                console.log("this.onOpenViewArr", this.onOpenViewArr, viewData);
            });
        }
        close(url) {
            let runtime = this.onGetRuntime(url);
            if (runtime['sceneType'] == "dialog") {
                runtime && runtime.removeSelf();
            }
        }
        onDestroy(url, isForce = false) {
            let view = this.viewMaps.get(url);
            if (view) {
                if (view instanceof Laya.View) {
                    view.destroy(true);
                    this.viewMaps.delete(url);
                }
                else if (view instanceof Laya.Dialog) {
                    view.close();
                    this.popMaps.delete(url);
                }
                else if (isForce && view) {
                    view.destroy(true);
                    this.viewMaps.delete(url);
                    console.log("view", view, url);
                }
                else {
                    console.warn("警告：" + url + " 销毁失败");
                }
            }
        }
        onSetRuntime(url, runtime) {
            let isUrl = this.runtimeMaps.get(url);
            if (!isUrl) {
                this.runtimeMaps.set(url, runtime);
            }
        }
        onGetRuntime(url) {
            return this.runtimeMaps.get(url);
        }
        asyncGetRunTime(url) {
            return __awaiter(this, void 0, void 0, function* () {
                return yield new Promise((res, rej) => {
                    let i = 0;
                    Laya.timer.loop(1, this, () => {
                        if (this.runtimeMaps.get(url)) {
                            res(this.runtimeMaps.get(url));
                            Laya.timer.clearAll(this);
                        }
                        if (i++ >= 300) {
                            Laya.timer.clearAll(this);
                            res(null);
                        }
                    });
                });
            });
        }
    }
    const UIMgr = ViewMgr.instance;

    class AbstractRuntimeView extends Laya.View {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
            this.url && UIMgr.onSetRuntime(this.url, this);
            this.onOnce(this.param);
            Laya.stage.on(Laya.Event.RESIZE, this, this.onResize);
        }
        onResize() {
            this.height = Laya.stage.height;
            this.width = Laya.stage.width;
        }
        onOnce(param) { }
    }

    var JXEvent;
    (function (JXEvent) {
        JXEvent["S2G_INIT_GAME_READY"] = "S2G_INIT_GAME_READY";
        JXEvent["G2S_INIT_GAME_READY_SUCCESS"] = "G2S_INIT_GAME_READY_SUCCESS";
        JXEvent["S2G_BEGIN_GAME"] = "S2G_BEGIN_GAME";
        JXEvent["G2S_GAME_FAIL"] = "G2S_GAME_FAIL";
        JXEvent["G2S_GAME_PASS"] = "G2S_GAME_PASS";
        JXEvent["S2G_REBORN_GAME_READY"] = "S2G_REBORN_GAME_READY";
        JXEvent["G2S_REBORN_GAME_READY_SUCCESS"] = "G2S_REBORN_GAME_READY_SUCCESS";
        JXEvent["S2G_RESET_GAME_READY"] = "S2G_RESET_GAME_READY";
        JXEvent["G2S_RESET_GAME_READY_SUCCESS"] = "G2S_RESET_GAME_READY_SUCCESS";
        JXEvent["S2G_USE_SKIN"] = "S2G_USE_SKIN";
        JXEvent["G2S_UPDATE_CUR_SCORE"] = "G2S_UPDATE_CUR_SCORE";
        JXEvent["S2G_PLAYER_SEARCHED"] = "S2G_PLAYER_SEARCHED";
        JXEvent["S2G_ON_CRAZY_CLICK"] = "S2G_ON_CRAZY_CLICK";
        JXEvent["S2G_STACK_VIEW_BEFORE_EACH"] = "S2G_STACK_VIEW_BEFORE_EACH";
        JXEvent["G2S_STACK_VIEW_BEFORE_EACH_SUCCESS"] = "G2S_STACK_VIEW_BEFORE_EACH_SUCCESS";
    })(JXEvent || (JXEvent = {}));

    class BaseEventDispatcher {
        constructor() {
            this._dispatcher = new Laya.EventDispatcher();
        }
        once($event, $caller, $handler) {
            if (!this._dispatcher)
                return;
            this._dispatcher.once($event.toString(), $caller, $handler);
        }
        on($event, $caller, $handler, $needCallFist = false) {
            if (!this._dispatcher)
                return;
            this._dispatcher.on($event.toString(), $caller, $handler);
            if ($needCallFist) {
                const thiz = this;
                $handler.call($caller, { event: $event.toString(), value: thiz[$event] });
            }
        }
        off($event, $handler, $caller, $type = "all") {
            if (!this._dispatcher)
                return;
            this._dispatcher.off($event.toString(), $caller, $handler, $type === "once");
        }
        offAllCaller($caller) {
            if (!this._dispatcher)
                return;
            this._dispatcher.offAllCaller($caller);
        }
        get isValid() {
            return !!this._dispatcher;
        }
        emit($event, $value) {
            if (!this.isValid)
                return;
            const eventStr = $event.toString();
            if (this._dispatcher.hasListener(eventStr)) {
                const payload = {
                    event: eventStr,
                    value: $value
                };
                this._dispatcher.event(payload.event, payload);
            }
        }
        hasListener($event) {
            return this._dispatcher && this._dispatcher.hasListener($event.toString()) || false;
        }
        destroy() {
            if (this._dispatcher) {
                this._dispatcher.offAll();
                this._dispatcher = null;
            }
        }
    }

    const JXEventMgr = new BaseEventDispatcher();

    class homeView extends AbstractRuntimeView {
        constructor() {
            super();
        }
        onAwake() {
            return __awaiter(this, void 0, void 0, function* () {
                this.zOrder = 2;
                this.onVisible();
                JXEventMgr.once(JXEvent.G2S_INIT_GAME_READY_SUCCESS, this, this.onGameBegin);
                this.btnPlay.on(Laya.Event.CLICK, this, this.onStarGame);
            });
        }
        onGameBegin() {
            UIMgr.close("JieXunRes/gameScene/LoadView.json");
            this.onVisible(false);
            JXEventMgr.emit(JXEvent.S2G_INIT_GAME_READY);
            console.log("开始游戏");
        }
        onStarGame() {
            JXEventMgr.emit(JXEvent.S2G_BEGIN_GAME);
            this.bottomui.visible = false;
            this.topPanel.visible = false;
            this.gameList.visible = false;
            Laya.timer.once(1000, this, this.onHideRLBanner);
        }
        onHideRLBanner() {
            this.appBanner.visible = true;
        }
        onVisible(v = true) {
            this.bottomui.visible = !v;
            this.bgSkin.visible = v;
            this.initLeve.visible = v;
        }
    }

    class loading extends AbstractRuntimeView {
        constructor() {
            super();
        }
        onAwake() {
            super.onAwake();
        }
        loadSDKRes() {
        }
    }

    class GameConfig {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("jiexun/main/view/homeView.ts", homeView);
            reg("jiexun/main/view/loading.ts", loading);
        }
    }
    GameConfig.width = 750;
    GameConfig.height = 1334;
    GameConfig.scaleMode = "fixedwidth";
    GameConfig.screenMode = "horizontal";
    GameConfig.alignV = "top";
    GameConfig.alignH = "center";
    GameConfig.startScene = "JieXunRes/gameScene/homeView.scene";
    GameConfig.sceneRoot = "";
    GameConfig.debug = false;
    GameConfig.stat = false;
    GameConfig.physicsDebug = false;
    GameConfig.exportSceneToJson = true;
    GameConfig.init();

    class AbstractBean {
        constructor(_name) {
            this._name = _name;
            this._dispatcher = new Laya.EventDispatcher();
        }
        get name() {
            return this._name;
        }
        get dispatcher() {
            return this._dispatcher;
        }
        finish() {
            if (this._dispatcher) {
                this._dispatcher.event(Laya.Event.COMPLETE);
            }
        }
        destroy() {
            if (this._dispatcher) {
                this._dispatcher.offAll();
                this._dispatcher = undefined;
            }
        }
    }

    class InitGameBean extends AbstractBean {
        constructor() {
            super("InitGameBean");
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                if (!JXSDK.config.gameSceneUrl || JXSDK.config.gameSceneUrl == "") {
                    return console.error("场景地址为空,请先配置游戏场景界面");
                }
                let homeView = yield UIMgr.asyncOpen("JieXunRes/gameScene/homeView.json");
                let gameScene = yield UIMgr.asyncOpen(JXSDK.config.gameSceneUrl);
                gameScene.zOrder = -1;
                this.finish();
            });
        }
    }

    class LoadResBean extends AbstractBean {
        constructor() {
            super("LoadResBean");
            this._curProgress = 0;
        }
        start() {
            return __awaiter(this, void 0, void 0, function* () {
                let loadView = UIMgr.onGetRuntime("JieXunRes/gameScene/LoadView.json");
                let res = [];
                for (var k in JXSDK.config.load.reses2Load) {
                    if (JXSDK.config.load.reses2Load[k].indexOf(".ls") != -1) {
                        res[k] = { url: JXSDK.config.load.reses2Load[k], clas: Laya.Scene, priority: 1 };
                        console.log(" JXSDK.config.load.reses2Load[k]", JXSDK.config.load.reses2Load[k]);
                    }
                    else {
                        res[k] = { url: JXSDK.config.load.reses2Load[k] };
                    }
                }
                yield LayaUtils.asyncCreateRes(JXSDK.config.load.reses2Load, (pro) => __awaiter(this, void 0, void 0, function* () {
                    console.log("pro", pro);
                    loadView.barPres.value = pro;
                }));
                loadView.close();
                this.finish();
            });
        }
    }

    class ZYBeanLauncher {
        constructor() {
            this._beans = [];
            this._curBeanIndex = 0;
            this._beanStartTime = 0;
            this._beans = [
                LoadResBean,
                InitGameBean,
            ];
        }
        run() {
            if (this._beanStartTime) {
                const curBean = this._beans[this._curBeanIndex - 1];
                console.log(`[BEAN]执行 ${curBean.name} 完成，耗时：${Date.now() - this._beanStartTime} 豪秒。`);
            }
            if (this._curBeanIndex < this._beans.length) {
                this._beanStartTime = Date.now();
                const beanClass = this._beans[this._curBeanIndex];
                const bean = new beanClass();
                bean.dispatcher.once(Laya.Event.COMPLETE, this, this.run);
                this._curBeanIndex++;
                console.log(`[BEAN]正在执行bean：${bean.name}`);
                bean.start();
            }
            else {
                console.log("[BEAN]所有bean全部执行完毕。");
            }
        }
    }

    class ErrorUtils {
        static throwNormalError($msg) {
            throw new Error($msg);
        }
        static throwNot2BeNull($test, $name) {
            if ($test === null || $test === undefined) {
                this.throwNormalError(`${$name} is supposed to be valid!!!`);
            }
        }
    }

    class JXSDKClazz {
        constructor() {
            this._hasDeployed = false;
            Laya.Browser.window;
        }
        set configurate($config) {
            this._config = $config;
        }
        get configurate() {
            return this._config;
        }
        initRun(config) {
            return __awaiter(this, void 0, void 0, function* () {
                this.configurate = config;
                if (!this.configurate) {
                    ErrorUtils.throwNormalError("请先执行 YLSDK.configurate 进行配置！");
                }
                else {
                    UIMgr.Init();
                    this._hasDeployed = true;
                    GameConfig.physicsDebug = false;
                    yield UIMgr.asyncOpen("JieXunRes/gameScene/LoadView.json");
                    this._hasDeployed = true;
                    this._beanLauncher = new ZYBeanLauncher();
                    this._beanLauncher.run();
                }
            });
        }
        get config() {
            return this._config;
        }
        set serverConfig(config) {
            this._serverConfig = config;
        }
        get serverConfig() {
            return this._serverConfig;
        }
    }
    const JXSDK = new JXSDKClazz();

    var View = Laya.View;
    var REG = Laya.ClassUtils.regClass;
    var ui;
    (function (ui) {
        var view;
        (function (view) {
            class gameSceneUI extends View {
                constructor() { super(); }
                createChildren() {
                    super.createChildren();
                    this.loadScene("view/gameScene");
                }
            }
            view.gameSceneUI = gameSceneUI;
            REG("ui.view.gameSceneUI", gameSceneUI);
        })(view = ui.view || (ui.view = {}));
    })(ui || (ui = {}));

    class gameScene3D extends ui.view.gameSceneUI {
        constructor() {
            super();
        }
        onAwake() {
            this.zOrder = -1;
            this.onLoadScene();
            JXEventMgr.on(JXEvent.S2G_BEGIN_GAME, this, this.onStartGame);
            Laya.timer.once(5000, this, this.onAddScene3D);
        }
        onStartGame() {
            console.log("开始游戏啦");
        }
        onLoadScene() {
            this.onLoadCompele(Laya.loader.getRes("res/res3D/LayaScene_main/Conventional/main.ls"));
        }
        onLoadCompele(scene3D) {
            console.log("scene3D", scene3D);
            this.addChild(scene3D);
        }
        onAddScene3D() {
            JXEventMgr.emit(JXEvent.G2S_INIT_GAME_READY_SUCCESS);
        }
    }

    class GameConfig$1 {
        constructor() {
        }
        static init() {
            var reg = Laya.ClassUtils.regClass;
            reg("scripts/gameScene3D.ts", gameScene3D);
        }
    }
    GameConfig$1.width = 750;
    GameConfig$1.height = 1334;
    GameConfig$1.scaleMode = "fixedauto";
    GameConfig$1.screenMode = "horizontal";
    GameConfig$1.alignV = "top";
    GameConfig$1.alignH = "center";
    GameConfig$1.startScene = "view/gameScene.scene";
    GameConfig$1.sceneRoot = "";
    GameConfig$1.debug = false;
    GameConfig$1.stat = false;
    GameConfig$1.physicsDebug = false;
    GameConfig$1.exportSceneToJson = true;
    GameConfig$1.init();

    const subpackageNames = [
        "sdk_youling_common",
        "sound",
        "scene"
    ];
    const cookReses2Preload = () => {
        const result = [
            "res/res3D/LayaScene_main/Conventional/main.ls",
            "JieXunRes/start.atlas",
            "JieXunRes/GameUI/home.atlas",
        ];
        return result;
    };
    const config = {
        gameName: "不要被抓了",
        gameSceneUrl: "view/gameScene.json",
        gameIconUrl: "iocn.png",
        homeLogoUrl: "logo.png",
        newbieAniUrl: "ani/newTab.ani",
        needSearchPlayer: false,
        storeItems: [],
        sound: {
            basePath: "sound",
            click: "click",
            bgm: "bgm"
        },
        load: {
            subpackages: subpackageNames,
            reses2Load: cookReses2Preload(),
        },
        server: {
            API_HOST: "https://api.aligame.top/",
            DATA_HOST: 'https://data.aligame.top/',
            OSS_HOST: 'https://oss.aligame.top/',
            apiKey: "yytfk6X4N1KWcckzSw4G2mN8mrnxctQE",
            apiSecret: "mHE3JnHRfKM7MD3Miyx7XwAtMEEzFNrt",
            apiversion: "20210726v1.0.1"
        },
        ad: {
            gameViewAdMode: 0,
            bannerAdID: [
                "adunit-29321759f816288f",
                "adunit-68c7620056b9bf0b",
                "adunit-50e9f84049812a59",
                "adunit-fca1482dd5398ca4",
                "adunit-265a58f2d627ce92",
                "adunit-dce50008da27988b"
            ],
            videoAdID: ["adunit-270f32de5e17b1be"],
            grid: ["adunit-0ac3ef300815fbfa"],
            custom: ["adunit-47cf27045d5239e3"],
            gridCount: 5
        }
    };
    const JXSDKConfig = config;

    class Main {
        constructor() {
            if (window['Laya3D'])
                Laya3D.init(GameConfig$1.width, GameConfig$1.height);
            else
                Laya.init(GameConfig$1.width, GameConfig$1.height, Laya['WebGL']);
            Laya['Physics'] && Laya['Physics'].enable();
            Laya['DebugPanel'] && Laya['DebugPanel'].enable();
            Laya.stage.scaleMode = GameConfig$1.scaleMode;
            Laya.stage.screenMode = "none";
            Laya.stage.alignV = GameConfig$1.alignV;
            Laya.stage.alignH = GameConfig$1.alignH;
            Laya.URL.exportSceneToJson = GameConfig$1.exportSceneToJson;
            if (GameConfig$1.debug || Laya.Utils.getQueryString('debug') == 'true')
                Laya.enableDebugPanel();
            if (GameConfig$1.physicsDebug && Laya['PhysicsDebugDraw'])
                Laya['PhysicsDebugDraw'].enable();
            if (GameConfig$1.stat)
                Laya.Stat.show();
            Laya.ResourceVersion.enable('version.json', Laya.Handler.create(this, this.onVersionLoaded), Laya.ResourceVersion.FILENAME_VERSION);
        }
        onVersionLoaded() {
            Laya.AtlasInfoManager.enable('fileconfig.json', Laya.Handler.create(this, this.onConfigLoaded));
        }
        onConfigLoaded() {
            JXSDK.initRun(JXSDKConfig);
        }
    }
    new Main();

}());
//# sourceMappingURL=bundle.js.map
