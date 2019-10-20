```
<template>
    <div>
      <button @click="isPupupShow = !isPupupShow">切换弹窗</button>
      <o-popup title-location="center" @open="handleOpen" @close="handleClose" title="右弹窗标题" :visible.sync="isPupupShow">
        右侧弹出窗内容
      </o-popup>
    </div>
</template>

<script>
export default {
  data () {
    return {
      isPupupShow: false
    }
  },
  methods: {
    handleOpen () {
      console.log('右侧弹窗打开')
    },

    handleClose () {
      console.log('右侧弹窗关闭')
    }
  }
}
</script>
```