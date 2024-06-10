<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
</script>

<svelte:head>
	<title>{data.meta.title}</title>
	<meta
		property="og:type"
		content="article"
	/>
	<meta
		property="og:title"
		content={data.meta.title}
	/>
</svelte:head>

<div class="container mb-8 space-y-8 px-12">
	<hgroup class="space-y-4">
		<h1 class="text-7xl">
			{data.meta.title}
		</h1>
		<p class="text-lg">
			{data.meta.description}
		</p>
	</hgroup>

	<img
		src={data.meta.coverImage}
		alt=""
		style={`view-transition-name: ${data.meta.title}-cover;`}
		class="mx-auto max-w-2xl"
	/>
</div>

<article class="prose mx-auto dark:prose-invert lg:prose-lg">
	<svelte:component this={data.content} />
</article>
