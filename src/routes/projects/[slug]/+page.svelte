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

<img
	src={data.meta.coverImage}
	alt=""
	style={`view-transition-name: ${data.meta.title}-cover;`}
	class="mx-auto w-full lg:w-2/3"
/>

<hgroup>
	<h1 style={`view-transition-name: ${data.meta.title}-title;`}>
		{data.meta.title}
	</h1>
	<p style={`view-transition-name: ${data.meta.title}-description;`}>
		{data.meta.description}
	</p>
</hgroup>

<div>
	<svelte:component this={data.content} />
</div>
