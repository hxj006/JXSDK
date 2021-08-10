/**
 * 事件名称管理
 * @author: HXJ
 * @date: 2021/08/01 18:39:56
 * * @see JXEventManager.ts
 */
export enum JXEvent {
    //======================= 必须对接事件 =========================

    /** 
     * SDK->游戏：初始化游戏，并且进入准备状态。（ps：仅在小游戏开始派发，游戏中重新开始不派发）
     * - PS：接收到这个事件只要进入准备状态即可，**千万不要让主角跑起来** ，后续会再派发S2G_BEGIN_GAME，此时才应该跑起来
     **/
    S2G_INIT_GAME_READY = "S2G_INIT_GAME_READY",
    /** 游戏->SDK：游戏初始化完成 */
    G2S_INIT_GAME_READY_SUCCESS = "G2S_INIT_GAME_READY_SUCCESS",

    /** 
     * SDK->游戏：开始游戏，让主角跑起来。
     * - 游戏会在三种情况下派发此事件：
     * - 1.游戏端派发 G2S_INIT_GAME_READY_SUCCESS 用户进行开始游戏操作后
     * - 2.游戏端派发 G2S_REBORN_GAME_READY_SUCCESS 用户进行某些界面操作后
     * - 3.游戏端派发 G2S_RESET_GAME_READY_SUCCESS 用户进行某些界面操作后
     **/
    S2G_BEGIN_GAME = "S2G_BEGIN_GAME",

    /** 游戏->SDK：游戏失败 */
    G2S_GAME_FAIL = "G2S_GAME_FAIL",

    /** 游戏->SDK：游戏通关 */
    G2S_GAME_PASS = "G2S_GAME_PASS",

    /** 
     * SDK->游戏：重生游戏，并且进入准备状态（原进度重生玩家，仅在游戏失败后会派发）
     * - PS：接收到这个事件只要进入准备状态即可，**千万不要让主角跑起来** ，后续会再派发S2G_BEGIN_GAME，此时才应该跑起来
     * */
    S2G_REBORN_GAME_READY = "S2G_REBORN_GAME_READY",
    /** 游戏->SDK：重生游戏完成 */
    G2S_REBORN_GAME_READY_SUCCESS = "G2S_REBORN_GAME_READY_SUCCESS",

    /** 
     * SDK->游戏：重置游戏，并且进入准备状态（仅在游戏失败后会派发）
     * - PS：接收到这个事件只要进入准备状态即可，**千万不要让主角跑起来** ，后续会再派发S2G_BEGIN_GAME，此时才应该跑起来
     **/
    S2G_RESET_GAME_READY = "S2G_RESET_GAME_READY",
    /** 游戏->SDK：重置游戏完成 */
    G2S_RESET_GAME_READY_SUCCESS = "G2S_RESET_GAME_READY_SUCCESS",

    /** 
     * SDK->游戏：试用皮肤
     * - 参数:IStoreItemVo
     **/
    S2G_USE_SKIN = "S2G_USE_SKIN",

    /** 
     * 游戏->SDK：更新当局分数
     * - 参数:IUpdateCurScoreVo
     **/
    G2S_UPDATE_CUR_SCORE = "G2S_UPDATE_CUR_SCORE",



    //======================= 部分非必须事件 =========================

    /** SDK->游戏：搜索玩家界面中，搜索出某玩家时派发，参数:ISearchedPlayerVo */
    S2G_PLAYER_SEARCHED = "S2G_PLAYER_SEARCHED",

    /** 
     * SDK->游戏：狂点界面中，玩家点击时派发
     * - 参数:ICrazyClickVo
     * */
    S2G_ON_CRAZY_CLICK = "S2G_ON_CRAZY_CLICK",

    /** 
     * Main模块中stackView切换前的事件，可以拦截流程界面的切换（部分非流程界面的弹窗不能拦截，例如商店，收藏夹等弹出）
     * - **如果有拦截，处理完毕后请发送 G2S_STACK_VIEW_BEFORE_EACH_SUCCESS**
     * - 参数：IStackViewChangeVo
     */
    S2G_STACK_VIEW_BEFORE_EACH = "S2G_STACK_VIEW_BEFORE_EACH",
    /** Main模块中stackView的切换拦截完毕，可以继续下一个流程界面 */
    G2S_STACK_VIEW_BEFORE_EACH_SUCCESS = "G2S_STACK_VIEW_BEFORE_EACH_SUCCESS",
}
