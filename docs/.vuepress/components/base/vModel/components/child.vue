<!-- child.vue -->
<template>
  <div class="child">
    <h4>I'm child Component</h4>
    <h1 style="color: #5cbb7a; border: none;">{{ spanVal }}</h1>
    <el-button type="success" @click="handleClick">点我 +1</el-button>
  </div>
</template>

<script>
export default {
  name: 'child',
  model: {
    prop: 'val',
    event: 'update',
  },
  props: {
    val: {
      required: false,
      default: '',
      type: Number,
    },
  },
  computed: {
    spanVal: {
      get() {
        return this.val
      },
      set(newVal) {
        this.$emit('update', newVal)
      },
    },
  },
  methods: {
    handleClick() {
      this.spanVal += 1
    },
  },
}
</script>

<style lang="less" scoped>
.child {
  background: #0ff;
  border-radius: 5px;
  padding: 10px 15px;
}
</style>
