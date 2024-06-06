<script lang="ts">
	import { publications } from '$lib/publications';
</script>

<svelte:head>
	<title>Our publications - LOS Unipampa</title>
</svelte:head>

<main class="space-y-12">
	<h1>Our publications</h1>

	<div>
		<h2>Journals</h2>
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
		<h2>Conferences</h2>
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
