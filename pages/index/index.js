//index.js

Page({
  data: {
    imgUrls: [
      'http://img02.tooopen.com/images/20150928/tooopen_sy_143912755726.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175866434296.jpg',
      'http://img06.tooopen.com/images/20160818/tooopen_sy_175833047715.jpg'
    ],
    move: []
  },
  loadMove: function() {
    let thisPage = this;
    wx.request({
      url: 'http://t.yushu.im/v2/movie/in_theaters',
      header: {
        'Content-Type': "application/json"
      },
      method: 'GET',
      success: function(res) {
        console.log(res);
        thisPage.setData({
          move: res.data.subjects
        })
      }
    })
  },
  onLoad: function() {
    this.loadMove();
  }
})
