<template>
    <section>
        <h2>icon</h2>
        <p>图标</p>

        <h2>实例</h2>

        <div class="demo">
          arrow-up：<o-icon class="icon-item" name="arrow-up"></o-icon>
          arrow-down：<o-icon class="icon-item" name="arrow-down"></o-icon>
          arrow-left：<o-icon class="icon-item" name="arrow-left"></o-icon>
          arrow-right：<o-icon class="icon-item" name="arrow-right"></o-icon>
          plus：<o-icon class="icon-item" name="plus"></o-icon>
          minus：<o-icon class="icon-item" name="minus"></o-icon>
          check：<o-icon class="icon-item" name="check"></o-icon>
          cross：<o-icon class="icon-item" name="cross"></o-icon>
          trash：<o-icon class="icon-item" name="trash"></o-icon>

          <pre v-highlight>
            <code class="html">
              &lt;o-icon class=&quot;icon-item&quot; name=&quot;arrow-up&quot;&gt;&lt;/o-icon&gt;
              &lt;o-icon class=&quot;icon-item&quot; name=&quot;arrow-down&quot;&gt;&lt;/o-icon&gt;
              &lt;o-icon class=&quot;icon-item&quot; name=&quot;arrow-left&quot;&gt;&lt;/o-icon&gt;
              &lt;o-icon class=&quot;icon-item&quot; name=&quot;arrow-right&quot;&gt;&lt;/o-icon&gt;
            </code>
          </pre>
        </div>

        <h2>icon props</h2>
        <my-table :data="iconPropsData" :columns="iconPropsCol"></my-table>
    </section>
</template>

<script>
import myTable from '../../components/table'

export default {
  components: { myTable },

  data () {
    return {
      iconPropsData: [{
        '参数': 'name',
        '说明': 'icon名称'
      }],
      iconPropsCol: ['参数', '说明']
    }
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.icon-item {
    margin-right: 30px;
}
</style>
