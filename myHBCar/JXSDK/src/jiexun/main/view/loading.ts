import AbstractRuntimeView from "../../common/abstract/mvc/AbstractRuntimeView"


/**
 * 
 * @author: xj.huang
 * @date: 2021/07/30 17:20:52
 */
export default class loading extends AbstractRuntimeView<null,null> {
    pro:Laya.Label;
    constructor() {
        super()
    }
    onAwake() {
        super.onAwake() 
    }
    /**加载框架资源 */
    loadSDKRes() {

    }
}