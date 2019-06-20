<template>
	<b-nav-item-dropdown right no-caret>
		<template slot="button-content">
			<fa-icon icon="language" />
		</template>
		<b-dropdown-item
			v-for="item in languages"
			:key="item.id"
			@click="changeLocale(item.id)"
			:active="$i18n.locale === item.id"
		>
			{{ item.label }}
		</b-dropdown-item>
	</b-nav-item-dropdown>
</template>
<script>
export default {
	name: 'language-dropdown-component',
	data() {
		return {
			languages: this.$store.state.locales
		};
	},
	methods: {
		changeLocale(lang) {
			localStorage.setItem('lang', lang);
			this.$i18n.locale = lang;
		}
	}
};
</script>
