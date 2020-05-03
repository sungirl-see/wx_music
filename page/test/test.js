// page/test/test.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  onReady:function(){
    // wx.request({
    //   url: 'https://api.uomg.com/api/rand.music?sort=热歌榜&format=json',
    //   success:res=>{
        
    //     console.log(res.data.data.url)
    //   }
    // })
    var audioCtx=wx.createAudioContext('myAudio')
    audioCtx.src="https://webfs.yun.kugou.com/202005020844/c3aad14af8cee8300c34777afed40544/G207/M07/15/07/r5QEAF6pKO2AV7vFADgHSzAbfK0134.mp3"
    audioCtx.onPlay(function(){
      console.log('开始播放')
    })
    audioCtx.onError(function(res){
      console.log(res.errMsg)
    })
    audioCtx.play()
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
 

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

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