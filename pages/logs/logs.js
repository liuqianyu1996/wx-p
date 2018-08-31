Page({
  data: {
    cursorPos: 5,
    focus: true,
    searchVal: []
  },
  bindinput: function (e) {
    let thisPage = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/search',
      data: {
        q: e.detail.value
      },
      method: 'GET',
      success: function(res) {
        console.log(res)
        thisPage.setData({
          searchVal: res.data.subjects
        })
      }
    })
  }
})
