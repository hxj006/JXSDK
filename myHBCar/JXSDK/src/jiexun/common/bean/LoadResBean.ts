// import { ZYSDK } 
import { JXSDK } from "../../../JXSDK";
import { UIMgr } from "../manager/viewMgr";
import LayaUtils from "../util/LayaUtils";
import AbstractBean from "./AbstractBean";

/** 
 * 
 * @author: xj.huang
 * @date: 2021/07/31 12:05:41
 */
export default class LoadResBean extends AbstractBean {
    private _curProgress = 0;
    constructor() {
        super("LoadResBean");
    }
    public async start() {
        let loadView = UIMgr.onGetRuntime(ViewRes.VIEW_LOAD) as JXSDK.loading;
        let res: Array<any> = [
        ]
        for (var k in JXSDK.config.load.reses2Load) {
            if (JXSDK.config.load.reses2Load[k].indexOf(".ls") != -1) {
                res[k] = { url: JXSDK.config.load.reses2Load[k], clas: Laya.Scene, priority: 1 }
                console.log(" JXSDK.config.load.reses2Load[k]", JXSDK.config.load.reses2Load[k])
                // JXSDK.config.load.reses2Load[k]["clas"]=Laya.Sprite3D;
            } else {
                res[k] = { url: JXSDK.config.load.reses2Load[k] }
            }
        }
        await LayaUtils.asyncCreateRes(JXSDK.config.load.reses2Load, async (pro) => {
            console.log("pro", pro)
            loadView.barPres.value = pro
        })
        loadView.close()
        this.finish();
    }
}