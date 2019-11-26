<!--
 * @Descripttion: 
 * @version: 
 * @Author: 段雄飞
 * @Date: 2019-11-26 14:46:03
 * @LastEditors: 段雄飞
 * @LastEditTime: 2019-11-26 15:39:30
 -->
<template>
    <div class="reward">
            <div class="logo" @click="centerDialogVisible = true">赏</div>
            <div><p>如果文章帮到你，</p></div>
            <div><p>随意打赏请小编喝杯咖啡吧~</p></div>
            <div><p>V●ᴥ●V</p></div>
            <el-dialog
                title="打赏请随意，一分也是爱！"
                :visible.sync="centerDialogVisible"
                width="400px"
                center
            >
                <el-tabs v-model="payType" type="border-card">
                    <el-tab-pane label="支付宝" name="Alipay">
                         <el-image
                            style="width: 318px; height: 431px"
                            src="/assets/images/common/Alipay.jpeg"
                            fit="cover" />
                    </el-tab-pane>
                    <el-tab-pane label="微信" name="Wechat">
                        <el-image
                            style="width: 318px; height: 431px"
                            src="/assets/images/common/Wechat.jpeg"
                            fit="cover" />
                    </el-tab-pane>
                </el-tabs>
                <span slot="footer" class="dialog-footer">
                    <el-button @click="centerDialogVisible = false">取 消</el-button>
                </span>
            </el-dialog>
    </div>
</template>

<script>
export default {
    data () {
        return {
            centerDialogVisible: false,
            payType: 'Alipay'
        }
    }
}
</script>

<style lang="less" scoped>
.reward {
    padding: 15px;
    text-align: center;
    .logo {
        width: 60px;
        height: 60px;
        border-radius: 30px;
        background-color: #e71f29;
        margin: 10px auto;
        color: #fff;
        line-height: 60px;
        text-align: center;
        font-size: 24px;
        font-weight: 600;
        cursor: pointer;
        &:hover {
            box-shadow: 1px 1px 6px rgba(0, 0, 0, .3);
        }
    }
    > div > p {
        display: inline-block;
        background-image: linear-gradient(90deg,red,#7a081b,#b8485b,#cece08);
        margin: 0;
        background-clip: text;
        color: transparent;
    }
    /deep/ .el-tabs__item {
        width: 175px;
        padding: 0;
        text-align: center;
    }
}
</style>
