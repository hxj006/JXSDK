const enum ZYAPI {
    /**用户登录*/
   LOGIN = 'Home/User/login',
   /**获取显示配置*/
   GET_APP_CONFIG = 'Home/Config/getConfig',
   /**更新用户微信数据*/
   UPDATE_WX_USER = 'Home/User/updateWxUser',
   /**获取用户*/
   GET_USER = 'Home/User/getUser',
    /**更新用户外部数据*/
   UPDATE_USER_EXT_DATA = 'Home/User/updateUserExtData',
   /**获取好友*/
   GET_FRIEND = 'Home/Friend/getFriend',
    /**更新好友*/ 
   UPDATE_FRIEND = 'Home/Friend/updateFriend',
    /**更新好友状态*/
   UPDATE_FRIEND_STATUS = 'Home/Friend/updateFriendStatus',
   /**获取所有排行榜*/
   GET_ALL_RANK = 'Home/Rank/getAllRank',
   /**获取排行榜*/
   GET_RANK = 'Home/Rank/getRank',
   /**获取好友排行榜*/
   GET_FRIEND_RANK = 'Home/Rank/getFriendRank',
   /**添加用户记录*/
   ADD_USER_RECORD = 'Home/UserRecord/addRecord',
   /**获取用户记录*/
   GET_USER_RECORD = 'Home/UserRecord/getRecord',
   /**获取好友用户*/
   GET_FRIEND_USER = 'Home/User/getFriendUser',
   /**获取点等级*/
   GET_LEVEL = 'Home/Level/getLevel',
   /**获取瑞出选项*/
   GET_WITHDRAW_OPTIONS = 'Home/Withdraw/getOptions',
   /**退出*/
   DO_WITHDRAW = 'Home/Withdraw/do',
   /**获取位置信息*/
   GET_LOCATION = 'Home/Location/info',

}