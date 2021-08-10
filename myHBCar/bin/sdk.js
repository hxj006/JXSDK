
var sdk = {

  init(title) {
    // 分享菜单设置
    wx.showxhareMenu({ withShareTicket: true });
    wx.onShareAppMessage(wx.onShareAppMessage(() => {
      return {
        title: title,
        imageUrl: '' // 图片 URL
      }
    }));
  },

  login(breakcall) {
    wx.showLoading({ title: '登录中' });
    // breakcall();
    // wx.hideLoading();
  },




  onShare(pos, callback) {

  },
  createVideo(adid, callback) {
    if (typeof wx != "undefined") {
      if (wx.createRewardedVideoAd) {
        wx.createRewardedVideoAd({
          adUnitId: adid,
          multiton: false
        })
      }
    }
  },
  createBanner(adid, callback) {

  },

  //---其他

  //------------微信-----------------------------
/**
* 震动时间
* @param time  毫秒数
*/
  shareAppMessage(data) {
    if (typeof wx != "undefined") {
      wx.shareAppMessage(data);
    }
  },
  onshow(fun) {
    wx.onShow(() => {
      fun.wxShow();
      console.log("回来前台ShowBannerUpdate")
    });
  },
  onHideGame(fun) {
    wx.onHide(() => {
      fun.wxHide();
      console.log("退出前台onHideGame")
    });
  },
  createInnerSoundContext(url, isloop) {
    if (typeof wx != "undefined") {
      let audio = wx.createInnerAudioContext()
      audio.loop = isloop
      audio.autoplay = false
      audio.src = url // src 可以设置 http(s) 的路径，本地文件路径或者代码包文件路径
      audio.onPlay(() => {
        //console.log('开始声音播放：'+url)
      })
      audio.onStop(()=>{
        // if(audio.loop){
        //   audio.play()
        // }
        console.log("音乐停了",isloop)
      })
      return audio;
    } else {
      return null;
    }
  },
  createInnerAudioContext(url, isloop) {
    if (typeof wx != "undefined") {
      var audio = wx.createInnerAudioContext()
      audio.loop = isloop
      audio.autoplay = true
      audio.src = url // src 可以设置 http(s) 的路径，本地文件路径或者代码包文件路径
      audio.onPlay(() => {
        //console.log('开始声音播放：'+url)
      })
      return audio;
    } else {
      return null;
    }
  },

  createImage(sprite, url) {
    if (typeof wx != "undefined" && typeof wx != "undefined") {
      let image = wx.createImage();
      image.onload = function () {

      };
      image.src = url;
    }
  },

  vibrateShort() {
    if (typeof wx != "undefined") {
      wx.vibrateShort();
    }
  },

  vibrateLong() {
    if (typeof wx != "undefined") {
      wx.vibrateLong();
    }
  },
  isIPhoneX() {
    if (typeof wx != "undefined") {
      return wx.isIPhoneX();
    }
  },
  isAndroid() {
    if (typeof wx != "undefined") {
      return wx.isAndroid();
    }
  },
  isIOS() {
    if (typeof wx != "undefined") {
      return wx.isIOS();
    }
  },
}
module.exports = sdk;
