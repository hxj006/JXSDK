import AbstractModel from "./AbstractModel";

/**
 * 
 * @author: sen
 * @date: 2020/04/08 23:19:40
 */
export default abstract class AbstractController<M extends AbstractModel<M>> {
    protected _model: M;

    public destroy() {
        this._model.offAllCaller(this);
    }
}