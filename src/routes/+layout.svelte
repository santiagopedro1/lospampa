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
	<header class="px-8">
		<div class="grid grid-cols-3 px-12 py-2">
			{#if $page.url.pathname !== '/'}
				<a
					href={'/'}
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
				class="flex items-center justify-center justify-self-center rounded-full bg-card px-4 shadow-md"
			>
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
			<div class="flex items-center gap-4 justify-self-end">
				<ThemeToggle />
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
