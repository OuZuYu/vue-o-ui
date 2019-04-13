<template>
    <div class="steps">
        <div class="step__content">
            <slot></slot>
        </div>

        <div class="step__footer">
            <button class="step__btn" @click="prev">{{ prevText }}</button>
            <button class="step__btn" @click="next">{{ nextText }}</button>
        </div>
    </div>
</template>

<script>
export default {
    name: 'OSteps',

    props: {
        value: {
            type: Number,
            required: true,
            default: 0
        },

        onPrev: {
            type: Function,
            default() {},
        },

        onNext: {
            type: Function,
            default() {},
        },

        prevText: {
          type: String,
          default: '上一步',
        },

        nextText: {
          type: String,
          default: '下一步',
        }
    },

    data () {
        return {
            steps: [],
            curIndex: this.value
        };
    },

    computed: {
    },


    methods: {
        setActiveIndex(index) {
            this.$children.forEach((item, i) => {
                if (i !== index) {
                    item.active = false;
                } else {
                    item.active = true;
                }
            });
        },

        prev () {
            if (this.curIndex > 0) {
                this.curIndex -= 1;
                this.setActiveIndex(this.curIndex);
                this.$emit('input', this.curIndex);
                this.onPrev(this.curIndex);
            }
        },

        next () {
            if (this.curIndex < this.steps.length - 1) {
                this.curIndex += 1;
                this.setActiveIndex(this.curIndex);
                this.$emit('input', this.curIndex);
                this.onNext(this.curIndex);
            } else {
                this.$emit('lastStep');
            }
        }
    },

    mounted () {
        this.setActiveIndex(this.curIndex);
    },

    watch: {
        value (val) {
          this.curIndex = val;
          this.setActiveIndex(this.curIndex);
        }
    },
};
</script>

<style lang="scss" scoped>
.steps {
    background: #fff;

    .step__content {
        padding: 20px;
    }

    .step__footer {
        display: flex;
        justify-content: space-between;
        padding: 30px;

        .step__btn {
            border: 0;
            background: #409eff;
            color: #fff;
            padding: 6px 10px;
            border-radius: 6px;
            cursor: pointer;
            outline: 0;

            &:hover {
                background: #66b1ff;
            }
        }
    }
}
</style>