<template>
    <div
        v-show="value"
        ref="loading"
        class="o-loading-wrap"
        :class="[fullscreen ? 'o-loading--fullscreen' : '', {
            'o-loading--black-bg': color === 'black',
            'o-loading--white-bg': color === 'white'
        }]"
        :style="style">
        <div class="o-loading__icon">
            <div class="lds-css ng-scope">
                <div class="lds-spinner" :class="size">
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { getStyle } from '../../../src/utils/dom';

const POSITION_CLASS = 'o-loading-parent';

export default {
    name: 'OLoading',

    props: {
        /**
         * @model
         */
        value: Boolean,

        /**
         * 距顶部像素
         */
        top: String,

        /**
         * 距底部像素
         */
        bottom: String,

        /**
         * 距右边像素
         */
        right: String,

        /**
         * 距右边像素
         */
        left: String,

        /**
         * 距右边像素
         * `black, white`
         */
        color: { // black white
            type: String,
            default: 'white'
        },

        /**
         * loading 图标大小
         * `small, medium, large`
         */
        size: { // small medium large
            type: String,
            default: 'small'
        },

        /**
         * 是否全屏 loading
         */
        fullscreen: {
            type: Boolean,
            default: false
        }
    },

    data() {
        return {
            parent: null
        }
    },

    computed: {
        style () {
            return {
                left: this.left + 'px',
                top: this.top + 'px',
                bottom: this.bottom + 'px',
                right: this.right + 'px',
            }
        }
    },

    methods: {
        setPrentPosition () {
            let originalPosition = getStyle(this.parent, 'position');

            if (originalPosition !== 'absolute' && originalPosition !== 'fixed') {
                this.parent.classList.add(POSITION_CLASS)
            }
        }
    },

    mounted () {
        this.parent = this.$refs.loading.parentNode;
        this.setPrentPosition();
    },

    watch: {
        value (val) {
            if (val) {
                this.setPrentPosition();
            } else {
                let classList = this.parent.classList;

                if (classList.contains(POSITION_CLASS)) {
                    classList.remove(POSITION_CLASS);
                }
            }
        }
    },
}
</script>

<style lang="scss" scoped>
@keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
@-webkit-keyframes lds-spinner {
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
}
.lds-spinner {
  position: relative;
}
.lds-spinner div {
  left: 94px;
  top: 48px;
  position: absolute;
  -webkit-animation: lds-spinner linear 1s infinite;
  animation: lds-spinner linear 1s infinite;
  background: #399e33;
  width: 12px;
  height: 24px;
  border-radius: 40%;
  -webkit-transform-origin: 6px 52px;
  transform-origin: 6px 52px;
}
.lds-spinner div:nth-child(1) {
  -webkit-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-animation-delay: -0.916666666666667s;
  animation-delay: -0.916666666666667s;
}
.lds-spinner div:nth-child(2) {
  -webkit-transform: rotate(30deg);
  transform: rotate(30deg);
  -webkit-animation-delay: -0.833333333333333s;
  animation-delay: -0.833333333333333s;
}
.lds-spinner div:nth-child(3) {
  -webkit-transform: rotate(60deg);
  transform: rotate(60deg);
  -webkit-animation-delay: -0.75s;
  animation-delay: -0.75s;
}
.lds-spinner div:nth-child(4) {
  -webkit-transform: rotate(90deg);
  transform: rotate(90deg);
  -webkit-animation-delay: -0.666666666666667s;
  animation-delay: -0.666666666666667s;
}
.lds-spinner div:nth-child(5) {
  -webkit-transform: rotate(120deg);
  transform: rotate(120deg);
  -webkit-animation-delay: -0.583333333333333s;
  animation-delay: -0.583333333333333s;
}
.lds-spinner div:nth-child(6) {
  -webkit-transform: rotate(150deg);
  transform: rotate(150deg);
  -webkit-animation-delay: -0.5s;
  animation-delay: -0.5s;
}
.lds-spinner div:nth-child(7) {
  -webkit-transform: rotate(180deg);
  transform: rotate(180deg);
  -webkit-animation-delay: -0.416666666666667s;
  animation-delay: -0.416666666666667s;
}
.lds-spinner div:nth-child(8) {
  -webkit-transform: rotate(210deg);
  transform: rotate(210deg);
  -webkit-animation-delay: -0.333333333333333s;
  animation-delay: -0.333333333333333s;
}
.lds-spinner div:nth-child(9) {
  -webkit-transform: rotate(240deg);
  transform: rotate(240deg);
  -webkit-animation-delay: -0.25s;
  animation-delay: -0.25s;
}
.lds-spinner div:nth-child(10) {
  -webkit-transform: rotate(270deg);
  transform: rotate(270deg);
  -webkit-animation-delay: -0.166666666666667s;
  animation-delay: -0.166666666666667s;
}
.lds-spinner div:nth-child(11) {
  -webkit-transform: rotate(300deg);
  transform: rotate(300deg);
  -webkit-animation-delay: -0.083333333333333s;
  animation-delay: -0.083333333333333s;
}
.lds-spinner div:nth-child(12) {
  -webkit-transform: rotate(330deg);
  transform: rotate(330deg);
  -webkit-animation-delay: 0s;
  animation-delay: 0s;
}
.lds-spinner {
    &.small {
        width: 80px !important;
        height: 80px !important;
        -webkit-transform: translate(-40px, -40px) scale(0.4) translate(40px, 40px);
        transform: translate(-40px, -40px) scale(0.4) translate(40px, 40px);
    }

    &.medium {
        width: 148px !important;
        height: 148px !important;
        -webkit-transform: translate(-74px, -74px) scale(0.74) translate(74px, 74px);
        transform: translate(-74px, -74px) scale(0.74) translate(74px, 74px);
    }

    &.large {
        width: 200px !important;
        height: 200px !important;
        -webkit-transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
        transform: translate(-100px, -100px) scale(1) translate(100px, 100px);
    }
}

.o-loading-wrap {
    position: absolute;
    z-index: 1000;
    margin: 0;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    &.o-loading--fullscreen {
        position: fixed !important;
    }

    &.o-loading--black-bg {
        background: rgba(0, 0, 0, .8)
    }

    &.o-loading--white-bg {
        background: rgba(255, 255, 255, .9)
    }

    .o-loading__icon {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        text-align: center
    }
}
</style>

<style>
.o-loading-parent {
  position: relative !important;
}
</style>
