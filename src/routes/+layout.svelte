<script lang="ts">
	import '../app.pcss';

	import { LL } from '$lib/i18n/i18n-svelte';

	import ThemeToggle from '$lib/components/themeToggle.svelte';
	import LangSelect from '$lib/components/langSelect.svelte';

	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	import type { LayoutData } from './$types';
	import { onMount } from 'svelte';

	export let data: LayoutData;

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});

	onMount(() => {
		if (document.cookie.includes('theme=dark')) {
			document.documentElement.classList.add('dark');
		}
	});
</script>

<div
	class="bg-background text-foreground {data.theme === 'dark' ? 'dark' : ''}"
	id="app"
>
	<header class="px-8">
		<div class="grid grid-cols-3 px-12 py-2">
			{#if $page.url.pathname !== '/'}
				<a
					href="/"
					class="justify-self-start px-4 py-2"
					id="logo"
				>
					<img
						src="/lospampa.png"
						alt=""
						width={32}
						height={32}
					/>
				</a>
			{:else}
				<div class="h-12 w-16 justify-self-start px-4 py-2"></div>
			{/if}

			<nav
				class="flex items-center justify-center justify-self-center rounded-full border bg-card px-4"
			>
				{#each Object.entries($LL.LINKS) as [_, { title, href }]}
					<a
						href={href()}
						class="px-4 py-2 font-bold capitalize hover:underline {$page.route.id?.includes(href())
							? 'border-b border-primary text-primary'
							: ''}"
					>
						{title()}
					</a>
				{/each}
			</nav>
			<div class="flex items-center gap-4 justify-self-end">
				<ThemeToggle currentTheme={data.theme} />
				<LangSelect currentLocale={data.locale} />
			</div>
		</div>
	</header>
	<div class="mx-auto min-h-screen px-24 py-16">
		<slot></slot>
	</div>
</div>

<style>
	header {
		view-transition-name: header;
	}

	#logo {
		view-transition-name: logo;
	}
</style>
