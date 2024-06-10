<script lang="ts">
	import type { Project } from '$lib/types';
	import * as Card from './ui/card';

	export let projeto: Project;
</script>

<a href={'projects/' + projeto.slug}>
	<Card.Root>
		<Card.Header>
			<img
				src={projeto.coverImage}
				alt={projeto.title}
				class="w-full"
				style={`view-transition-name: ${projeto.title}-cover;`}
			/>
			<Card.Title class="text-4xl">
				{projeto.title}
			</Card.Title>
		</Card.Header>
		<Card.Content>
			<p class="h-[72px] text-base">
				{projeto.description}
			</p>
		</Card.Content>
	</Card.Root>
</a>
