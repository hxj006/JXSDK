/* eslint-disable @typescript-eslint/no-explicit-any */
import { UIMgr } from "../../manager/viewMgr";
import AbstractController from "./AbstractController";
import AbstractModel from "./AbstractModel";
import AbstractRuntimeView from "./AbstractRuntimeView";

/**
 * 
 * @author: sen
 * @date: 2020/04/09 20:54:37
 */
export default abstract class AbstractPopupView<M extends AbstractModel<any>, C extends AbstractController<M>> extends AbstractRuntimeView<M,C>{
    protected _ctrl: C;
    /**数据 */
    public param: any;
    constructor() { super(); }
    /**该方法已重构 */
    public onAwake(): void {
        this.url && UIMgr.onSetRuntime(this.url, this);
        this.onOnce(this.param)
    }
    /**
     * 参数
     * @param param 
     */
    public onOnce(param?) { }


}