import path from '/statics/path.js'
import request from '/utils/request.js'
//app.js
App({
  onLaunch: function () {
    // 展示本地存储能力
    var logs = wx.getStorageSync('logs') || []
    logs.unshift(Date.now())
    wx.setStorageSync('logs', logs)

    // 登录
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        request.post(path.login + res.code, {}, this.login)
        // this.showMobileRelate()
      }
    })
    // 获取用户信息
    wx.getSetting({
      success: res => {
        if (res.authSetting['scope.userInfo']) {
          // 已经授权，可以直接调用 getUserInfo 获取头像昵称，不会弹框
          wx.getUserInfo({
            success: res => {
              // console.log('微信获取的--->', res)
              // 可以将 res 发送给后台解码出 unionId
              this.globalData.userInfo = res.userInfo

              // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
              // 所以此处加入 callback 以防止这种情况
              if (this.userInfoReadyCallback) {
                this.userInfoReadyCallback(res)
              }
            }
          })
        }
      }
    })
  },
  userInfoReadyCallback(res) {
    // console.log('获取到了信息--->', res)
    this.globalData.userInfo = res.userInfo
  },
  login(res) {
    // todo 储存token
    if (res.code === 0) {
      this.globalData.login = res.data
    } else {
      wx.showToast({
        title: '登陆失败',
        icon: 'none',
        duration: 2000
      })
    }
  },
  showMobileRelate() {
    wx.showModal({
      title: '提示',
      content: '这是一个模态弹窗',
      success(res) {
        if (res.confirm) {
          console.log('用户点击确定')
        } else if (res.cancel) {
          console.log('用户点击取消')
        }
      }
    })
  },
  globalData: {
    login: null,
    userInfo: null
  }
})