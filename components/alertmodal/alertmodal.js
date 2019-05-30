// components/modal/modal.js
const app = getApp()
/**
 * 自定义modal浮层
 */

Component({

  /**
   * 组件的属性列表
   */
  properties: {
    //是否显示modal
    show: {
      type: Boolean,
      value: false
    },
    //modal的高度
    height: {
      type: String,
      value: '80%'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {
    clickMask() {
      // this.setData({show: false})
    },

    cancel() {
      this.setData({ show: false })
      console.log('用户点击取消')
      this.triggerEvent('cancel')
    },

    confirm() {
      this.setData({ show: false })
      console.log('用户点击确定')
      this.triggerEvent('confirm')
    },

    // 获取手机号
    getPhoneNumber (e) {
      if (e.detail.encryptedData && e.detail.iv) {
        console.log(e)
        // 去后台解密手机号
        // this.decrypt({ iv: e.detail.iv, encrypt_data: e.detail.encryptedData})
      } else {
        wx.showModal({
          title: '提示',
          content: '您已取消获取手机号',
          showCancel: false
        })
      }
    },

    // 后台解密手机号
    decrypt (params) {
      wx.showLoading({
        title: '获取中...',
        mask: true
      })
      wx.request({
        url: 'https://api.dghang.com/api/v1/auths/mini/decrypt',
        data: Object.assign({}, params, { code: app.globalData.code }),
        header: {
          Accept: 'application/json',
          ContentType: 'application/x-www-form-urlencoded'
        },
        method: 'POST',
        success: res => {
          if (res.statusCode === 200) {
            wx.hideLoading()
            console.log(res)
          } else {
            wx.hideLoading()
            wx.showModal({
              title: '解密失败',
              content: '请手动输入',
              showCancel: false
            })
          }
        },
        fail: res => {
          wx.hideLoading()
          wx.showModal({
            title: '解密失败',
            content: '请手动输入',
            showCancel: false
          })
        }
      })
    },
  }
})
