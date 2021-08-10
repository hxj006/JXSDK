import { UIMgr } from "../../manager/viewMgr";
import AbstractController from "./AbstractController";
import AbstractModel from "./AbstractModel";
/**
 * 
 * @author: xj.huang
 * @date: 2021/07/31 11:49:44
 */
export default abstract class AbstractView <M extends AbstractModel<any>, C extends AbstractController<M>>{
    public isShowing=false;
    deploy(){

    }
    show(pro?){

    }
    hide(){

    }
    
}
