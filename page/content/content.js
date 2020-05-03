// page/content/content.js
Page({

  /**
   * 页面的初始数据
   */ 
  data: {
    item:0,
    tab:0,
    playList:[
      {
      id:1,
      title:'彩云归',
      singer:'叶洛洛',
      src:'https://webfs.yun.kugou.com/202005020844/c3aad14af8cee8300c34777afed40544/G207/M07/15/07/r5QEAF6pKO2AV7vFADgHSzAbfK0134.mp3',
      coverImgUrl:'/image/old.jpg'
      },
      {
        id:2,
        title:'夜曲',
        singer:'周杰伦',
        src:'https://webfs.yun.kugou.com/202005020902/4b81f100a886b0dfb2eb48151668637f/G218/M01/01/07/eocBAF6qjs2ABG-LADwI0wXoLhE030.mp3',
        coverImgUrl:'/image/zhoujielun.jpg'
        },
        {
          id:3,
          title:'出山',
          singer:'花粥',
          src:'https://webfs.yun.kugou.com/202005020844/c3aad14af8cee8300c34777afed40544/G207/M07/15/07/r5QEAF6pKO2AV7vFADgHSzAbfK0134.mp3',
          coverImgUrl:'/image/mounten.jpg'
          },
          {
            id:4,
            title:'光点',
            singer:'肖战',
            src:'https://webfs.yun.kugou.com/202005020844/c3aad14af8cee8300c34777afed40544/G207/M07/15/07/r5QEAF6pKO2AV7vFADgHSzAbfK0134.mp3',
            coverImgUrl:'/image/point.jpg'
            },
  ],
  state:'paused',
  playIndex:0,
  play:{
    currentTime:'00:00',
    duration:'00:00',
    percent:0,
    title:'',
    singer:'',
    coverImgUrl:'/image/old.jpg'
  }
  },
  audioCtx:null,
  changeItem:function(e){
    this.setData({
      item:e.target.dataset.item
    })
  },
  changeTab:function(e){
    // console.log(e)
    this.setData({
      tab:e.detail.current
    })
  },
  change:function(e){
    // console.log(e)
    this.setMusic(e.currentTarget.dataset.index)
    this.play()
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
    // 创建实例
    this.audioCtx=wx.createInnerAudioContext()
  },
  setMusic:function(index){
    var music=this.data.playList[index]
    this.audioCtx.src=music.src
    this.setData({
      playIndex:index,
      'play.title':music.title,
      'play.singer':music.singer,
      'play.coverImgUrl':music.coverImgUrl,
      'play.currentTime':'00:00',
      'play.duration':'00:00',
      'play.percent':0
    })
    // this.audioCtx.play()
  },
  play:function(){
    this.audioCtx.play()
    this.setData({state:'running'})
  },
  pause:function(){
    this.audioCtx.pause()
    this.setData({state:'paused'})
  },
  next:function(){
    var index=this.data.playIndex>=this.data.playList.length-1?0:this.data.playIndex+1
    this.setMusic(index)
    if(this.data.state==='running'){
      this.play()
    }
  },
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