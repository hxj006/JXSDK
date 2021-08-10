import { JXSDK } from "../../../JXSDK";
import AbstractRuntimeView from "../../common/abstract/mvc/AbstractRuntimeView";
import { JXEvent } from "../../common/def/JXEvent";
import { UIMgr } from "../../common/manager/viewMgr";
import { JXEventMgr } from "../../common/manager/YLEventMgr";
import LayaUtils from "../../common/util/LayaUtils";

/**
 * 
 * @author: HXJ
 * @date: 2021/08/01 18:27:19
 */
export default class homeView extends AbstractRuntimeView<null,null> {
    private bgSkin:Laya.Image;
    private btnPlay:Laya.Button;
    private bottomui:Laya.Box;
    private topPanel:Laya.Box;
    private gameList:Laya.Box;
    private appBanner:Laya.Button;
    private initLeve:Laya.Box;
    constructor() {
        super()
    }
    async onAwake(){
        this.zOrder=2
        this.onVisible()
        JXEventMgr.once(JXEvent.G2S_INIT_GAME_READY_SUCCESS,this,this.onGameBegin)
        this.btnPlay.on(Laya.Event.CLICK,this,this.onStarGame)
    }
    onGameBegin(){
        UIMgr.close(ViewRes.VIEW_LOAD)
        this.onVisible(false)
        JXEventMgr.emit(JXEvent.S2G_INIT_GAME_READY)
        // 开始游戏
        console.log("开始游戏")
    }
    onStarGame(){
        JXEventMgr.emit(JXEvent.S2G_BEGIN_GAME);
        this.bottomui.visible = false;
        this.topPanel.visible = false;
        this.gameList.visible = false;
        Laya.timer.once(1000,this,this.onHideRLBanner)
    }
    onHideRLBanner(){
        this.appBanner.visible = true
    }
    onVisible(v=true){
        this.bottomui.visible = !v;
        this.bgSkin.visible = v;
        this.initLeve.visible = v;
    }
}