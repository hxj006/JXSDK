/**
 * model派发事件附带的参数载体。
 */

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export interface IEventPayload<T = any> {
    /** 事件名字 */
    event: string
    /** 更改后的最新属性 */
    value: T
}


/**
 * 
 * @author: hs.lin
 * @date: 2020/07/27 09:56:36
 */
export default class BaseEventDispatcher<EVENT> {
    private _dispatcher: Laya.EventDispatcher;
    constructor() {
        this._dispatcher = new Laya.EventDispatcher();
    }

    /**
     * 事件监听，只监听一次。
     * @param $event 事件名字，一般为setter getter名字。
     * @param $caller 事件侦听函数的执行域。
     * @param $handler 事件侦听函数，参数 IEventPayload。
     */
    public once($event: EVENT, $caller: unknown, $handler: ($payload: IEventPayload) => void) {
        if (!this._dispatcher) return;
        this._dispatcher.once($event.toString(), $caller, $handler);
    }

    /**
    * 事件监听。
    * @param $event 事件名字，一般为setter getter名字。
    * @param $caller 事件侦听函数的执行域，没有请传null，一般为this。
    * @param $needCallFist 是否先执行一次。
    * @param $handler 事件侦听函数，参数 IEventPayload。
    */
    public on($event: EVENT, $caller: unknown, $handler: ($payload: IEventPayload) => void, $needCallFist = false) {
        if (!this._dispatcher) return;
        this._dispatcher.on($event.toString(), $caller, $handler);
        if ($needCallFist) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            const thiz: any = this;
            $handler.call($caller, { event: $event.toString(), value: thiz[$event] });
        }
    }


    /**
     * 删除侦听器。
     * @param $event 事件名字，一般为setter getter名字。
     * @param $caller 事件侦听函数的执行域。
     * @param $handler 事件侦听函数。
     * @param $type （可选）移除类型。all：全部，once：只移除通过 once 方法添加的侦听器。
     */
    public off($event: EVENT, $handler: ($payload: IEventPayload) => void, $caller: unknown, $type: "once" | "all" = "all") {
        if (!this._dispatcher) return;
        this._dispatcher.off($event.toString(), $caller, $handler, $type === "once");
    }

    /** 取消这个对象的所有监听 */
    public offAllCaller($caller: unknown) {
        if (!this._dispatcher) return;
        this._dispatcher.offAllCaller($caller);
    }

    /**
     * 当前是否可工作（没有被销毁）
     */
    public get isValid(): boolean {
        return !!this._dispatcher;
    }

    /**
     * 派发事件。
     * @param $event 事件名字，一般为setter getter名字。
     * @param $value 更改后的最新属性。
     */
    public emit($event: EVENT, $value?: unknown) {
        if (!this.isValid) return;
        const eventStr: string = $event.toString();
        if (this._dispatcher.hasListener(eventStr)) {
            const payload: IEventPayload = {
                event: eventStr,
                value: $value
            };
            this._dispatcher.event(payload.event, payload);
        }
    }

    /** 是否为特定事件类型注册了任何侦听器 */
    public hasListener($event: EVENT) {
        return this._dispatcher&&this._dispatcher.hasListener($event.toString()) || false;
    }

    /**
    * 销毁
    */
    public destroy() {
        if (this._dispatcher) {
            this._dispatcher.offAll();
            this._dispatcher = null;
        }
    }

}