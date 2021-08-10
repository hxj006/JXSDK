/**
 * 
 * @author: xj.huang
 * @date: 2021/07/31 12:03:46
 */
 export default abstract class AbstractBean {
    private _dispatcher: Laya.EventDispatcher = new Laya.EventDispatcher();
    constructor(private _name: string) { }

    public get name(): string {
        return this._name;
    }

    public get dispatcher(): Laya.EventDispatcher {
        return this._dispatcher;
    }

    /** 开始，必须重写 */
    public abstract start(): void;

    /** 结束 */
    protected finish() {
        if (this._dispatcher) {
            this._dispatcher.event(Laya.Event.COMPLETE);
        }
    }

    /** 销毁 */
    public destroy() {
        if (this._dispatcher) {
            this._dispatcher.offAll();
            this._dispatcher = undefined;
        }
    }
}