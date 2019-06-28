import config from "@/config";
import http from '@/utils/flyio'
//分享小程序
function memberCenterShare() {
  return http.get("/memberCenter/share")
}
async function onShare() {
  const result = await memberCenterShare();
}
function formatNumber(n) {
  const str = n.toString()
  return str[1] ? str : `0${str}`
}
function getVal(obj, val) {
  let str = val
  Object.keys(obj).forEach(key => {
    if (key == val) {
      str = obj[key]
    }
  })
  return str

}
export function getStatus(val) {
  return getVal(CONVERT_STATUS, val)
}

export function formatTime(date) {
  const year = date.getFullYear()
  const month = date.getMonth() + 1
  const day = date.getDate()

  const hour = date.getHours()
  const minute = date.getMinutes()
  const second = date.getSeconds()

  const t1 = [year, month, day].map(formatNumber).join('/')
  const t2 = [hour, minute, second].map(formatNumber).join(':')

  return `${t1} ${t2}`
}
//显示模态对话框
export function showModal(opt) {
  wx.showModal({
    title: opt.title || '提示',
    content: opt.content || '',
    confirmColor: opt.confirmColor || '',
    showCancel: opt.showCancel || true,
    success(res) {
      if (res.confirm) {
        "function" == typeof opt.ok && opt.ok()
      } else if (res.cancel) {
        "function" == typeof opt.cancel && opt.cancel()
      }
    }
  })
}
//显示 loading 提示框
//用法 this.utils.loading()
export function loading(title = '加载中') {
  wx.showLoading({
    title,
    mask: true
  })
}
//隐藏 loading 提示框
//用法 this.utils.hideLoading()
export function hideLoading() {
  setTimeout(() => {
    wx.hideLoading()
  }, 200)
}
//显示消息提示框
//用法 this.utils.toast('出错了')
export function toast(title, icon = 'none', duration = 1500) {
  wx.showToast({
    title,
    icon,
    duration
  })
}
export default {
  formatNumber,
  formatTime,
  showModal,
  loading,
  hideLoading,
  toast,
  getStatus,

  //保留当前页面，跳转到应用内的某个页面
  toUrl(url, type) {
    if (type == 1) {
      //关闭所有页面，打开到应用内的某个页面
      wx.reLaunch({ url });
      return
    }
    if (type == 2) {
      //跳转到 tabBar 页面，并关闭其他所有非 tabBar 页面
      wx.switchTab({ url });
      return
    }
    wx.navigateTo({ url })
  },
  //返回上一页
  goBack(num = 1) {
    wx.navigateBack({
      delta: num
    })
  },
  //设置微信标题栏文字
  setTitle(title) {
    wx.setNavigationBarTitle({
      title
    });
  },
  //处理空数据显示
  noData(str, type = 0) {
    let titles = ['暂无', '0']
    let newStr = titles[type]
    if (!str) {
      return newStr
    }
    return str
  },
  //检测是否断网
  getNetworkType(callback) {
    let baseURL =
      process.env.NODE_ENV === "development"
        ? config.baseUrl.dev
        : config.baseUrl.pro;
    wx.request({
      url: baseURL + "/homepage/slider",
      data: {},
      method: "GET",
      success: res => {
        if (callback) {
          callback();
        }
      },
      // fail执行时当断网处理
      fail: function () {
        if (callback) {
          return
        }
        wx.navigateTo({ url: "/pages/noNetwork/main" });
      }
    });
  },
  //自定义分享功能
  onShareAppMessage() {
    let uid = wx.getStorageSync("userInfo") ? wx.getStorageSync("userInfo").id : ''
    onShare();
    return {
      title: "孟津民丰银行积分俱乐部",
      path: "/pages/guide/main?uid=" + uid,
      success: res => { }
    };
  }
}
