import { ZYNet } from "./HXJNet";

 class _ZYNetMgr {
    //正式服API
    private API='https://api.aligame.top/';
    // 测试服API
    private API_TEST='https://api-test.aligame.top/';
    //数据API
    private DATA='https://data.aligame.top/';
    constructor() {
    }
    private static _instance: _ZYNetMgr;
	public static get instance(): _ZYNetMgr {
		if (!this._instance) {
			this._instance = new _ZYNetMgr();
		}
		return this._instance; 
	}
    //获取线上配置
    async onLineGameConfig(){ 
        return await ZYNet.sendAsync(this.API+ZYAPI.GET_APP_CONFIG) 
        
    }
}
export const ZYNetMgr = _ZYNetMgr.instance;