<template>
	<header class="app-header">
		<b-container>
			<div class="content">
				<div class="logo-block">
					<img src="@/assets/images/logo.png" alt="App logo" class="logo-img" />
				</div>
				<b-navbar-nav class="nav">
					<LanguageDropdown />
					<AlertDropdown />
					<UserDropdown />
				</b-navbar-nav>
			</div>
		</b-container>
	</header>
</template>
<script>
import UserDropdown from './UserDropdown.vue';
import AlertDropdown from './AlertDropdown.vue';
import LanguageDropdown from './LanguageDropdown.vue';

export default {
	name: 'header-component',
	components: {
		UserDropdown,
		AlertDropdown,
		LanguageDropdown
	},
	computed: {
		feedPostsPage() {
			return this.$store.state.route.name === 'Feed';
		},
		role() {
			return this.$store.getters['account/getRole'];
		}
	},
	methods: {
		sidebarToggle(e) {
			e.preventDefault();
			document.body.classList.toggle('sidebar-hidden');
		},
		mobileSidebarToggle(e) {
			e.preventDefault();
			document.body.classList.toggle('sidebar-mobile-show');
		}
	}
};
</script>
