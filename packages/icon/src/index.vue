<template>
  <i :class="'icon-' + name" @click="handleClick"></i>
</template>

<script>
  /**
   * 图标组件
   * @displayName OIcon
   */
  export default {
    name: 'OIcon',

    props: {
      /**
       * select框的placeholder
       */
      name: String
    },

    methods: {
      handleClick (e) {
        /**
         * 点击事件
         *
         * @type {function}
         */
        this.$emit('click', e);
      }
    }
  };
</script>

<style lang="scss" scoped>
@font-face {
  font-family: 'icomoon';
  src:  url('fonts/icomoon.eot?qsbdgs');
  src:  url('fonts/icomoon.eot?qsbdgs#iefix') format('embedded-opentype'),
    url('fonts/icomoon.ttf?qsbdgs') format('truetype'),
    url('fonts/icomoon.woff?qsbdgs') format('woff'),
    url('fonts/icomoon.svg?qsbdgs#icomoon') format('svg');
  font-weight: normal;
  font-style: normal;
}

[class^="icon-"], [class*=" icon-"] {
  /* use !important to prevent issues with browser extensions that change fonts */
  font-family: 'icomoon' !important;
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  line-height: 1;

  /* Better Font Rendering =========== */
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.icon-check:before {
  content: "\e904";
}
.icon-menu1:before {
  content: "\e905";
}
.icon-minus:before {
  content: "\e906";
}
.icon-plus:before {
  content: "\e907";
}
.icon-trash:before {
  content: "\e908";
}
.icon-cross:before {
  content: "\e909";
}
.icon-arrow-down:before {
  content: "\e900";
}
.icon-arrow-left:before {
  content: "\e901";
}
.icon-arrow-right:before {
  content: "\e902";
}
.icon-arrow-up:before {
  content: "\e903";
}
</style>
