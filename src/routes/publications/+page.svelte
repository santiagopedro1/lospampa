<script lang="ts">
	import { LL } from '$lib/i18n/i18n-svelte';
	import { publications } from '$lib/publications';
</script>

<svelte:head>
	<title>{$LL.publications.title()} - LOS Unipampa</title>
</svelte:head>

<main class="space-y-12">
	<h1>{$LL.publications.title()}</h1>

	<div>
		<h2>{$LL.publications.journals()}</h2>
		<div class="prose dark:prose-invert lg:prose-lg">
			<ul>
				{#each publications.journal as item}
					<li>
						{item.who.join('; ')} <span class="font-extrabold text-foreground">{item.title}</span>
						<span class="italic">{item.where}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>

	<div>
		<h2>{$LL.publications.conferences()}</h2>
		<div class="prose dark:prose-invert lg:prose-lg">
			<ul>
				{#each publications.conference as item}
					<li>
						{item.who} <span class="font-extrabold text-foreground">{item.title}</span>
						<span class="italic">{item.where}</span>
					</li>
				{/each}
			</ul>
		</div>
	</div>
</main>
