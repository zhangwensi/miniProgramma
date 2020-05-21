// pages/curesBind/curesBind.js
Page({

  _handle: function () {
    this.data.indexData.unshift("d")
    this.setData({
      indexData:this.data.indexData
    })
  },
  /**
   * 页面的初始数据
   */
  data: {
    indexData:[
      "a","b","c"
    ],
    curesItem:[
      {
        curesImg:'/pages/assets/images/2.jpg',
        title:'如何学习计算机技术',
        indures:'计算机',
        persons:2300,
        isStar:true
      },
      {
        curesImg:'/pages/assets/images/2.jpg',
        title:'如何快速致富',
        indures:'致富',
        persons:300,
        isStar:false
      }
    ]
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
    // 增加3s后增加列表数据
    this.data.curesItem.push({
      curesImg:'/pages/assets/images/2.jpg',
      title:'如何快速成为学霸',
      indures:'学习霸王',
      persons:5000,
      isStar:true
    })
    setTimeout(()=>{
      this.setData({
        curesItem:this.data.curesItem
      })
    },3000)
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