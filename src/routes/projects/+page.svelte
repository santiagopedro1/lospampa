<script lang="ts">
	import type { PageData } from './$types';

	import { LL } from '$lib/i18n/i18n-svelte';

	import ProjectCard from '$lib/components/projectCard.svelte';

	export let data: PageData;
</script>

<svelte:head>
	<title>{$LL.projects.title()} - LOS Unipampa</title>
</svelte:head>

<section class="grid gap-8">
	<h1 class="text-4xl font-bold">{$LL.projects.title()}</h1>
	<p>{$LL.projects.sub()}</p>

	<ul class="grid grid-cols-1 gap-16 lg:grid-cols-3">
		{#each data.posts as projeto}
			<li
				class="group h-fit w-full rounded-xl border-2 border-transparent transition duration-200 ease-in-out hover:border-green-500"
			>
				<ProjectCard {projeto} />
			</li>
		{/each}
	</ul>
</section>
