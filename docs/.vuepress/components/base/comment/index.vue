<!--
 * @Descripttion: 
 * @version: 
 * @Author: 段雄飞
 * @Date: 2019-11-26 09:56:51
 * @LastEditors: 段雄飞
 * @LastEditTime: 2019-11-26 10:40:17
 -->
<template>
   <div id="vcomments"></div>
</template>

<script>
// 文档： https://valine.js.org/quickstart.html
import Valine from 'valine';
window.AV = require('leancloud-storage')
export default {
    mounted: function(){
        this.createValine()
    },
    methods: {
        createValine () {
            const valine =  new Valine({
                el: '#vcomments',
                appId: 'SkBlHiswg8vjH0DmYQVRlDBw-gzGzoHsz',
                appKey: 'CrlxYXchw6FuMAbV1l4yL6ax',
                notify: false,
                verify: false,
                avatar: 'monsterid',
                path: window.location.pathname,
                placeholder: '同道中人,文明留言...',
                visitor: true,
                recordIP: true,
                avatar: 'monsterid'
            });
            this.valineRefresh = false
        }
    },
    watch: {
        '$route' (to, from) {
            if (to.path !==  from.path) {
                setTimeout(() => {
                    this.createValine()
                }, 300)
            }
        }
    }
}
</script>

<style lang="less" scoped>
    #vcomments {
        max-width: 750px;
        padding: 10px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }
</style>
