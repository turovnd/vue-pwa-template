<template>
	<div class="">
		Not found
	</div>
</template>
<script>
export default {
	name: 'NotFound',
	methods: {
		goBack() {
			this.$router.history.go(-1);
		}
	}
};
</script>
