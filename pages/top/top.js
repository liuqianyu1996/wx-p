Page({
  data: {
    searchVal: []
  },
  onLoad: function (e) {
    let thisPage = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/top250',
      method: 'GET',
      success: function (res) {
        console.log(res)
        thisPage.setData({
          searchVal: res.data.subjects
        })
      }
    })
  }
})
