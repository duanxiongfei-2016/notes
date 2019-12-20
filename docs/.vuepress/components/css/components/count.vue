<template>
    <div>
        <div class="example example1">
            <h3>德玛西亚之力</h3>
            <h3>德玛西亚皇子</h3>
            <h3>德邦总管</h3>
        </div>
        <div class="example example2">
            <h3>诸葛亮</h3>
            <h3>鲁班</h3>
            <h3>后羿</h3>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="less" scoped>
.example {
    background-color: #f1fbf6;
    padding: 15px;
    margin-bottom: 15px;
    h3 {
        font-weight: normal;
    }
}
.example1 {
    counter-reset: title; /* 重置计数器 不写默认 0开始 */
    h3 {
        &:before {
            counter-increment: title;      /* 增加计数器值 增量 默认 1 */
            content: "Title "counter(title, decimal) ": "; /* 显示计数器 字符串拼接 */
        }
    }
}
.example2 {
    counter-reset: title 9; /* 重置计数器 设置成9开始 */
    h3 {
        &:before {
            counter-increment: title 3;      /* 增加计数器值 设置 增量 3*/
            content: "Title "counter(title) ": "; /* 显示计数器 字符串拼接*/
        }
    }
}
</style>
