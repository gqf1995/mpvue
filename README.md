# vue_miniprogram

> vue_miniprogram

## Build Setup

``` bash
# ui库使用方式
1.colorUi库为主使用，github地址: https://github.com/weilanwl/ColorUI/

2.wux 小程序原生ui库辅助使用，github地址: https://github.com/wux-weapp/wux-weapp/
按需单独引入不要全局引入。 参考src/app.json 自定义顶部导航栏引入

#开发注意
1.参考mpvue官方文档, 请勿使用不支持的vue语法

2.小程序生命周期 /src/App.vue 中onLaunch方法 在/src/main.js 中二次调用

3.请勿使用jq 和 其他非小程序或vue开发的第三方ui。 小程序打包后限制大小2M, 请勿过多引用第三方

4.在style属性中使用 rpx 为单位 1rpx=0.5px 禁止使用px，css属性中可使用px

5.请勿修改 /dist下文件


# 安装依赖
npm install

# 开发时构建
npm dev

# 打包构建
npm build

# 指定平台的开发时构建(微信、百度、头条、支付宝)
npm dev:wx
npm dev:swan
npm dev:tt
npm dev:my

# 指定平台的打包构建
npm build:wx
npm build:swan
npm build:tt
npm build:my

# 生成 bundle 分析报告
npm run build --report
```

------

