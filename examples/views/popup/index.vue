<template>
    <section>
        <h2>popup</h2>
        <p>
            右侧弹出窗
        </p>

        <h2>实例</h2>

        <div class="demo">
          <button @click="isPupupShow = !isPupupShow">切换弹窗</button>
          <o-popup title-location="center" @open="handleOpen" @close="handleClose" title="右弹窗标题" :visible.sync="isPupupShow">
            右侧弹出窗内容
          </o-popup>

          <pre v-highlight>
            <code class="html">
              &lt;o-popup title-location=&quot;center&quot; @open=&quot;handleOpen&quot; @close=&quot;handleClose&quot; title=&quot;右弹窗标题&quot; :visible.sync=&quot;isPupupShow&quot;&gt;
                右侧弹出窗内容
              &lt;/o-popup&gt;
            </code>
            <code class="javascript">
              export default {
                data () {
                  return {
                    isPupupShow: true,
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
            </code>
          </pre>
        </div>

        <h2>popup props</h2>
        <my-table :data="popupPropsData" :columns="popupPropsCol"></my-table>

        <h2>事件</h2>
        <my-table :data="eventData" :columns="eventCol"></my-table>
    </section>
</template>

<script>
import myTable from '../../components/table'

export default {
  components: { myTable },
  data () {
    return {
      isPupupShow: true,

      // popup props
      popupPropsCol: ['参数', '说明', '可选值', '默认值'],
      popupPropsData: [{
        '参数': 'visible',
        '说明': '是否显示弹窗',
        '可选值': 'true / false',
        '默认值': '--'
      }, {
        '参数': 'title',
        '说明': '弹窗标题',
        '可选值': '--',
        '默认值': '--'
      }, {
        '参数': 'width',
        '说明': '弹窗宽度',
        '可选值': '--',
        '默认值': '600'
      }, {
        '参数': 'title-location',
        '说明': '弹窗标题位置',
        '可选值': 'left / center',
        '默认值': 'left'
      }, {
        '参数': 'z-index',
        '说明': '弹窗z-index',
        '可选值': '--',
        '默认值': '2999'
      }],

      // 事件
      eventData: [{
        '事件': 'open',
        '说明': '弹窗打开时触发'
      }, {
        '事件': 'close',
        '说明': '弹窗关闭时触发'
      }],
      eventCol: ['事件', '说明']
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

<style lang="scss" scoped>

</style>
