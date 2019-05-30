// components/custom-tab-bar/custom-tab-bar.js
const app = getApp()
Component({
  /**
   * 组件的属性列表
   */
  properties: {

  },

  /**
   * 组件的初始数据
   */
  data: {
    selected: 0,
    color: "#7A7E83",
    selectedColor: "#ffe000",
    list: [
      {
        pagePath: "/pages/index/index",
        iconPath: "/images/home.png",
        selectedIconPath: "/images/home-select.png",
        text: "首页"
      }, {
        pagePath: "/pages/parttime/parttime",
        iconPath: "/images/person.png",
        selectedIconPath: "/images/person-select.png",
        text: "招聘"
      }, {
        pagePath: "/pages/users/home/home",
        iconPath: "/images/my.png",
        selectedIconPath: "/images/my-select.png",
        text: "我的"
      }
    ]
  },
  /**
   * 生命周期函数，可以为函数，或一个在methods段中定义的方法名
   */
  lifetimes: {
    created() {
      // 在组件实例刚刚被创建时执行
    },
    attached() {
      // 在组件实例进入页面节点树时执行
    },
    ready() {
      // 在组件在视图层布局完成后执行
    },
    moved() {
      // 在组件实例被移动到节点树另一个位置时执行
    },
    detached() {
      // 在组件实例被从页面节点树移除时执行
    },
    error() {
      // 每当组件方法抛出错误时执行
    }
  },
  /**
   * 组件所在页面的生命周期函数
   */
  pageLifetimes: {
    show() {},
    hide() {},
    resize() {},
  },
  /**
   * 组件的方法
   */
  methods: {
    switchTab(e) {
      const data = e.currentTarget.dataset
      const url = data.path
      wx.switchTab({ url })
      this.setData({
        selected: data.index
      })
    }
  }
})
