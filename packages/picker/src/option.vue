<template>
    <div
        class="o-options__item"
        :class="{ 'is-active': picker.value === value }"
        @click.stop="handleOptionClick">
        {{ label }}
    </div>
</template>

<script>
import Emitter from '../../../src/mixins/emitter';

export default {
    mixins: [Emitter],

    name: 'OOption',

    componentName: 'OOption',

    inject: ['picker'],

    props: {
        value: {
            required: true
        },
        label: [String, Number]
    },

    methods: {
        handleOptionClick () {
            this.dispatch('OPicker', 'handleOptionClick', this.value);
        }
    }
};
</script>

<style scoped lang="scss">
.o-options__item {
    display: inline-block;
    height: 26px;
    line-height: 26px;
    padding: 0 10px;
    margin-right: 10px;
    color: #409EFF;
    border: 1px solid #409EFF;
    border-radius: 4px;
    cursor: pointer;
    transition: all .2s;

    &.is-active {
        color: #fff;
        background: #409EFF;
    }

    &:hover {
        box-shadow: 0 0 8px #409EFF;
    }

    &:last-child {
        margin-right: 0;
    }
}
</style>