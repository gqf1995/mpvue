<script>
export default {
  created() {
    // 调用API从本地缓存中获取数据
    /*
     * 平台 api 差异的处理方式:  api 方法统一挂载到 mpvue 名称空间, 平台判断通过 mpvuePlatform 特征字符串
     * 微信：mpvue === wx, mpvuePlatform === 'wx'
     * 头条：mpvue === tt, mpvuePlatform === 'tt'
     * 百度：mpvue === swan, mpvuePlatform === 'swan'
     * 支付宝(蚂蚁)：mpvue === my, mpvuePlatform === 'my'
     */

    let logs;
    if (mpvuePlatform === "my") {
      logs = mpvue.getStorageSync({ key: "logs" }).data || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync({
        key: "logs",
        data: logs
      });
    } else {
      logs = mpvue.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      mpvue.setStorageSync("logs", logs);
    }
  },
  log() {
    console.log(`log at:${Date.now()}`);
  },
  mounted() {
    console.log("mounted");
  },
  onLoad() {
    console.log("page index onLoad");
  },
  onReady() {
    console.log("page index onReady");
  },
  onShow() {
    console.log("onShow");
  },
  onUnload() {
    console.log("onUnload");
  },
  onHide() {
    console.log("onHide");
  },
  onLaunch: function() {
    let logs;
    if (mpvuePlatform === "wx" && this.globalData != null) {
      console.log("onLaunch");
      // 展示本地存储能力
      logs = wx.getStorageSync("logs") || [];
      logs.unshift(Date.now());
      wx.setStorageSync("logs", logs);

      // 登录
      wx.login({
        success: res => {
          // 发送 res.code 到后台换取 openId, sessionKey, unionId
        }
      });
      // 获取用户信息
      wx.getSetting({
        success: res => {
          if (res.authSetting["scope.userInfo"]) {
            // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
            wx.getUserInfo({
              success: res => {
                // 可以将 res 发送给后台解码出 unionId
                this.globalData.userInfo = res.userInfo;

                // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
                // 所以此处加入 callback 以防止这种情况
                if (this.userInfoReadyCallback) {
                  this.userInfoReadyCallback(res);
                }
              }
            });
          }
        }
      });
      // 获取系统状态栏信息
      wx.getSystemInfo({
        success: e => {
          this.globalData.StatusBar = e.statusBarHeight;
          let custom = wx.getMenuButtonBoundingClientRect();
          this.globalData.Custom = custom;          
          this.globalData.CustomBar =
            custom.bottom + custom.top - e.statusBarHeight;
        }
      });
    }
  }
};
</script>

<style src="./styles/global.less" lang="less">
.container {
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 200rpx 0;
  box-sizing: border-box;
}
/* this rule will be remove */
* {
  transition: width 2s;
  -moz-transition: width 2s;
  -webkit-transition: width 2s;
  -o-transition: width 2s;
}
</style>
