var app = getApp();
var host = 'https://dgbao.com/api/';

function post(path, data, doSuccess) {
  wx.request({
    //项目的真正接口，通过字符串拼接方式实现
    url: host + path,
    header: {
      "accept": "application/json",
      "content-type": "application/x-www-form-urlencoded"
    },
    data: data,
    method: 'POST',
    success: function (res) {
      //参数值为res.data,直接将返回的数据传入
      doSuccess(res.data);
    },
    fail: function (res) {
      // doFail();
      console.log('post error-->', res)
      wx.showToast({
        title: '数据获取失败',
        icon: 'none',
        duration: 2000
      })
    },
  })
}

function get() {
  wx.request({
    url: '',
    data: '',
    header: {},
    method: 'GET',
    success: function(res) {},
    fail: function(res) {},
    complete: function(res) {},
  })
}
module.exports.post = post;
module.exports.get = get;
