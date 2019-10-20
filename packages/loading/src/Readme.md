```
<template>
  <div class="loading-wrap">
    <button @click="toggleLoading">开启loading</button>
    <o-loading v-model="loading" bottom="30" top="30"></o-loading>
  </div>
</template>

<script>
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
</script>

<style>
.loading-wrap {
  width: 100%;
  height: 300px;
  background: #eeeeee;
}
</style>
```