<script lang="ts">
	import '../app.pcss';

	import ThemeToggle from '$lib/components/themeToggle.svelte';

	import { onNavigate } from '$app/navigation';
	import { page } from '$app/stores';

	const links = [
		{
			title: 'projects',
			href: '/projects'
		},
		{
			title: 'publications',
			href: '/publications'
		}
	];

	onNavigate((navigation) => {
		if (!document.startViewTransition) return;

		return new Promise((resolve) => {
			document.startViewTransition(async () => {
				resolve();
				await navigation.complete;
			});
		});
	});
</script>

<div class="bg-background text-foreground">
	<header class="px-1 lg:px-8">
		<div class="flex items-center justify-between py-2 lg:px-12">
			{#if $page.url.pathname !== '/'}
				<a
					href={'/'}
					class="px-4 py-2"
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
				<div class="h-12 w-16 px-4 py-2"></div>
			{/if}

			<nav class="flex items-center justify-center rounded-full bg-card px-4 shadow-md">
				{#each links as { title, href }}
					<a
						{href}
						class="px-4 py-2 font-bold capitalize hover:underline {$page.route.id?.includes(href)
							? 'text-primary'
							: ''}"
					>
						{title}
					</a>
				{/each}
			</nav>
			<div class="flex items-center gap-4">
				<ThemeToggle />
			</div>
		</div>
	</header>
	<div class="container py-16 lg:px-24">
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
