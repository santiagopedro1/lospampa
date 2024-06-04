<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import LinkCard from '$lib/components/linkCard.svelte';
</script>

<svelte:head>
	<title>LOS Unipampa</title>
</svelte:head>

<main class="flex flex-col items-center justify-center gap-8">
	<div class="flex flex-col items-center gap-4 lg:flex-row">
		<img
			src="/lospampa.png"
			alt="LosPampa logo"
			class="w-72"
			id="logo"
		/>
		<hgroup class="text-center">
			<h1 class="text-4xl">{$LL.hero.title()}</h1>
			<p class="hidden text-center lg:block">
				{$LL.hero.sub[0]()}
				|
				{$LL.hero.sub[1]()}
			</p>
			<p class="text-center lg:hidden">
				{$LL.hero.sub[0]()}
				<br />
				{$LL.hero.sub[1]()}
			</p>
		</hgroup>
	</div>

	<section class="prose prose-lg dark:prose-invert">
		<p>
			{$LL.intro()}
		</p>
	</section>

	<div class="flex gap-8">
		{#each Object.entries($LL.LINKS) as [_, { title, href, subtitle }]}
			<LinkCard
				title={title()}
				description={subtitle()}
				href={href()}
			/>
		{/each}
	</div>

	<section class="prose prose-lg dark:prose-invert">
		<h2>{$LL.currentAreas.title()}</h2>
		<ul>
			{#each Object.entries($LL.currentAreas.areas) as [_, area]}
				<li>{area()}</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	#logo {
		view-transition-name: logo;
	}
</style>
