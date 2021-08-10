/* eslint-disable @typescript-eslint/no-explicit-any */
import MathUtils from "./MathUtils";

/**
 * laya的api封装
 * @author: sen
 * @date: 2020/04/08 22:12:29
 */
export default class LayaUtils {

    /** 
     * 修复微信开放域组件的一些兼容性bug：
     * 1.两个开放域viewer切换时，不会设置windows.sharedCanvas的长宽，导致切换后显示比例不对，要么出现拉伸，要么出现缩小
     */
    public static fixWxOpenDataViewer($wx: Laya.WXOpenDataViewer) {
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const sharedCanvas: any = (window as any).sharedCanvas;
        if (!sharedCanvas) return;
        $wx.on(Laya.Event.DISPLAY, undefined, () => {
            //显示的时候，把sharedCanvas的长宽重新同步一下WXOpenDataViewer对应的
            sharedCanvas.width = $wx.width;
            sharedCanvas.height = $wx.height;
        });
    }

    public static addClickListener($btn: Laya.EventDispatcher, $handler: ($e: Laya.Event) => void, $caller?: unknown) {
        $btn.on(Laya.Event.CLICK, $caller, $handler);
    }

    public static addBtnsClickHandler($btns: Laya.EventDispatcher[], $handler: ($e: Laya.Event) => void, $caller?: unknown) {
        $btns.forEach(($btn: Laya.EventDispatcher) => {
            $btn && $btn.on(Laya.Event.CLICK, $caller, $handler);
        });
    }

    public static removeBtnsClickHandler($btns: Laya.EventDispatcher[], $handler: ($e: Laya.Event) => void, $caller?: unknown) {
        $btns.forEach(($btn: Laya.EventDispatcher) => {
            $btn && $btn.off(Laya.Event.CLICK, $caller, $handler);
        });
    }


    /**
     * promise方式加载纹理 
     * @param $url 
     */
    public static asyncLoadTexture2D($url: string, $isCrossDomain = false): Promise<Laya.Texture2D> {
        return new Promise<Laya.Texture2D>(async ($resolved, $reject) => {
            if ($isCrossDomain) {
                const onError = () => {
                    console.log("加载失败", $url);
                    Laya.loader.off(Laya.Event.ERROR, undefined, onError);
                    $reject();
                };
                Laya.loader.on(Laya.Event.ERROR, undefined, onError);
                //使用loader，加载image，然后image.bitmap就是Texture2D，这个一般是跨域时使用（ps，后来发现加载image，微信小游戏上面，bitmap是空，但是加载textre2d又正常了，所以改用loader来加载Laya.Loader.TEXTURE2D了）
                Laya.loader.load($url, Laya.Handler.create(undefined, ($result: Laya.Texture2D) => {
                    Laya.loader.off(Laya.Event.ERROR, undefined, onError);
                    $resolved($result as Laya.Texture2D);
                }), undefined, Laya.Loader.TEXTURE2D);
            } else {
                Laya.Texture2D.load($url, Laya.Handler.create(undefined, $resolved));
            }
        });
    }

    /**
     * promise方式加载材质
     * @param $url 
     */
    public static asyncLoadMaterial($url: string): Promise<Laya.BaseMaterial> {
        return new Promise<Laya.BaseMaterial>(($resolved) => {
            Laya.BaseMaterial.load($url, Laya.Handler.create(undefined, $resolved));
        });
    }

    /**
     * 此方法适用于3D资源
     * promise方式加载资源（不创建，创建后续使用Laya.loader.getRes获取） 
     * @param $urls 
     */
    public static asyncCreateRes($urls: string[] | string, $progress?: ($percentFloat: number) => void): Promise<void> {
        return new Promise<void>(($resolved) => {
            Laya.loader.create($urls, Laya.Handler.create(undefined, $resolved), $progress ? Laya.Handler.create(undefined, $progress, undefined, true) : undefined);
        });
    }
    /**
     * 此方法适用于2D资源 如图集,音频等
     * promise方式加载资源（不创建，创建后续使用Laya.loader.getRes获取） 
     * @param $urls 
     */
    public static asyncLoad2DRes($urls: string[] | string, $progress?: ($percentFloat: number) => void): Promise<void> {
        return new Promise<void>(($resolved) => {
            Laya.loader.load($urls, Laya.Handler.create(undefined, $resolved), $progress ? Laya.Handler.create(undefined, $progress, undefined,false) : undefined);
        });
    }

    /** promise方式的Scene3D加载 */
    public static asyncLoadScene3D($url4LS: string): Promise<Laya.Scene3D> {
        return new Promise<Laya.Scene3D>(async ($resolved) => {
            await this.asyncCreateRes($url4LS);
            $resolved(Laya.Loader.getRes($url4LS));
        });
    }

    /** promise方式的Sprite3D load */
    public static asyncLoadSprite3D($url4LH: string): Promise<Laya.Sprite3D> {
        return new Promise<Laya.Sprite3D>(async ($resolved) => {
            await this.asyncCreateRes($url4LH);
            const result = Laya.Sprite3D.instantiate(Laya.Loader.getRes($url4LH));
            result.transform.localPosition = new Laya.Vector3(0, 0, 0);
            $resolved(result);
            // Laya.Sprite3D.load($url4LH, Laya.Handler.create(undefined, $resolved));
        });
    }

    /** promise方式的ShuriKenParticle3D load */
    public static asyncLoadParticle($url4LH: string): Promise<Laya.ShuriKenParticle3D> {
        return new Promise<Laya.ShuriKenParticle3D>(async ($resolved) => {
            await this.asyncCreateRes($url4LH);
            const result = Laya.ShuriKenParticle3D.instantiate(Laya.Loader.getRes($url4LH)) as Laya.ShuriKenParticle3D;
            result.transform.localPosition = new Laya.Vector3(0, 0, 0);
            $resolved(result);
        });
    }

    /** promise方式打开场景 */
    public static asyncOpenScene($url: string, $isCloseOther = true): Promise<Laya.Scene> {
        return new Promise<Laya.Scene>(async ($resolved) => {
            await this.asyncCreateRes($url);
            Laya.Scene.open($url, $isCloseOther, undefined, Laya.Handler.create(undefined, $resolved));
        });
    }

    /**
     * promise方式的loadScene
     */
    public static asyncLoadScene<N = Laya.Node>($url: string, $progress?: ($percent: number) => void, $progressCaller?: unknown): Promise<N> {
        return new Promise<N>(($resolved) => {
            const onComplete = ($node: N) => {
                if ($progress) {
                    //追加一个进度完成的progress
                    $progress.call($progressCaller, 1);
                }
                $resolved($node);
            };

            Laya.Scene.load(
                $url,
                Laya.Handler.create(null, onComplete),
                $progress ? Laya.Handler.create($progressCaller, $progress, undefined, false) : undefined
            );
        });
    }
    /**
     * 加载视图类
     * @param sceneUrl 场景路径URL
     * @param caller 作用域 (可选)
     * @param callBack 回调方法 (可选) 
     * @await 使用 await 异步时可以不需要回调就可以获取结果 
     * @return 返回View
     */
    public static async asyncLoadView(sceneUrl: string): Promise<Laya.View | Laya.Dialog> {
        if (typeof (sceneUrl) != "string") {
            console.error("sceneUrl必须是url地址")
            return;
        }
        let view: Laya.View | Laya.Dialog = Laya.loader.getRes(sceneUrl)
        if (!view || view && view['type'] && view['loadList']) {
            view = await new Promise((resolve, reject) => {
                Laya.View.load(sceneUrl, Laya.Handler.create(undefined, resolve))
            })
        }
        return view;
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static asyncLoadJson($url: string): Promise<any[]> {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return new Promise<any[]>(async ($resolved) => {
            await this.asyncCreateRes($url);
            let result = Laya.Loader.getRes($url);
            if (!Array.isArray(result)) {
                if (result) {
                    result = [result];
                } else {
                    result = [];
                }
            }
            $resolved(result);
        });
    }


    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    public static getUrlParamsObj(): any {
        const result = {};
        if (!Laya.Browser.window.conch) {
            const url: string = Laya.Browser.window.location&&Laya.Browser.window.location.href || "";
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

    public static async asyncLoadRes<T>($url: string): Promise<T> {
        return new Promise<T>(async ($resolved) => {
            await this.asyncCreateRes($url);
            $resolved(Laya.loader.getRes($url));
        });
    }

    public static browerAlert($content: string) {
        if (!Laya.Browser.window.conch) {
            Laya.Browser.window.alert($content);
        }
    }

    /** #ffffff 转 v3 */
    public static rgb2V3($rgb: string): Laya.Vector3 {
        $rgb = $rgb.replace(/^#/, "");
        const result = new Laya.Vector3();
        if ($rgb.length === 6) {
            result.x = parseInt($rgb.substr(0, 2), 16) / 256;
            result.y = parseInt($rgb.substr(0, 2), 16) / 256;
            result.z = parseInt($rgb.substr(0, 2), 16) / 256;
        }
        return result;
    }

    /**
     * 设置texture
     * @param $target 目标对象 
     * @param $textureUrl png等贴图地址
     * @param $scale2Fix 是否设置后缩放至图片比例。none：不缩放；x：兼容x轴比例，缩放z。z：兼容z轴比例，缩放x
     * @param $isCrossDomain 是否跨域图片
     */
    public static async try2SetTexture($target: Laya.Sprite3D, $textureUrl: string, $scale2Fix: "none" | "z" | "x" = "none", $isCrossDomain = false): Promise<Laya.Texture2D | undefined> {
        let texture: Laya.Texture2D;
        let material: Laya.Material;
        if ($target instanceof Laya.MeshSprite3D) {
            material = $target.meshRenderer.material;
        } else if ($target instanceof Laya.SkinnedMeshSprite3D) {
            material = $target.skinnedMeshRenderer.material;
        }
        if (material instanceof Laya.UnlitMaterial) {
            texture = await this.asyncLoadTexture2D($textureUrl, $isCrossDomain);
            material.albedoTexture = texture;
        }
        if ($scale2Fix === "x") {
            $target.transform.localScaleZ = $target.transform.localScaleX * texture.height / texture.width;
        } else if ($scale2Fix === "z") {
            $target.transform.localScaleX = $target.transform.localScaleZ * texture.width / texture.height;
        }
        return texture;
    }

    /**
     * 递归查找可以设置材质的MeshSprite3D
     * @param $parent 
     */
    public static getMeshSprite3DChildDeep($parent: Laya.Node): Laya.MeshSprite3D | Laya.SkinnedMeshSprite3D {
        const childrenNum = $parent.numChildren;
        for (let i = 0; i < childrenNum; i++) {
            const child = $parent.getChildAt(i);
            if (child instanceof Laya.MeshSprite3D || child instanceof Laya.SkinnedMeshSprite3D) {
                return child;
            } else {
                const temp = this.getMeshSprite3DChildDeep(child);
                if (temp) {
                    return temp;
                }
            }
        }
        return undefined;
    }

    /** 递归遍历查找child */
    public static getChildByNameDeep($parent: Laya.Node, $name: string): Laya.Node {
        let child = $parent.getChildByName($name);
        if (child) return child;
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

    /** 播放或者停止一个粒子系统（非active） */
    public static playOrStopParticle($particle: Laya.Node, $isPlayOrStop: boolean) {
        if ($particle instanceof Laya.ShuriKenParticle3D) {
            if (!$particle.active) {
                console.log("粒子没有active？");
                $particle.active = true;
            }
            const pSystem = $particle.particleSystem;
            if (pSystem.isEmitting === $isPlayOrStop) return;
            if ($isPlayOrStop) {
                pSystem.play();
            } else {
                pSystem.stop();
            }
        }
    }

    /**
     * 播放一次粒子特效
     * @param $url 资源地址
     * @param $parent 
     * @param $durationMS2Destroy 多少毫秒后销毁
     * @param $position 全局坐标
     */
    public static async playParticleEffectOnce($url: string, $parent: Laya.Node, $durationMS2Destroy: number, $position: Laya.Vector3 = new Laya.Vector3()) {
        return new Promise<void>(async ($resolved) => {
            const effect = await LayaUtils.asyncLoadSprite3D($url);
            effect.transform.position = $position;
            $parent.addChild(effect);
            effect.timerOnce($durationMS2Destroy, undefined, () => {
                effect.destroy(true);
                $resolved();
            });
        });
    }

    /**
     * 获取前一帧和当前帧的时间间隔，单位ms 
     * @param $lowestFrameRate 最低帧率
     */
    public static getFrameDelta($lowestFrameRate = 40): number {
        return Math.min(Laya.timer.delta, 1000 / $lowestFrameRate);
    }

    /** 把v打散成每一帧变化量，注意这个api的使用场景是每帧进行调用修正，如果只是一帧调用，则不适合用（推荐使用getVFrame） */
    public static getVFrameDelta($v: number, $lowestFrameRate = 40) {
        return $v * this.getFrameDelta($lowestFrameRate) / 1000;
    }


    /**
     * 传入一秒的值，计算出一帧的值（匹配任何帧率）
     * @param $secondValue 一秒的值
     */
    public static calFrameValue($secondValue: number): number {
        return $secondValue * this.getFrameDelta() / 1000;
    }

    /** 更新自己属性，一般用于3d的tween update中 */
    public static updateSelfProps<T>($t: T, $p: (keyof T)[] | (keyof T), $createLayaHandler = true): undefined | Laya.Handler {
        const ps = (Array.isArray($p)) ? $p : [$p];
        // eslint-disable-next-line no-self-assign
        const update = () => ps.forEach($e => $t[$e] = $t[$e]);
        if (!$createLayaHandler) {
            update();
        } else {
            return Laya.Handler.create(undefined, update, undefined, false);
        }
    }

    public static async createUlitPlane($long: number, $width: number, $textureUrl: string, $alpha = 1, $isCrossDomain = false) {
        const sp = new Laya.MeshSprite3D(Laya.PrimitiveMesh.createPlane($long, $width));
        const mat = new Laya.UnlitMaterial();
        mat.renderMode = Laya.UnlitMaterial.RENDERMODE_TRANSPARENT;
        mat.cull = Laya.RenderState.CULL_NONE;
        sp.meshRenderer.sharedMaterial = mat;
        if (!MathUtils.isEqual($alpha, 1)) {
            mat.albedoColor = new Laya.Vector4(1, 1, 1, $alpha);
        }
        mat.albedoTexture = await this.try2SetTexture(sp, $textureUrl, "z", $isCrossDomain);
        return sp;
    }

    /**
     * async的http请求分装
     */
    public static async asyncRequest<T>($url: string, $data?: any, $method: "get" | "post" | "head" = "post"): Promise<T> {
        return new Promise<T>(($resolved, $rejected) => {
            const req = new Laya.HttpRequest();
            req.once(Laya.Event.COMPLETE, undefined, $resolved);
            req.once(Laya.Event.ERROR, undefined, $rejected);
            req.send($url, $data, $method, "json", ["Content-Type", "application/json;charset=UTF-8"]);
        });
    }


    /**
     * 同时设置visible和alpha，一般在tween显示隐藏时设置状态
     */
    public static setVisibleAndAlpha($sp: Laya.Sprite, $isShowing: boolean) {
        $sp.visible = $isShowing;
        $sp.alpha = $isShowing ? 1 : 0;
    }


    /** 
    * 预热粒子，不包含加载
    */
    public static prewarmParticle($url: string) {
        // const particle = Laya.loader.getRes($url);
        // if (particle instanceof Laya.ShuriKenParticle3D) {
        //     const render: any = particle.particleRenderer;
        //     let publicDefine = 0;
        //     let materialDefine = 0;
        //     const spriteDefine: number = 1;//render._defineDatas.value;
        //     particle.particleRenderer.materials.forEach($mat => {
        //         const matAny: any = $mat;
        //         publicDefine = (1 & (~matAny._disablePublicDefineDatas.value));
        //         materialDefine = matAny._defineDatas.value;
        //         if (matAny._shader) {
        //             Laya.Shader3D.compileShader(matAny._shader._name, 0, 0, publicDefine, spriteDefine, materialDefine);
        //         }
        //     });
        // }
    }
}