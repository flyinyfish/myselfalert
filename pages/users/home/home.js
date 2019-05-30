// pages/users/home/home.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
    if (typeof this.getTabBar === 'function' && this.getTabBar()) {
      this.getTabBar().setData({
        selected: 2,
        list: [
          {
            pagePath: "/pages/index/index",
            iconPath: "../images/home.png",
            selectedIconPath: "../images/home-select.png",
            text: "new首页"
          }, {
            pagePath: "/pages/parttime/parttime",
            iconPath: "../images/person.png",
            selectedIconPath: "../images/person-select.png",
            text: "new招聘"
          }, {
            pagePath: "/pages/users/home/home",
            iconPath: "../images/my.png",
            selectedIconPath: "../images/my-select.png",
            text: "new我的"
          }
        ]
      })
    }
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})