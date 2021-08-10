/**
 * wx平台的ylsdk 配置相关，所有每个项目需要修改的都抽离到此进行配置
 * @author: hs.lin
 * @date: 2020/07/26 11:31:37
 */



/** 子包名字，务必按照规则来，因为工具会自动修改下面属性 */
const subpackageNames = [
    "sdk_youling_common",
    "sound",
    "scene"
    //TODO: 后续请自行添加 
];

/** 整理需要预加载的资源，尽量少用，会影响白屏时间 */
const cookReses2Preload = () => {
    const result: string[] = [
        "res/res3D/LayaScene_main/Conventional/main.ls",
        "JieXunRes/start.atlas",//默认
        "JieXunRes/GameUI/home.atlas",//默认
        //TODO: 后续请自行添加
    ];
    return result;
};


const config: JXSDK.IZYSDKConfigVo = {
    // isVerify: true,  //是否第一次提包用的审核版本
    gameName: "不要被抓了",  //游戏名字，微信暂时应用在收藏界面中
    gameSceneUrl: "view/gameScene.json",    //战斗逻辑入口场景 //TODO: 请自行修改
    gameIconUrl: "iocn.png",    //收藏界面的icon，自行修改路径 //TODO: 请自行修改
    homeLogoUrl: "logo.png",    //home界面的logo图片，脚手架自动生成，请覆盖对应文件，详见laya/assets/logo.png //TODO: 请自行覆盖文件
    // newbieImgUrl: "",   //新手图片，自行修改路径，或者设置为空字符串 //TODO: 请自行修改
    newbieAniUrl:"ani/newTab.ani",
    needSearchPlayer: false, //是否需要搜索玩家
    storeItems:[], //商城物品
    sound: { 
        basePath: "sound",
        click: "click",   //点击音效  //TODO: 请自行修改
        bgm: "bgm"    //背景音乐  //TODO: 请自行修改
    },
    load: {
        subpackages: subpackageNames,
        reses2Load: cookReses2Preload(),  
    },
    server: {
        API_HOST: "https://api.aligame.top/",//后端提供，正式服和测试服不一样，上线前务必改为正式服 //TODO: 请自行修改
        DATA_HOST : 'https://data.aligame.top/',
        OSS_HOST : 'https://oss.aligame.top/',
        apiKey: "yytfk6X4N1KWcckzSw4G2mN8mrnxctQE",//后端提供 //TODO: 请自行修改
        apiSecret: "mHE3JnHRfKM7MD3Miyx7XwAtMEEzFNrt",//后端提供 //TODO: 请自行修改
        apiversion: "20210726v1.0.1"//api版本，后端提供，不填默认v10
    },
    ad: {
        gameViewAdMode: 0,//game界面的广告样式0|1|2
        //banner广告id，运营提供，没有时请留空，不要乱填一个错误的 //TODO: 请自行修改
        bannerAdID: [
            "adunit-29321759f816288f",
            "adunit-68c7620056b9bf0b",
            "adunit-50e9f84049812a59",
            "adunit-fca1482dd5398ca4",
            "adunit-265a58f2d627ce92",
            "adunit-dce50008da27988b"
        ],
        videoAdID: ["adunit-270f32de5e17b1be"],//视频广告id，运营提供，没有时请留空，不要乱填一个错误的 //TODO: 请自行修改
        grid: ["adunit-0ac3ef300815fbfa"],//格子广告ID
        custom: [ "adunit-47cf27045d5239e3" ],//定做广告ID
        gridCount: 5//格子数量
    }
};

export const JXSDKConfig = config;