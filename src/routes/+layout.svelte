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
		<div class="flex items-center justify-around py-2 lg:px-12">
			{#if $page.url.pathname !== '/'}
				<a
					href={'/'}
					class="object-fill p-2"
					id="logo"
				>
					<img
						src="/lospampa.png"
						alt=""
						width={32}
						height={32}
						class="size-8"
					/>
				</a>
			{:else}
				<div class="size-12"></div>
			{/if}

			<nav class="flex items-center justify-center rounded-full bg-card px-4 shadow-md">
				{#each links as { title, href }}
					{@const active = $page.url.pathname === href ? 'page' : null}
					<a
						aria-current={active}
						{href}
						class="px-4 py-2 font-bold capitalize hover:underline {active
							? 'pointer-events-none text-primary hover:no-underline'
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
	<div class="container py-8 lg:px-24">
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
