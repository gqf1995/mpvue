import Fly from 'flyio/dist/npm/wx'
const fly = new Fly()
// 设置超时
fly.config.timeout = 7000
import config from "@/config/index.js";

// 根据开发环境返回接口url
          console.log(config);


if (process.env.NODE_ENV === 'production') {
  fly.config.baseURL = config.baseUrl.pro
} else {
  fly.config.baseURL = config.baseUrl.dev
}
//添加请求拦截器
fly.interceptors.request.use((request) => {
  wx.showLoading({
    title: "加载中",
    mask: true
  });
  console.log(request);
  let token = wx.getStorageSync('token');
  if (token) {
    // 让每个请求携带token--['X-Token']为自定义key 请根据实际情况自行修改
    config.headers['x-access-token'] = token
  }
  // request.headers["X-Tag"] = "flyio";
  // request.headers['content-type']= 'application/json';
  request.headers = {
    "X-Tag": "flyio",
    'content-type': 'application/json'
  };

  let authParams = {
    //公共参数
  };

  request.body && Object.keys(request.body).forEach((val) => {
    if (request.body[val] === "") {
      delete request.body[val]
    };
  });
  request.body = {
    ...request.body,
    ...authParams
  }
  return request;
});

//添加响应拦截器
fly.interceptors.response.use(
  (response) => {
    wx.hideLoading();
    if (!response.data.success) {
      wx.showToast({
        title: response.data.msg,
        icon: 'none',
        duration: 2000
      })
      return Promise.reject(response)
    }
    return response.data; //请求成功之后将返回值返回
  },
  (err) => {
    //请求出错，根据返回状态码判断出错原因
    console.log(err);
    wx.hideLoading();
    wx.showToast({
      title: '网络异常请稍后再试',
      icon: 'none',
      duration: 2000
    })
    if (err) {
      return "请求失败";
    };
  }
);


export default fly;
