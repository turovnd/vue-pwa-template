<template>
	<b-nav-item-dropdown right class="user-dropdown">
		<template slot="button-content">
			{{ user.name }}
		</template>
		<b-dropdown-item
			v-for="item in buttons"
			:key="item.link"
			:to="{ name: item.link }"
		>
			<span class="icon">
				<fa-icon :icon="item.icon" />
			</span>
			<span class="name">
				{{ item.name }}
			</span>
		</b-dropdown-item>
	</b-nav-item-dropdown>
</template>
<script>
export default {
	name: 'user-dropdown-component',
	data() {
		return {
			buttons: [
				{ name: 'Account', link: 'Account', icon: 'user' },
				{ name: 'Settings', link: 'Settings', icon: 'cog' },
				{ name: 'Logout', link: 'Logout', icon: 'sign-out-alt' }
			]
		};
	},
	computed: {
		user() {
			return { name: 'User name' };
		}
	},
	methods: {
		logout() {
			this.$store.dispatch('user/logout');
		}
	}
};
</script>
