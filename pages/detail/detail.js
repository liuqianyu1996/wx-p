Page({
  data: {
   move: []
  },
  loadMove: function (id) {
    let thisPage = this;
    wx.request({
      url: `http://t.yushu.im/v2/movie/subject/${id}`,
      header: {
        'Content-Type': "application/json"
      },
      method: 'GET',
      success: function (res) {
        console.log(res);
        thisPage.setData({
          move: res.data
        })
      }
    })
  },
  onLoad: function (query) {
    console.log(query);
    this.loadMove(query.id);
  }
})
