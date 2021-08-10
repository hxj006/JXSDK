import AbstractRuntimeView from "../abstract/mvc/AbstractRuntimeView";
import LayaUtils from "../util/LayaUtils";

/**
 * 
 * @author: xj.huang
 * @date: 2021/07/31 15:16:52
 */
export default class ViewMgr {
     /**界面运行脚本 */
     private runtimeMaps: Map<string, any>;
     /**视图数据 */
     private viewMaps: Map<string, Laya.View | Laya.Sprite>;
     /**弹窗数据 */
     private popMaps: Map<string, Laya.View | Laya.Sprite>;
     /**打开的界面数据 */
     private openViews: Array<any>;
     private onOpenViewArr: Array<any>;
     /**加载队列数组 */
     private loadScene = [];
     /**微信顶部按钮 */
     public wxBtnPos: Laya.Point;
     /**当前视图 */
     public currentView: string;
     /**视图管理层 */
     public viewRoot:Laya.Sprite;
     /**弹窗层管理 */
     public dialog:Laya.Dialog;
     /**弹窗层管理 */
     public view:Laya.View;
     constructor() {
         this.viewMaps = new Map<string, Laya.View>();
         this.popMaps = new Map<string, Laya.Dialog>();
         this.runtimeMaps = new Map<string, any>();
         this.openViews = new Array();
         this.onOpenViewArr = new Array();
         
     }
 
 
     private static _instance: ViewMgr;
     public static get instance(): ViewMgr {
         if (!this._instance) {
             this._instance = new ViewMgr();
         }
         return this._instance;
     }
     /**
      * 初始化界面
      * 必须执行该界面
      */
     public Init(): void {
         this.viewRoot = new Laya.Sprite();
         this.viewRoot.name = "viewRoot";
         this.viewRoot.zOrder = 99;
         Laya.stage.addChild(this.viewRoot);
         console.log("this.viewRoot",this.viewRoot)
         this.onResize()
         Laya.stage.on(Laya.Event.RESIZE, this, this.onResize)
         this.viewRoot.addChildren(this.view,this.dialog)
     }
     public addChild(node: Laya.Node) {
         this.viewRoot.addChild(node)
     }
     private onResize(){
        this.viewRoot.height = Laya.stage.height;
        this.viewRoot.width = Laya.stage.width;
     }
     /**
      * 显示界面
      * @param url 地址
      * @param param 参数
      */
     public async asyncOpen(url,param?):Promise<Laya.View>{
         //是否已经打开过
         let viewUrl = this.viewMaps.get(url);
         let popUrl = this.popMaps.get(url);
         if(!viewUrl||!popUrl){
             this.onOpenViewArr.push({url:url,param:param});
             return new Promise((res,rej)=>{
                 this.onLoadScene((viewData)=>{
                     this.popMaps.set(url,viewData)
                     res(viewData)
                 },this.onOpenViewArr[0]);
             })
         }else{
             if(viewUrl){
                 this.view.addChild(viewUrl)
             }else if(popUrl){
                 this.view.addChild(popUrl)
             }
         }
 
     }
     private async onLoadScene(Promise,viewdata){
         // return
         let viewData = await LayaUtils.asyncLoadView(viewdata.url);
         if(viewData instanceof AbstractRuntimeView){
             (this.view?this.view:this.viewRoot).addChild(viewData)
         }else if(viewData['sceneType']=="dialog"&&viewData){
             this.dialog.addChild(viewData)
         }else if(viewData){
            this.viewRoot.addChild(viewData)
        }else{
             console.error("加载"+viewdata.url+"错误",viewData)
         }
         this.onOpenViewArr.splice(0,1)
         Promise.call(window,viewData)
         // return viewdata;
         console.log("this.onOpenViewArr",this.onOpenViewArr,viewData)
 
     }
 
     /**关闭界面 */
     public close(url){
         let runtime=  this.onGetRuntime(url);
         if(runtime['sceneType']=="dialog"){
             runtime&&runtime.removeSelf()
         }
     }
     /**
      * 销毁界面
      * @param url 地址
      * @param isForce 是否强制(默认：false)
      */
     public onDestroy(url:string,isForce=false){
         let view = this.viewMaps.get(url) as any;
         if (view) {
             if (view instanceof Laya.View) {
                 view.destroy(true)
                 this.viewMaps.delete(url)
             }
             else if (view instanceof Laya.Dialog) {
                 view.close()
                 this.popMaps.delete(url)
             }
             else if (isForce&&view) {
                 view.destroy(true)
                 this.viewMaps.delete(url)
                 console.log("view", view, url)
             }else{
                 console.warn("警告："+url+" 销毁失败")
             }
             // this._onSpliceArr(url)
         }
     }
 
 
 
 
     /**设置运行脚本 */
     public onSetRuntime(url, runtime){
         let isUrl = this.runtimeMaps.get(url)
         if (!isUrl) {
             this.runtimeMaps.set(url, runtime)
         }
     }
     /**获取界面UI运行脚本 */
     public onGetRuntime(url) {
         //console.log("this.runtimeMaps", this.runtimeMaps)
         return this.runtimeMaps.get(url)
     }
     /**异步获取UI运行脚本 */
     public async asyncGetRunTime(url){
         return await new Promise((res,rej)=>{
             let i=0;
             Laya.timer.loop(1,this,()=>{
                 if(this.runtimeMaps.get(url)){
                     res(this.runtimeMaps.get(url));
                     Laya.timer.clearAll(this);
                 }
                 if(i++>=300){
                     Laya.timer.clearAll(this);
                     res(null)
                 }
             })
             
         })
     }

}
export const UIMgr = ViewMgr.instance;