<template>
	<div class="app">
		<AsideMain />
		<div class="app-body">
			<AppHeader />
			<b-container>
				<main>
					<router-view />
				</main>
			</b-container>
		</div>
	</div>
</template>

<script>
import AppHeader from '@/components/Header/Header';
import AsideMain from '@/components/Aside/Aside';

export default {
	name: 'main-layout',
	components: {
		AppHeader,
		AsideMain
	}
};
</script>
