/* eslint-disable @typescript-eslint/no-explicit-any */
import { YLPlatformMgr } from "../platform/YLPlatformManager";
import BaseEventDispatcher from "../abstract/BaseEventDispatcher";
import ArrayUtils from "../util/ArrayUtils";
import { YLSDK } from "../../YLSDK";
import { YLNetMgr } from "./YLNetManager";
import { YLServerApi } from "../def/server/YLServerApi";
import MathUtils from "../util/MathUtils";

type BannerVo = {
    id: number;
    banner: any
};


/** 广告相关事件 */
export enum YLADEvent {
    /** banner加载成功 */
    BANNER_LOADED = "BANNER_LOADED"
}
/** 视频广告类型 */
export enum YLVideoAdCategory {
    Unknown = 0,
    /** 重生 */
    Reborn = 1,
    /** 皮肤试用相关 */
    Skin = 2,
}

/**
 * 广告管理器（视频以及真banner，非互推游戏那种假banner）
 * @author: hs.lin
 * @date: 2020/08/03 15:19:03
 */
class YLADManager extends BaseEventDispatcher<YLADEvent> {
    private AD_MAX = 3;
    /** 广告加载成功后的缓存池 */
    private _bannerPool: BannerVo[] = [];
    /** 广告加载中的队列 */
    private _bannerQueue: BannerVo[] = [];
    private _bannerIndex = 0;
    private _curShowingBanner: BannerVo = undefined;
    /** 最后一次加载广告时间 */
    private _latestLoadAdTime = 0;
    /** 加载广告间隔 */
    private _loadAdInterval = 2000;
    /** 当前显示的banner广告id，客户端随机生成，为了保持各个界面对应关系的原子性，ps:不能采用bannerVo.id */
    private _curShowingBannerId = 0;

    private _curShowingBlock: any;
    private _curShowingBlockId = 0;

    private _curShowingBox: any;
    private _curShowingBoxId = 0;
    private _normalBannerHegiht = 0;
    private _bannerShowIndex=0;

    public set normalBannerHegiht(value) {
        this._normalBannerHegiht = value;
    }

    /** 真banner的默认高度，比例跟随设备分辨率，非设计高度（1335） */
    public get normalBannerHegiht() {
        return this._normalBannerHegiht;
    }

    public deploy() {
        if (Laya.Browser.onQQMiniGame) this.AD_MAX = 1;//qq部分的banner广告跟wx的不一样，qq每次show都会更新广告内容，所以缓存没有必要，wx则可以缓存
        this._normalBannerHegiht = 77 / 568 * Laya.Browser.clientHeight;
        if (YLPlatformMgr.isSupportBannerAd) {
            this.try2LoadBannerAd();//预加载一个banner广告
            Laya.timer.loop(1000 / 3, this, this.try2LoadBannerAd);//定期进行预加载检查
        }
        this.createVideoAd();
    }

    //=============== 视频广告部分 begin ====================

    private createVideoAd() {
        if (!YLPlatformMgr.isSupportVideoAd) return;
        YLPlatformMgr.createVideoAd();
    }

    /** 
     * 播放视频广告
     * @returns 1：视频播放完毕，0：视频未播放完毕，-1：没有视频广告，-2：正在播放视频，-3:不支持视频
     */
    public async showVideo($cate: YLVideoAdCategory): Promise<number> {
        if (!YLPlatformMgr.isSupportVideoAd) {
            YLPlatformMgr.toastMsg("操作失败：不支持视频广告！");
            return -3;
        } else if (YLSDK.data.isWatchingVidoeAd) {
            YLPlatformMgr.toastMsg("操作失败，已有视频在播放！");
            return -2;
        }
        return new Promise<number>(($resolved) => {
            YLNetMgr.request(YLServerApi.viewVideo, { ad_type: $cate, type: 0 });
            YLSDK.data.isWatchingVidoeAd = true;
            YLPlatformMgr.showVideoAd(($endCode: number) => {
                YLPlatformMgr.playBgm(true);
                YLSDK.data.isWatchingVidoeAd = false;
                if ($endCode > 0) {
                    YLNetMgr.request(YLServerApi.viewVideo, { ad_type: $cate, type: 1 });
                } else if ($endCode === 0) {
                    YLPlatformMgr.toastMsg("未观看完视频");
                } else if ($endCode === -1) {
                    YLPlatformMgr.toastMsg("暂时没有视频，请稍后再试.");
                }
                $resolved($endCode);
            });
        });
    }

    //=============== 视频广告部分 end ====================



    //=============== banner广告部分 begin ====================

    /** 预加载广告 */
    private try2LoadBannerAd() {
        if (!YLPlatformMgr.isSupportBannerAd) return;
        if (this._bannerPool.length + this._bannerQueue.length > this.AD_MAX) {//超过数量了，先不加载
            this._loadAdInterval = Math.max(YLSDK.data.versionConfig?.banner_interval || 1000, 5000);//加载满了，后续加载间隔长一点
            return;
        }
        if (Date.now() - this._latestLoadAdTime < this._loadAdInterval) return;//加载cd中
        const bannerVo: BannerVo = {
            id: this._bannerIndex++,
            banner: undefined
        };
        this._latestLoadAdTime = Date.now();
        this._bannerQueue.push(bannerVo);
        YLPlatformMgr.createBannerAd()?.then(
            ($banner: unknown) => {
                ArrayUtils.remove(this._bannerQueue, bannerVo);
                if ($banner) {
                    bannerVo.banner = $banner;
                    this._bannerPool.push(bannerVo);
                    this.emit(YLADEvent.BANNER_LOADED);
                }
            },
            () => {
                //加载过程中代码报错
                ArrayUtils.remove(this._bannerQueue, bannerVo);
            });
    }

    /** 显示banner广告，返回广告id，隐藏时使用 */
    public showBanner(): number {
        // 误点开启时需要轮播banner
        if (YLSDK.data?.versionConfig?.delay === 1) {
            Laya.timer.loop(1500,this,this.loopSHowBanner)
        }
        return this.loopSHowBanner();
       
        // let ad: BannerVo;
        // if (this.hasBanner) {
        //     this.hideBanner(0, true);
        //     ad = this._bannerPool.shift();
        //     this._curShowingBanner = ad;
        // } else if (this._curShowingBanner) {
        //     ad = this._curShowingBanner;
        // }
       // if (!ad?.banner) return 0;
        // ad.banner.show();
        // this._curShowingBannerId = MathUtils.randomBetween(1, 10000000) >> 0;
       // return this._curShowingBannerId;
    }

    loopSHowBanner():number
    {
        let ad= this._bannerPool[this._bannerShowIndex];
        console.log("showbannerLoop",ad);
        if(ad)
        {
            if( this._curShowingBanner)
            this._curShowingBanner.banner.hide();
            ad.banner.show();
            this._curShowingBanner=ad;
            this._curShowingBannerId = MathUtils.randomBetween(1, 10000000) >> 0;
            this._bannerShowIndex=++this._bannerShowIndex%3;
            return this._curShowingBannerId;
        }
        else 
        {
            this._bannerShowIndex=++this._bannerShowIndex%3;
            ad =this._bannerPool[this._bannerShowIndex];
            if(ad)
            {
                if( this._curShowingBanner)
                this._curShowingBanner.banner.hide();
                ad.banner.show();
                this._curShowingBanner=ad;
                this._curShowingBannerId = MathUtils.randomBetween(1, 10000000) >> 0;
                return this._curShowingBannerId;
            }else
            {
                return 0;
            }
          
        }
       
       
    }

    public hideBanner($bannerId?: number, $force?: boolean) {
        
        Laya.timer.clear(this,this.loopSHowBanner);
        for(let i=0;i<3;i++)
        {
            if(this._bannerPool[i])
            this._bannerPool[i].banner.hide();
        }
        this._bannerPool.shift();
        this.try2LoadBannerAd();
        // if (!$force && (!$bannerId || $bannerId !== this._curShowingBannerId)) return;
        // if (!this._curShowingBannerId) return;
        // this._curShowingBannerId = undefined;
        // if (!this._curShowingBanner?.banner) return;
        // this._curShowingBanner.banner.hide();
    }

    /** 当前显示的banner */
    public get curShowingBanner(): BannerVo {
        return this._curShowingBanner;
    }

    /** 是否有缓存到banner广告 */
    public get hasBanner(): boolean {
        return this._bannerPool.length > 0;
    }
    //=============== banner广告部分 end ====================





    //=============== block广告部分 end ====================

    /** 显示格子广告，返回广告id，隐藏时使用 */
    public showBlock($x: number, $y: number, $size: number, $orien: "landscape" | "vertical"): number {
        const factor = Laya.Browser.clientHeight / Laya.stage.displayHeight;
        $x = $x * factor;
        $y = $y * factor;
        this.hideBlock(0, true);
        this._curShowingBlock = YLPlatformMgr.createBlockAd($x, $y, $size, $orien);
        if (!this._curShowingBlock) return 0;
        this._curShowingBlock.show();
        this._curShowingBlockId = MathUtils.randomBetween(1, 100000) >> 0;
        return this._curShowingBlockId;
    }

    public changeBlockPos($id: number, $x: number, $y: number) {
        if (!$id || !this._curShowingBlockId || $id !== this._curShowingBlockId) return;
        const factor = Laya.Browser.clientHeight / Laya.stage.displayHeight;
        $x = $x * factor;
        $y = $y * factor;
        this._curShowingBlock.style.left = $x;
        this._curShowingBlock.style.top = $y;
    }

    public hideBlock($id: number, $force?: boolean) {
        if (!$force && (!$id || this._curShowingBlockId !== $id)) return;
        this._curShowingBlock?.hide();
        this._curShowingBlock?.destroy();
        this._curShowingBlockId = undefined;
        this._curShowingBlock = undefined;
    }

    //=============== block广告部分 end ====================


    //=============== box广告部分 begin ====================
    /** 显示盒子广告，返回广告id，隐藏时使用 */
    public showBox($onClose?: () => void): number {
        this.hideBox(0, true);
        this._curShowingBox = YLPlatformMgr.createBoxAd(() => {
            this.hideBox(0, true);
            $onClose && $onClose();
        });
        if (!this._curShowingBox) return 0;
        this._curShowingBox.load().then(() => this._curShowingBox?.show());
        this._curShowingBoxId = MathUtils.randomBetween(1, 100000) >> 0;
        return this._curShowingBoxId;
    }

    public hideBox($id: number, $force?: boolean) {
        if (!$force && (!$id || this._curShowingBoxId !== $id)) return;
        this._curShowingBoxId = undefined;
        this._curShowingBox?.destroy();
        this._curShowingBox = undefined;
    }
    //=============== box广告部分 end ====================
}

export const YLADMgr = new YLADManager();