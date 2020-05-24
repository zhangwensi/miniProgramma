// pages/components/teacherEvent/teacherEvent.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    // 需将传递组件数据的属性做定义
    teacherListItem:Object
  },

  /**
   * 组件的初始数据
   */
  data: {
    // 定义是否添加抖动效果
    isDel:false
  },
  /**
   * 组件的方法列表
   */
  methods: {
    // 监听长按事件
    longTouch:function () {
      this.setData({
        isDel:!this.data.isDel
      })
    },
    delTl: function () {
      wx.showModal({
        title: '提示',
        content: '您确认需要删除此老师么',
        // success需改为箭头函数  让this找外层的
        success: (res) => {
          if (res.confirm) {
            console.log('用户点击确定')
            wx.showToast({
              title: '删除成功',
              icon: 'success',
              duration: 2000
            })
            this.setData({
              isDel:!this.data.isDel
            })
          } else if (res.cancel) {
            this.setData({
              isDel:!this.data.isDel
            })
          }
        }
      })
    }
  }
})
