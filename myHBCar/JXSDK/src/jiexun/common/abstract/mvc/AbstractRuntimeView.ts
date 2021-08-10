import { UIMgr } from "../../manager/viewMgr";
import AbstractController from "./AbstractController";
import AbstractModel from "./AbstractModel";
/**
 * 
 * @author: xj.huang
 * @date: 2021/07/31 15:28:05
 */
export default abstract class AbstractRuntimeView<M extends AbstractModel<any>, C extends AbstractController<M>> extends Laya.View {
    protected _model: M;
    protected _controller: C;
    public param: any;
    constructor() {
        super();
    }
    public onAwake(): void {
        super.onAwake()
        this.url && UIMgr.onSetRuntime(this.url, this);
        this.onOnce(this.param)
        Laya.stage.on(Laya.Event.RESIZE, this, this.onResize)
    }
    private onResize() {
        this.height = Laya.stage.height;
        this.width = Laya.stage.width;
    }
    /**
     * 参数
     * @param param 
     */
    public onOnce(param?) { }
}