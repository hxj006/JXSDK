import { JXSDK } from "../../../JXSDK";
import { UIMgr } from "../manager/viewMgr";
import AbstractBean from "./AbstractBean";

/**
 * 
 * @author: xj.huang
 * @date: 2021/07/31 18:45:06
 */
export default class InitGameBean extends AbstractBean {

    constructor() {
        super("InitGameBean")
    }
    async start() {
        if(!JXSDK.config.gameSceneUrl||JXSDK.config.gameSceneUrl==""){
            return console.error("场景地址为空,请先配置游戏场景界面")
        }
        let homeView = await UIMgr.asyncOpen(ViewRes.VIEW_HOME)
        // homeView.onAwake
        let gameScene = await UIMgr.asyncOpen(JXSDK.config.gameSceneUrl) as Laya.View
        gameScene.zOrder = -1
       
        this.finish()
    }
}