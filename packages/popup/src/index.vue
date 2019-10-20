<template>
    <transition name='o-popup-slice'>
        <div
            class="o-popup"
            @click.self="handleWrapperClick"
            v-show="visible"
            :style="{'z-index': zIndex, width: !closeOnClickModal ? width + 'px' : '100%', left:  !closeOnClickModal ? 'auto' : 0}">
            <div class="o-popup__view" :style="{width: closeOnClickModal ? width + 'px' : '100%'}">
                <div
                    v-if="title"
                    :class="['o-popup__title', titleLocation ? 'o-popup__title--' + titleLocation : '']">
                    <o-icon class="close-btn" name="cross" @click.stop="handleClose"></o-icon>
                    <span class="o-popup__title--text">{{ title }}</span>
                </div>
                <div class="o-popup__content" ref="popup" v-if="rendered">
                    <slot></slot>
                </div>
            </div>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'OPopup',

    props: {
        /**
         * 是否显示弹框
         */
        visible: Boolean,
        /**
         * 是否点击蒙层关闭
         */
        closeOnClickModal: {
            type: Boolean,
            default: false
        },
        /**
         * 弹框标题
         */
        title: {
            type: String,
            default: ''
        },
        /**
         * 弹框宽度
         */
        width: {
            type: String,
            default: '600'
        },
        /**
         * 标题位置
         */
        titleLocation: { // left center
            type: String,
            default: 'left'
        },
        /**
         * z-index
         */
        zIndex: {
            type: String,
            default: '2999'
        }
    },
    data () {
        return {
            rendered: false
        };
    },
    methods: {
        handleWrapperClick () {
            if (!this.closeOnClickModal) return;
            this.handleClose();
        },
        handleClose () {
            this.$emit('update:visible', false);
        }
    },
    mounted () {
        if (this.visible) {
            /**
             * 打开弹框时
             */
            this.$emit('open');
            this.rendered = true;
        }
    },
    watch: {
        visible (val) {
            if (val) {
                this.$emit('open');
                this.rendered = true;
                this.$nextTick(() => {
                    this.$refs.popup.scrollTop = 0;
                });
            } else {
                /**
                 * 关闭弹框时
                 */
                this.$emit('close');
            }
        }
    }
};
</script>

<style lang="scss" scoped>
.o-popup {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    &.o-popup-slice-enter-active, &.o-popup-slice-leave-active{
      transition: all .3s
    }
    &.o-popup-slice-enter, &.o-popup-slice-leave-to{
      transform: translate3d(100%, 0, 0);
    }

    .o-popup__view  {
        position: absolute;
        top: 0;
        right: 0;
        height: 100%;
        background: #fff;
        box-shadow: -5px 0 14px #888888;
        height: 100%;
        padding-bottom: 10px;

        .o-popup__title {
            position: relative;
            background: linear-gradient(88deg, #485563, #29323c);
            color: #fff;
            font-size: 18px;
            padding: 14px 20px;
            letter-spacing: .6px;

            .o-popup__title--text {
                display: inline-block;
                width: 100%;
            }

            &.o-popup__title--center {
                .o-popup__title--text {
                    text-align: center;
                }
                .close-btn {
                    left: 20px;
                }
            }

            &.o-popup__title--left {
                .o-popup__title--text {
                    text-align: left;
                }
                .close-btn {
                    right: 20px;
                }
            }

            .close-btn {
                position: absolute;
                top: 50%;
                font-size: 22px;
                transform: translate(0, -50%);
                cursor: pointer;
                transition: color .4s;
                &:hover {
                    color: #F86C6B;
                }
            }
        }

        .o-popup__content {
            height: 100%;
            overflow-y: auto;
            &::-webkit-scrollbar {
                display:none
            }
        }
    }
}
</style>