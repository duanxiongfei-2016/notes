<template>
	<div>
		<el-avatar
			shape="circle"
			:size="50"
			fit="fill"
			:src="avatarPic"
		/>
	</div>
</template>

<script>
export default {
	name: 'avatar',
	data () {
		return {
			avatarPic: require('$img/common/head.png')
		}
	}
}
</script>

<style lang="less" scoped>
/deep/ img {
	margin: 0;
}
</style>
