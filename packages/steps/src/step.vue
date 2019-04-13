<template>
    <div class="step-panel" v-show="active">
        <slot></slot>
    </div>
</template>

<script>
export default {
    name: 'OStep',

    props: {
        title: String,
        description: String,
        isActive: Boolean,
    },

    data () {
        return {
            step: {},
            active: this.isActive
        };
    },

    computed: {
    },

    methods: {
    },

    created () {
        this.step = {
          title: this.title,
          description: this.description,
          isActive: this.isActive,
        };
        this.$parent.steps.push(this.step);
    }
};
</script>

<style lang="scss" scoped>
</style>