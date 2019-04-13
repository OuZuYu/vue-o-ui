<template>
    <section>
        <h2>loading</h2>
        <p>loading</p>

        <h2>实例</h2>

        <div class="demo">
          <button @click="toggleLoading">开启loading</button>
          <o-loading v-model="loading" bottom="10" top="10" color="black"></o-loading>
          <pre v-highlight>
            <code class="html">
              &lt;button @click=&quot;toggleLoading&quot;&gt;开启loading&lt;/button&gt;
              &lt;o-loading v-model=&quot;loading&quot; bottom=&quot;10&quot; top=&quot;10&quot; color=&quot;black&quot;&gt;&lt;/o-loading&gt;
            </code>
            <code class="javascript">
              export default {
                data () {
                  return {
                    loading: false
                  }
                },
                methods: {
                  toggleLoading () {
                    this.loading = true;
                    setTimeout(() => {
                      this.loading = false;
                    }, 1000);
                  }
                }
              }
            </code>
          </pre>
        </div>

        <h2>loading props</h2>
        <my-table :data="iconPropsData" :columns="iconPropsCol"></my-table>
    </section>
</template>

<script>
import myTable from '../../components/table'

export default {
  components: { myTable },

  data () {
    return {
      loading: false,
      iconPropsData: [{
        '参数': 'value',
        '说明': '绑定值',
        '可选值': '--',
        '默认值': '--'
      }, {
        '参数': 'left',
        '说明': '距左边距离',
        '可选值': '--',
        '默认值': '--'
      }, {
        '参数': 'right',
        '说明': '距右边距离',
        '可选值': 'icon名称',
        '默认值': 'icon名称'
      }, {
        '参数': 'bottom',
        '说明': '据下边距离',
        '可选值': '--',
        '默认值': '--'
      }, {
        '参数': 'top',
        '说明': '距上边距离',
        '可选值': '--',
        '默认值': '--'
      }, {
        '参数': 'color',
        '说明': '背景色',
        '可选值': 'black / white',
        '默认值': 'white'
      }, {
        '参数': 'size',
        '说明': 'loading图表大小',
        '可选值': 'small / medium / large',
        '默认值': 'small'
      }, {
        '参数': 'fullscreen',
        '说明': '是否全屏loading',
        '可选值': 'true / false',
        '默认值': 'false'
      }, ],
      iconPropsCol: ['参数', '说明', '可选值', '默认值']
    }
  },
  methods: {
    toggleLoading () {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
