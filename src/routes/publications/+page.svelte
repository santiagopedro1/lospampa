<script lang="ts">
	import PublicationCard from '$lib/components/publicationCard.svelte';
	import { publications } from '$lib/publications';
</script>

<svelte:head>
	<title>Our publications - LOS Unipampa</title>
</svelte:head>

<main class="space-y-10">
	<h1>Our publications</h1>

	<div class="container">
		<div class="space-y-4">
			<h2>Journals</h2>
			<div class="space-y-8">
				{#each publications.journal as item}
					<PublicationCard {...item} />
				{/each}
			</div>
		</div>
		<div class="space-y-4">
			<h2>Conferences</h2>
			<div class="space-y-8">
				{#each publications.conference as item}
					<PublicationCard {...item} />
				{/each}
			</div>
		</div>
	</div>
</main>
