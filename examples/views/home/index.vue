<template>
  <div class="home">
      <div class="home-sidebar">
        <sidebar></sidebar>
      </div>

      <div class="home-content">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
import sidebar from './components/sidebar'

export default {
  name: 'home',

  components: {
    sidebar
  }
}
</script>

<style lang="scss" scoped>
.home {
    display: flex;
    padding: 20px;

    #{&}-sidebar {
      flex: 0 0 200px;
    }

    #{&}-content {
      flex: 1;

      /deep/ h2 {
        font-weight: 400;
        color: #1f2f3d;
        font-size: 20px;
        margin: 20px 0;
      }

      /deep/ p {
        font-size: 14px;
        color: #333;
        line-height: 1.5em;
        margin-bottom: 20px;
      }

      /deep/ .demo {
        border: 1px solid #eee;
        padding: 30px;
        margin-bottom: 20px;
        background: #eee;
      }

      /deep/ pre {
        line-height: 22px;
      }
    }
}
</style>

