/**
 * @author 黄学捷
 * @com 网络AJAX请求
 * @timer 2020-12-07
 */
 class NetMgrClazz {
    /**
    * @param reType 请求类型 POST或者GET 
    * @param reUrl 请求地址
    * @param obj 请求参数{xx:xx}
    * @param backFun 请求成功回调
    * @param s 作用域 
    * 
    */
     send(reType: string, reUrl: string, obj: any, backFun: Function, s?: any) {
        var hr = new Laya.HttpRequest();
        hr.once(Laya.Event.ERROR, this, this.error, [backFun, s, hr]);
        hr.once(Laya.Event.PROGRESS, this, this.onHttpRequestProgress);
        hr.once(Laya.Event.COMPLETE, this, this.success, [backFun, s, hr]);
        // if(obj)obj["token"] = YLNet.token;
        var strin = JSON.stringify(obj);
        strin = strin.replace(/{/g, "");
        strin = strin.replace(/}/g, "");
        strin = strin.replace(/:/g, "=");
        strin = strin.replace(/,/g, "&");
        strin = strin.replace(/"/g, "");
        if (reType.toUpperCase() == "POST") {
            hr.send(reUrl, strin, "POST", 'json', ["Content-Type", "application/x-www-form-urlencoded","Access-Control-Allow-Origin","*"]);
        }
        if (reType.toUpperCase() == "GET") {

            hr.send(reUrl + "?" + strin, null, "GET", 'json', ["Content-Type", "application/x-www-form-urlencoded","Access-Control-Allow-Origin","*"]);
        }
    }
    /**异步 */
    public async sendAsync(reUrl: string, obj: any={},reType: string="POST" ){
       return await new Promise((res,rej)=>{
            this.send(reType, reUrl, obj,(data)=>{
                res(data)
            })
        })
    }
    private  success(backFun, s, hr) {
        if (typeof backFun == "function") {
            backFun.call(s, hr.data)
        }
    }
    private  onHttpRequestProgress() {

    }
    private  error(backFun, s, hr) {
        console.log("请求错误", s, hr);
        if (typeof backFun == "function") {
            backFun.call(s, { code: 1, msg: "error", data: hr.data })
        }
    }
     getIndexOfs = function (arr, obj) {
        for (var i = 0; i < arr.length; i++) {
            if (arr[i] === obj) {
                return i;
            }
        }
        return -1;
    }
}
export const ZYNet = new NetMgrClazz()