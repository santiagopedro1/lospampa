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

<hgroup>
	<h1>{data.meta.title}</h1>
	<p>{data.meta.description}</p>
</hgroup>

<div>
	<svelte:component this={data.content} />
</div>
