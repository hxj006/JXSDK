import AbstractBean from "../bean/AbstractBean";
import InitGameBean from "../bean/InitGameBean";
import LoadResBean from "../bean/LoadResBean";
import INewable from "../def/INewable";
/**
 * 开始加载
 * @author: xj.huang
 * @date: 2021/07/31 12:02:04
 */
export default class ZYBeanLauncher {
    
    private _beans: INewable<AbstractBean>[] = [];
    private _curBeanIndex = 0;
    private _beanStartTime = 0;

    constructor() {
        this._beans = [
            // LoginBean,
            LoadResBean,
            InitGameBean,
        ];
    }

    public run() {
        if(this._beanStartTime) {
            const curBean = this._beans[this._curBeanIndex - 1];
            console.log(`[BEAN]执行 ${curBean.name} 完成，耗时：${Date.now() - this._beanStartTime} 豪秒。`);
        }
        if (this._curBeanIndex < this._beans.length) {
            this._beanStartTime = Date.now();
            const beanClass = this._beans[this._curBeanIndex];
            const bean = new beanClass();
            bean.dispatcher.once(Laya.Event.COMPLETE, this, this.run);
            this._curBeanIndex++;
            console.log(`[BEAN]正在执行bean：${bean.name}`);
            bean.start();
        } else {
            console.log("[BEAN]所有bean全部执行完毕。");
        }
    }
}