import GameConfig from "./GameConfig";
import ZYBeanLauncher from "./jiexun/common/abstract/ZYBeanLauncher";
import { UIMgr } from "./jiexun/common/manager/viewMgr";
import ErrorUtils from "./jiexun/common/util/ErrorUtils";

/**
 * 
 * @author: xj.huang
 * @date: 2021/07/30 16:41:56
 */
class JXSDKClazz {
    private _config: JXSDK.IZYSDKConfigVo;
    /**是否激活 */
    private _hasDeployed = false;
    private _serverConfig: JXSDK.serverConfig;
    private _beanLauncher: ZYBeanLauncher;
    constructor() {
        Laya.Browser.window;
    }
    private set configurate($config: JXSDK.IZYSDKConfigVo) {
        this._config = $config;

    }
    private get configurate() {
        return this._config
    }
    /**
     * 运行激活入口
     * @param config 
     */
    public async initRun(config) {
        this.configurate = config
        if (!this.configurate) {
            ErrorUtils.throwNormalError("请先执行 YLSDK.configurate 进行配置！");
        } else {
            UIMgr.Init()
            this._hasDeployed = true;
            GameConfig.physicsDebug = false;//无效的操作，目的只是为了import一下sdk中的GameConfig，进行init调用，做部分ui中的类映射
            // this.serverConfig = await ZYNet.sendAsync(this.config.server.host + ZYAPI.GET_APP_CONFIG)
             await UIMgr.asyncOpen(ViewRes.VIEW_LOAD) as JXSDK.loading;
            
            this._hasDeployed = true;
            this._beanLauncher = new ZYBeanLauncher();
            this._beanLauncher.run();
        }
    }
    get config() {
        return this._config
    }
    public set serverConfig(config: JXSDK.serverConfig) {
        this._serverConfig = config
    }
    public get serverConfig() {
        return this._serverConfig
    }
}

export const JXSDK = new JXSDKClazz()