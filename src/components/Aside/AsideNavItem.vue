<template>
	<li class="nav-group">
		<div :class="'nav-item' + (parentActive ? ' nav-item--active' : '')">
			<router-link
				tag="a"
				class="nav-link"
				:to="{ name: nav.linkName }"
				v-b-toggle="'nav-link-' + nav.name"
			>
				<span class="nav-icon">
					<fa-icon :icon="nav.icon" />
				</span>
				<span class="nav-name">
					{{ nav.name }}
				</span>
				<span class="nav-arrow" v-if="nav.pages.length">
					<fa-icon :icon="shownCollapse ? 'chevron-up' : 'chevron-down'" />
				</span>
			</router-link>
		</div>
		<b-collapse
			:id="'nav-link-' + nav.name"
			@show="toggleCollapse(true)"
			@hide="toggleCollapse(false)"
			:visible="parentActive"
			class="nav-menu"
			tag="ul"
		>
			<li
				v-for="page in nav.pages"
				:key="page.name"
				:class="
					'nav-item' + (routerName === page.linkName ? ' nav-item--active' : '')
				"
			>
				<router-link
					tag="a"
					class="nav-link"
					:to="{ name: page.linkName }"
					v-b-toggle="'nav-link-' + page.linkName"
				>
					<span class="nav-icon"> </span>
					<span class="nav-name">
						{{ page.name }}
					</span>
				</router-link>
			</li>
		</b-collapse>
	</li>
</template>
<script>
export default {
	name: 'aside-item-component',
	props: ['nav'],
	data() {
		return {
			shownCollapse: false
		};
	},
	created() {
		this.toggleCollapse(this.parentActive);
	},
	computed: {
		parentActive() {
			return (
				this.nav.linkName === this.routerName ||
				-1 !==
					this.nav.pages.map(page => page.linkName).indexOf(this.routerName)
			);
		},
		routerName() {
			return this.$route.name;
		}
	},
	methods: {
		toggleCollapse(status) {
			this.shownCollapse = status;
		}
	}
};
</script>
