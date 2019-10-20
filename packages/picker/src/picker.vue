<template>
    <div class="o-picker">
        <div
            v-if="title"
            class="o-picker__title"
            :style="{ width: titleWidth + 'px', flex: `0 0 ${titleWidth}px` }">
            {{ title }}
        </div>
        <div
            class="o-options"
            :class="{'o-options--expand': isExpand}"
            ref="optionsListWrap">
            <div class="o-options__list" ref="optionsList">
                <slot></slot>
            </div>
        </div>
        <span
            class="o-option-btn"
            v-show="isMoreBtnShow"
            @click="isExpand = !isExpand">
            {{ isExpand ? '收起' : '展开' }}
            <o-icon name="arrow-down" :class="['o-option-btn__icon', {'o-option-btn__icon--expand': isExpand}]"></o-icon>
        </span>
    </div>
</template>

<script>
import { throttle } from '../../../src/utils/common';

const OPTION_WRAP_HEIGHT = 32; // 对应css中设置的高度。

export default {
    name: 'OPicker',

    componentName: 'OPicker',

    provide () {
        return {
            'picker': this
        };
    },

    computed: {
        isMoreBtnShow () {
            return this.optionsListHeight > OPTION_WRAP_HEIGHT;
        }
    },

    props: {
        /**
         * @model
         */
        value: {
            required: true
        },

        /**
         * 标题
         */
        title: String,

        /**
         * 标题宽度
         */
        titleWidth: {
            type: String,
            default: '80'
        },

        /**
         * 是否默认展开
         */
        expand: {
            type: Boolean,
            default: false
        }
    },

    data () {
        return {
            optionsListWrapHeight: 0,
            optionsListHeight: 0,
            isExpand: this.expand
        };
    },

    methods: {
        handleOptionSelect (value) {
            this.$emit('input', value);
            if (this.value !== value) {
                /**
                 * 选项改变
                 * @property {value,string} value - 已选中的选项的值
                 */
                this.$emit('change', value);
            }
        },

        setOptionListHeight () {
            this.optionsListHeight = this.$refs.optionsList.offsetHeight;
        }
    },

    created () {
        this.$on('handleOptionClick', this.handleOptionSelect);
    },

    mounted () {
        this.setOptionListHeight();
        window.addEventListener('resize', throttle(this.setOptionListHeight, 200));
    }
};
</script>

<style scoped lang="scss">
$height: 32px;

.o-picker {
    display: flex;

    .o-picker__title {
        text-align: right;
        height: $height;
        line-height: $height;
    }

    .o-options {
        flex: 1;
        min-height: $height;
        max-height: $height;
        line-height: $height;
        overflow: hidden;
        transition: max-height .2s;

        @at-root #{&}--expand {
            max-height: 400px;
        }
    }

    .o-option-btn {
        flex: 0 0 44px;
        height: 28px;
        line-height: 28px;
        padding: 0 4px;
        margin-top: 2px;
        text-align: center;
        border-radius: 4px;
        color: #fff;
        font-size: 12px;
        background: #00adb5;
        cursor: pointer;

        .o-option-btn__icon {
            display: inline-block;
            transition: transform .2s;

            @at-root #{&}--expand {
                transform: rotate(180deg);
            }
        }
    }
}
</style>