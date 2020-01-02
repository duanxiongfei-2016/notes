<!-- myToast.vue -->
<template>
  <transition :name="`transtion-${position}`">
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
      default: '',
    },
    position: {
      type: String,
      required: false,
      default: 'top',
      validator: val => ['topCenter', 'rightTop', 'rightBottom'].includes(val),
    },
    type: {
      type: String,
      required: false,
      default: 'info',
      validator: val => ['info', 'success', 'warning', 'error'].includes(val),
    },
    duration: {
      type: Number,
      required: false,
      default: 3,
    },
    autoClose: {
      type: Boolean,
      required: false,
      default: true,
    },
    callback: {
      type: Function,
      required: false,
      default: _ => {},
    },
  },
  computed: {
    iconClass() {
      const classList = {
        info: 'el-icon-info',
        success: 'el-icon-success',
        warning: 'el-icon-warning',
        error: 'el-icon-error',
      }
      return classList[this.type || 'info']
    },
  },
  data() {
    return {
      show: false,
      timer: null,
    }
  },
  mounted() {
    this.show = true
    this.autoClose && this.remove()
  },
  methods: {
    handleClose() {
      clearTimeout(this.timer)
      this.timer = null
      this.destroy()
    },
    remove() {
      this.timer = setTimeout(_ => {
        clearTimeout(this.timer)
        this.timer = null
        this.destroy()
      }, this.duration * 1000 || 3000)
    },
    destroy() {
      this.show = false
      const timer = setTimeout(
        _ => {
          this.callback()
          clearTimeout(timer)
          this.$destroy()
          document.body.removeChild(this.$el)
        },
        this.position === 'topCenter' ? 300 : 500
      )
    },
  },
}
</script>

<style lang="less" scoped>
.toast_box {
  position: fixed;
  z-index: 100000;
  width: 400px;
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
.topCenter {
  top: 20px;
  left: 50%;
  transform: translateX(-50%);
}
.rightTop {
  top: 20px;
  right: 20px;
}
.rightBottom {
  bottom: 20px;
  right: 20px;
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

.transtion-topCenter-enter-active,
.transtion-topCenter-leave-active {
  transition: all 0.3s;
}
.transtion-topCenter-enter,
.transtion-topCenter-leave-to {
  opacity: 0;
  top: 0;
}
.transtion-rightBottom-enter-active,
.transtion-rightBottom-leave-active,
.transtion-rightTop-enter-active,
.transtion-rightTop-leave-active {
  transition: all 0.5s;
}
.transtion-rightBottom-enter,
.transtion-rightBottom-leave-to,
.transtion-rightTop-enter,
.transtion-rightTop-leave-to {
  opacity: 0;
  right: -60%;
}
</style>
