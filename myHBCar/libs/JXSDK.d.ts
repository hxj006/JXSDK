/**
 * SDK.d.ts
 * @author: xj.huang
 * @date: 2021/07/31 14:37:48
 */
declare namespace JXSDK {

    export type Res2LoadVo = string;
    /**指云SDK配置 */
    export interface IZYSDKConfigVo {
        /** 是否审核状态，不填默认为false，审核状态一般是还没有广告id，会隐藏皮肤试用，商店中视频购买金币等所有涉及到真广告的操作 */
        isVerify?: boolean,
        /** 是否隐藏导流页面，不填默认为false */
        isHideRd?: boolean,
        /** 游戏名字（收藏界面需要用到） */
        gameName: string;
        /** 游戏图标（收藏界面需要用到,分辨率66*66为佳） */
        gameIconUrl: string;

        /** home界面中的logourl，这张图片尽量在母包中，因为采用lite模式的话，不会加载其他子包直接显示会报错 */
        homeLogoUrl: string;
        /** 游戏战斗场景url */
        gameSceneUrl: string;
        /** 重生最大次数（不填默认2） */
        rebornMax?: number;
        /** 游戏中超越玩家数据缓存队列的最大数量，不填默认2，填0则不显示超越玩家（好友和世界排行榜） */
        overPlayerQueueMax?: number;

        /** 
         * 平台授权时机，默认rank，有以下合法字段：
         * - loading：游戏loading的时候即进行授权。
         * - rank：打开排行榜才进行授权
         */
        authorTime?: "loading" | "rank";


        /** 是否需要搜索玩家 */
        needSearchPlayer: boolean;
        /** 搜索玩家模式：1多人模式，2对战模式。（默认不填为1） */
        searchPlayerMode?: 1 | 2;
        /** 需要搜索玩家的数量（1-20，默认16，ps：当前无效，写死16） */
        numSearchPlayer?: number;


        /** 商品列表，供皮肤商城和皮肤试用界面使用 */
        storeItems: [];
        /** 商城中随机解锁金币数，如果全部都已购买了，则返回-1（不填默认则为：YLSDK._defaultStoreRandomUnlockGold） */
        storeRandomUnlockGold?: ($numCanBuy: number) => number;
        /** 商城中视频解锁金币数（不填默认300） */
        storeVideoUnlockGold?: number;
        /** 分数转换金币逻辑。（不填默认则为：YLSDK._defaultScore2Gold） */
        score2Gold?: ($score: number) => number;
        /** 宝箱获取金币数（不填默认100） */
        BoxUnlockGold?: number;

        /** 没有新手，默认为false */
        noNewbie?: boolean;
        /** 新手界面中介绍图片的地址，如果自定义新手界面或者没有新手步骤，这里可以填空字符串或者忽略 */
        newbieImgUrl?: string;
        /**新手引导自定义动画 */
        newbieAniUrl?: string;
        /**新手引导文字图片 */
        newbieTextUrl?: string;

        /** 部分必须配置的音效 */
        sound: {
            /** 音效目录，结尾不用添加斜杠/ */
            basePath: string;
            /** 点击音效（配置文件名，不需要扩展名，只支持mp3） */
            click: string,
            /** 背景音乐（配置文件名，不需要扩展名，只支持mp3）*/
            bgm: string,
        };

        /** 排行榜相关 */
        rank?: {
            /** 分数显示格式，例如：$score$米，会把$score$替换为对应分数 */
            scorePattern?: string
        }

        /** 广告部分相关配置 */
        ad: {
            /** game界面的广告模式：0.没有，1.中间田子广告，2.底部广告 */
            gameViewAdMode: 0 | 1 | 2;
            /** banner广告id，如果没有时请填空字符串，最好不要乱填一个错误的，否则后台一直在加载 */
            bannerAdID: string[];
            /** 视频广告id，如果没有时请填空字符串，最好不要乱填一个错误的 */
            videoAdID: string | string[];
            /** 插屏广告id */
            interAdID?: string;
            /** 其他扩展字符串 */
            [key: string]: unknown;
        };
        /** 资源加载配置，流程如下：1.加载子包。2.预加载资源 */
        load: {
            /** 首先加载的子包（不填默认为：sdk_youling_lite，加载完毕则直接显示，采用小明哥的方法） */
            liteSubpackage?: string,
            /** 要加载的子包名字数组 */
            subpackages: string[];
            /** 
             * 需要loading界面预加载的资源，后续因为采用轻量包，预加载必要性不算太大，建议尽量减少预加载，因为会延迟loading时间。
             * - ps：这里预加载有个好处是，可以选择将资源进行锁定，也就是Laya.Resource.destroyUnusedResources()不会销毁这里加载的资源（只有Laya.Texture2D才有效） 
             **/
            reses2Load?: Res2LoadVo[];
            /** 子包加载用Promise.all并发加载（貌似只有微信支持，qq会报错，而且貌似并发加载优势不大，微信底层还是会进行队列等待，so 慎用） */
            isSubpackLoadPromiseAll?: boolean
        };
        /** 后端配置 */
        server: {
            /** api接口基础部分，不一定要/结尾，如:http://test-xcx6.youlingba.com */
            API_HOST: string;
            /** */
            DATA_HOST: string;
            /** */
            OSS_HOST: string;
            host?: string;
            /** 后台接口版本（不填默认：v10） */
            apiversion?: string;
            apiKey: string;
            apiSecret: string;
        }
    }
    export interface serverConfig{
        
    }
    export class loading extends Laya.View {
        pro:Laya.Label;
    }
}