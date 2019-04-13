<template>
    <section>
        <h2>steps</h2>

        <p>步骤操作</p>

        <h2>实例</h2>

        <div class="demo">
          <o-steps v-model="currentStep" :next-text="currentStep === 1 ? '完成' : '下一步'" :on-next="onNext" :on-prev="onPrev" @lastStep="handleLastStep">
              <o-step>
                  步骤一
              </o-step>
              <o-step>
                  步骤二
              </o-step>
          </o-steps>

          <pre v-highlight>
            <code class="html">
              &lt;o-steps v-model=&quot;currentStep&quot; :nextText=&quot;currentStep === 1 ? '完成' : '下一步'&quot; :on-next=&quot;onNext&quot; :on-prev=&quot;onPrev&quot; @lastStep=&quot;handleLastStep&quot;&gt;
                &lt;o-step&gt;
                  步骤一
                &lt;/o-step&gt;
                &lt;o-step&gt;
                  步骤二
                &lt;/o-step&gt;
              &lt;/o-steps&gt;
            </code>
            <code class="javascript">
              export default {
                data () {
                  return {
                    currentStep: 0
                  }
                },
                methods: {
                  onNext () {
                    console.log('下一步')
                  },

                  onPrev () {
                    console.log('上一步')
                  },

                  handleLastStep () {
                    console.log('最后一步')
                  }
                }
              }
            </code>
          </pre>
        </div>

        <h2>steps props</h2>
        <my-table :data="stepsPropsData" :columns="stepsPropsCol"></my-table>

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
      currentStep: 0,

      // steps props
      stepsPropsCol: ['参数', '说明', '可选值', '默认值'],
      stepsPropsData: [{
        '参数': 'value',
        '说明': '绑定值',
        '可选值': '--',
        '默认值': '--'
      }, {
        '参数': 'prev-text',
        '说明': '控制上一步按钮文字',
        '可选值': '--',
        '默认值': '上一步'
      }, {
        '参数': 'next-text',
        '说明': '控制下一步按钮的文字',
        '可选值': '--',
        '默认值': '下一步'
      }, {
        '参数': 'on-prev',
        '说明': '上一步时触发的方法',
        '可选值': '--',
        '默认值': '--'
      }, {
        '参数': 'on-next',
        '说明': '下一步时触发的方法',
        '可选值': '--',
        '默认值': '--'
      }],

      // 事件
      eventData: [{
        '事件': 'lastStep',
        '说明': '点击最后一步时触发'
      }],
      eventCol: ['事件', '说明']
    }
  },
  methods: {
    onNext () {
      console.log('下一步')
    },

    onPrev () {
      console.log('上一步')
    },

    handleLastStep () {
      console.log('最后一步')
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
