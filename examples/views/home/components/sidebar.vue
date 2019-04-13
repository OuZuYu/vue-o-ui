<template>
    <ul class="sidebar">
      <li class="sidebar-item" v-for="nav in navs" :key="nav.name">
        <router-link class="sidebar-link" :to="nav.to">{{ nav.name }}</router-link>
      </li>
    </ul>
</template>

<script>
import sidebarData from './sidebarData'

export default {
  name: 'sidebar',

  data () {
    return {
      navs: sidebarData
    }
  },

  components: {
  }
}
</script>

<style lang="scss" scoped>
.sidebar-item {
  list-style: none;
  margin-bottom: 10px;

  .sidebar-link {
    color: #333;
    text-decoration: none;

    &:hover {
      color: #249838;
    }

    &.router-link-active {
      font-weight: bold;
      color:#00b5d4;
    }
  }
}
</style>
