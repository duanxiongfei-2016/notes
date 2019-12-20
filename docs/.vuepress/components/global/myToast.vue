<template>
    <transition name="fadeIn">
        <div :class="[position, type, 'toast_box']" v-show="show">
            <p>
                <i :class="[iconClass, 'icon']"></i>
                {{ text }}
                <i class="el-icon-close" @click="handleClose"></i>
            </p>
        </div>
    </transition>
</template>

<script>
export default {
    name: 'my-toast',
    props: {
        text: {
            type: String,
            required: false,
            default: '123'
        },
        position: {
            type: String,
            required: false,
            default: 'top',
            validator: val => ['top', 'middle', 'bottom'].includes(val)
        },
        type: {
            type: String,
            required: false,
            default: 'info',
            validator: val => ['info', 'success', 'warning', 'error'].includes(val)
        },
        duration: {
            type: Number,
            required: false,
            default: 3
        },
        autoClose: {
            type: Boolean,
            required: false,
            default: true
        },
        maxWidth: {
            type: Number,
            required: false,
            default: 500
        },
        callback: {
            type: Function,
            required: false,
            default: _ => {}
        }
    },
    computed: {
        iconClass () {
            const classes = {
                info: 'el-icon-info',
                success: 'el-icon-success',
                warning: 'el-icon-warning',
                error: 'el-icon-error'
            }
            return classes[this.type || 'info']
        }
    },
    data () {
        return {
            show: false
        }
    },
    mounted () {
        this.show = true
        if (this.autoClose) {
            this.remove()
        }
    },
    methods: {
        handleClose () {
            this.destroy()
        },
        remove() {
            setTimeout(_ => {
                this.destroy()
            }, this.duration * 1000 || 3000)
        },
        destroy () {
            this.callback()
            this.$destroy()
            document.body.removeChild(this.$el)
        }
    }
}
</script>

<style lang="less" scoped>
.toast_box {
    position: fixed;
    z-index: 100;
    left: 50%;
    transform: translateX(-50%);
    width: 500px;
    padding: 8px 40px 8px 15px;
    border-radius: 4px;
    p {
        margin: 0;
        .icon {
            margin-right: 8px;
        }
        .el-icon-close {
            position: absolute;
            top: 50%;
            right: 11px;
            transform: translateY(-50%);
            font-size: 18px;
            color: #c0c4cc;
        }
    }
}
.top {
    top: 20px;
}
.middle {
    top: 50%;
}
.bottom {
    bottom: 20px;
}
.info {
    background-color: #f4f4f5;
    color: #909399;
}
.success {
    background-color: #f0f9eb;
    color: #67c23a;
}
.warning {
    background-color: #fdf6ec;
    color: #e6a23c; 
}
.error {
    background-color: #fef0f0;
    color: #f56c6c;
}
.fadeIn-enter-active,
.fadeIn-leave-active {
  transition: opacity 0.3s;
}
.fadeIn-enter,
.fadeIn-leave-active {
  opacity: 0;
}
.translate-top-enter-active,
.translate-top-leave-active {
  transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.translate-top-enter,
.translate-top-leave-active {
  transform: translateY(-50%);
  opacity: 0;
}
.translate-middle-enter-active,
.translate-middle-leave-active {
  transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.translate-middle-enter,
.translate-middle-leave-active {
  transform: translateY(80%);
  opacity: 0;
}
.translate-bottom-enter-active,
.translate-bottom-leave-active {
  transition: all 0.3s cubic-bezier(0.36, 0.66, 0.04, 1);
}
.translate-bottom-enter,
.translate-bottom-leave-active {
  transform: translateY(100%);
  opacity: 0;
}
</style>
