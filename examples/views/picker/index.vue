<template>
    <section>
        <h2>picker</h2>
        <p>
            选择器，多用于筛选，宽度不足时，提供折叠功能。
        </p>

        <h2>实例</h2>

        <div class="demo">
          <p>请试着拖动窗口，宽度不足时显示展开收起按钮。</p>
          <div class="demo__wrap">
            <o-picker title="兴趣：" v-model="interest" @change="handleChange">
              <o-option v-for="interest in interests" :label="interest.label" :value="interest.value" :key="interest.id"></o-option>
            </o-picker>
          </div>


          <pre v-highlight>
            <code class="html">
              &lt;o-picker title=&quot;兴趣：&quot; v-model=&quot;interest&quot; @change=&quot;handleChange&quot;&gt;
                &lt;o-option v-for=&quot;interest in interests&quot; :label=&quot;interest.label&quot; :value=&quot;interest.value&quot; :key=&quot;interest.id&quot;&gt;&lt;/o-option&gt;
              &lt;/o-picker&gt;
            </code>
            <code class="javascript">
              export default {
                  data () {
                    return {
                      interests: [{
                        id: 1,
                        label: '足球',
                        value: 'football'
                      }, {
                        id: 2,
                        label: '篮球',
                        value: 'basketball'
                      }, {
                        id: 3,
                        label: '音乐',
                        value: 'music'
                      }, {
                        id: 4,
                        label: '看书',
                        value: 'reading'
                      }, {
                        id: 5,
                        label: '烹饪',
                        value: 'cooking'
                      }, {
                        id: 6,
                        label: '乒乓球',
                        value: 'pingpong'
                      }, {
                        id: 7,
                        label: '游泳',
                        value: 'swimming'
                      }],
                      interest: 'football'
                    }
                  },
                  methods: {
                    handleChange (value) {
                      console.log(value)
                    }
                  }
              }
            </code>
          </pre>
        </div>

        <h2>picker props</h2>
        <my-table :data="pickerPropsData" :columns="pickerPropsCol"></my-table>

        <h2>option props</h2>
        <my-table :data="optionPropsData" :columns="optionPropsCol"></my-table>

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
      interests: [{
        id: 1,
        label: '足球',
        value: 'football'
      }, {
        id: 2,
        label: '篮球',
        value: 'basketball'
      }, {
        id: 3,
        label: '音乐',
        value: 'music'
      }, {
        id: 4,
        label: '看书',
        value: 'reading'
      }, {
        id: 5,
        label: '烹饪',
        value: 'cooking'
      }, {
        id: 6,
        label: '乒乓球',
        value: 'pingpong'
      }, {
        id: 7,
        label: '游泳',
        value: 'swimming'
      }],
      interest: 'football',

      // picker props
      pickerPropsCol: ['参数', '说明', '可选值', '默认值'],
      pickerPropsData: [{
        '参数': 'value',
        '说明': '绑定值',
        '可选值': '--',
        '默认值': '--'
      }, {
        '参数': 'title',
        '说明': '标题',
        '可选值': '--',
        '默认值': '--'
      }, {
        '参数': 'titleWidth',
        '说明': '标题宽度',
        '可选值': '--',
        '默认值': '80'
      }, {
        '参数': 'expand',
        '说明': '是否默认展开。',
        '可选值': 'true / false',
        '默认值': 'false'
      }],

      // option props
      optionPropsData:[{
        '参数': 'value',
        '说明': '绑定值'
      }, {
        '参数': 'label',
        '说明': '显示的文字'
      }],
      optionPropsCol:['参数', '说明'],

      // 事件
      eventData: [{
        '事件': 'change',
        '说明': '选择option时触发'
      }],
      eventCol: ['事件', '说明']
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style lang="scss" scoped>
.demo__wrap {
  width: 50%;
}
</style>
