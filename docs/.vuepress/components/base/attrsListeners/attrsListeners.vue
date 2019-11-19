<!-- A.vue -->
<template>
    <div class="CmpA">
        <h4>我是A组件</h4>
        <p>我的msg: <span style="color: #00f;">{{ msg }}</span></p>
        <p>C组件的msg: <span style="color: #00f;">{{ cmpCMsg }}</span></p>
        <cmp-b v-bind="$attrs" :msg="msg" @update="handleUpdate" />
    </div>
</template>

<script>
import CmpB from './components/b'
export default {
    name: 'CmpA',
    data () {
        return {
            msg: '我是A组件的msg',
            cmpCMsg: ''
        }
    },
    components: {
        CmpB
    },
    methods: {
        handleUpdate (value) {
            this.cmpCMsg = value
        }
    }
}
</script>

<style scoped>
.CmpA {
    background-color: #0f0;
    padding: 20px;
}
</style>
