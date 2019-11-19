<template>
	<div class="codeBlock">
        <div class="view_box">
            <slot name="view"></slot>   
        </div>
        <el-divider content-position="left">{{ title }}</el-divider>
        <div class="my_divider">
            <slot class="explain" name="explain"></slot>
            <p>
                <el-tooltip content="隐藏代码" placement="right" v-if="isShowCode">
                    <i class="iconfont iconcode1" @click="showCode"></i>
                </el-tooltip>
                <el-tooltip content="显示代码" placement="right" v-else>
                    <i class="iconfont iconcode" @click="showCode"></i>
                </el-tooltip>
            </p>
        </div>
        <collapse-transition>
            <div class="code_area_box" v-show="isShowCode">
                <el-divider content-position="left"></el-divider>
                <el-tooltip content="复制代码" placement="right" class="copy_tooltip" v-if="!isCopyed">
                    <i class="el-icon-document-copy" v-clipboard:copy="copyData" v-clipboard:success="handleCopySuccess"></i>
                </el-tooltip>
                <el-tooltip content="复制成功" placement="right" class="copy_tooltip" v-else>
                    <i class="el-icon-check" style="color: #67C23A;" @mouseleave="handleMouseleave"></i>
                </el-tooltip>
                <slot name="code"></slot>
            </div>
        </collapse-transition>
	</div>
</template>

<script>
export default {
	name: 'codeBlock',
	data () {
		return {
            isCopyed: false,
            isShowCode: false
		}
    },
    props: {
        title: {
            required: false,
            type: String,
            default: '此处核心代码价值一个亿'
        }    
    },
    computed: {
        copyData () {
            return this.$slots.code[0].data.directives[0].value
        }   
    },
    methods: {
        showCode () {
            this.isShowCode = !this.isShowCode
        },
        handleCopySuccess () {
            this.isCopyed = true
        },
        handleMouseleave () {
            this.isCopyed = false
        }
    }
}
</script>

<style lang="less" scoped>
.codeBlock {
    border: 1px solid #ebeef5;
    box-shadow: 0 2px 12px 0 rgba(0,0,0,.1);
    border-radius: 4px;
    transition: .3s;
    .view_box {
        padding: 20px;
    }
    .my_divider {
        padding: 0 35px 10px 20px;
        p {
            margin: 0 0 10px 0;
            font-size: 12px;
        }
        > p {
            margin: -27px -15px 0 0;
            font-size: 16px;
            text-align: right;
            i:hover {
                cursor: pointer;
            }
        }
    }
    .copy_tooltip {
        cursor: pointer;
    }
    .code_area_box {
        .el-divider {
            margin: 0 0 12px 0;
            background: transparent;
            border-bottom: 1px dashed #ebedf0
        }
        i {
            margin-left: calc(100% - 30px);
        }
    }
}
</style>
