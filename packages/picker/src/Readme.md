```
<template>
  <div>
    <p>请试着拖动窗口，宽度不足时显示展开收起按钮。</p>
    <div class="picker-wrap">
      <o-picker title="兴趣：" v-model="interest" @change="handleChange">
        <o-option v-for="interest in interests" :label="interest.label" :value="interest.value" :key="interest.id"></o-option>
      </o-picker>
    </div>
  </div>
</template>

<script>
// 实际使用时不需引入该组件
import OOption from './option'

export default {
  components: { OOption },

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
    }
  },
  methods: {
    handleChange (value) {
      console.log(value)
    }
  }
}
</script>

<style>
.picker-wrap {
  width: 50%;
}
</style>
```