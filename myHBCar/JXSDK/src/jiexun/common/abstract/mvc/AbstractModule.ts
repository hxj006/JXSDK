/* eslint-disable @typescript-eslint/no-explicit-any */
import AbstractModel from "./AbstractModel";
import AbstractController from "./AbstractController";
import AbstractView from "./AbstractView";

/**
 * 
 * @author: sen
 * @date: 2020/04/09 16:20:54
 */
export default abstract class AbstractModule<M extends AbstractModel<any>, V extends AbstractView<M, C>, C extends AbstractController<M>> {
    protected _model: M;
    protected _controller: C;
    protected _view: V;
    constructor(){

    }

    protected abstract initMVC(): void;

    public async show($onProgress?: ($percent: number) => void) {
        if (!this.isShowing) {
            if (!this._view) {
                this.initMVC();
                this._view.deploy();
            }
            await this._view.show($onProgress);
        }
    }

    public hide() {
        if (this.isShowing) {
            this._view.hide();
        }
    }

    public get isShowing(): boolean {
        return this._view ? this._view.isShowing : false;
    }
}