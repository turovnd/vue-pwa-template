<template>
	<aside class="app-aside">
		<div class="header">
			<router-link tag="a" class="brand" :to="{ name: 'Home' }">
				<img
					src="@/assets/images/logo.png"
					class="brand-img"
					alt="Brand logo"
				/>
			</router-link>
			<a class="menu-btn" @click="toggleAside">
				<fa-icon :icon="asideHide ? 'indent' : 'outdent'" />
			</a>
		</div>
		<div class="content">
			<ul class="nav">
				<AsideNavItem :nav="nav" v-for="nav in navigation" :key="nav.id" />
			</ul>
		</div>
	</aside>
</template>

<script>
import AsideNavItem from './AsideNavItem';

export default {
	name: 'aside-component',
	components: {
		AsideNavItem
	},
	data() {
		return {
			asideHide: false,
			navigation: [
				{
					name: 'Loyalty',
					icon: 'layer-group',
					pages: [
						{ name: 'Page 1', linkName: '' },
						{ name: 'Page 2', linkName: '' }
					]
				},
				{
					name: 'Rewards',
					icon: 'award',
					linkName: '',
					pages: []
				}
			]
		};
	},
	created() {
		window.onresize = this.checkScreenSize;
		this.checkScreenSize();
	},
	methods: {
		toggleAside() {
			document.body.classList.toggle('app-aside--hidden');
			this.asideHide = !this.asideHide;
		},
		checkScreenSize() {
			if (
				window.innerWidth < 992 &&
				!document.body.classList.contains('app-aside--hidden')
			) {
				this.toggleAside();
			}
		}
	}
};
</script>
