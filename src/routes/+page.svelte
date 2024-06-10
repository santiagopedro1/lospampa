<script lang="ts">
	import LinkCard from '$lib/components/linkCard.svelte';

	const links = [
		{
			title: 'projects',
			href: '/projects',
			description: 'Check out our projects!'
		},
		{
			title: 'publications',
			href: '/publications',
			description: 'Where our members publish their work'
		}
	];

	const areas = [
		'Parallel Computing',
		'Heterogeneous Multicore Architectures',
		'Software-defined networking',
		'Cloud computing'
	];
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
			<h1 class="text-4xl">Systems Optimization Laboratory</h1>
			<p class="hidden text-center lg:block">
				Department of Computer Science | Federal University of Pampa
			</p>
			<p class="text-center lg:hidden">
				Department of Computer Science
				<br />
				Federal University of Pampa
			</p>
		</hgroup>
	</div>

	<section class="prose prose-lg dark:prose-invert">
		<p>
			With the increase in demand for services made available through embedded systems (e.g.,
			tablets and smartphones, automobiles, biomedical instruments) and the imminent growth of
			systems that provide interconnection between such devices (e.g., wireless networks, 4G, 5G,
			bluetooth technology) , there is a need for training professionals to work in the development
			of the area. In this sense, the group seeks to model and develop computational systems (e.g.,
			methods and algorithms) that aim to optimize the solution of complex problems involving
			hardware and software components in the broad areas of embedded systems and computer networks.
			In particular, the group's work is very focused on the development of technologies and
			applications that have a strong possibility of appropriation by national companies in
			conjunction with the production of scientific work with national and international impact.
		</p>
	</section>

	<div class="grid grid-cols-2 items-center gap-3 lg:gap-8">
		{#each links as { title, href, description }}
			<LinkCard
				{title}
				{description}
				{href}
			/>
		{/each}
	</div>

	<section class="prose prose-lg dark:prose-invert">
		<h2>We are currently carrying out research in the following areas:</h2>
		<ul>
			{#each areas as area}
				<li>{area}</li>
			{/each}
		</ul>
	</section>
</main>

<style>
	#logo {
		view-transition-name: logo;
	}
</style>
