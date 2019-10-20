```
<template>
    <div class="demo">
      <o-steps v-model="currentStep" :next-text="currentStep === 1 ? '完成' : '下一步'" :on-next="onNext" :on-prev="onPrev" @lastStep="handleLastStep">
          <o-step>
              步骤一
          </o-step>
          <o-step>
              步骤二
          </o-step>
      </o-steps>
    </div>
</template>

<script>
// 实际使用时不需引入
import OStep from './step'

export default {
  components: { OStep },

  data () {
    return {
      currentStep: 0,
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
```