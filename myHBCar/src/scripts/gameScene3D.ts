import { JXEvent } from "JXSDK/src/jiexun/common/def/JXEvent";
import { JXEventMgr } from "JXSDK/src/jiexun/common/manager/YLEventMgr";
import { ui } from "src/ui/layaMaxUI";

/**
 * 
 * @author: HXJ
 * @date: 2021/08/01 22:19:27
 */
export default class gameScene3D extends ui.view.gameSceneUI {

    constructor() {
        super()
    }
    onAwake() {
        this.zOrder = -1
        this.onLoadScene()
        JXEventMgr.on(JXEvent.S2G_BEGIN_GAME, this, this.onStartGame)
        Laya.timer.once(5000, this, this.onAddScene3D)
    }
    onStartGame() {
        console.log("开始游戏啦")
    }
    onLoadScene() {
        this.onLoadCompele(Laya.loader.getRes("res/res3D/LayaScene_main/Conventional/main.ls"))
    }
    onLoadCompele(scene3D) {
        console.log("scene3D", scene3D)
        this.addChild(scene3D)
    }
    onAddScene3D() {

        JXEventMgr.emit(JXEvent.G2S_INIT_GAME_READY_SUCCESS)
    }
}