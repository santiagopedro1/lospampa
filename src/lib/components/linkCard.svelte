<script lang="ts">
	import * as Card from '$lib/components/ui/card';
	import { Button } from './ui/button';

	export let title: string;
	export let description: string;
	export let href: string;
</script>

<a
	{href}
	class="group"
>
	<Card.Root class="border-2 transition-colors duration-200 group-hover:border-primary">
		<Card.Header>
			<Card.Title class="capitalize">{title}</Card.Title>
			<Card.Description>{description}</Card.Description>
		</Card.Header>
		<Card.Content>
			<Button class="gap-2">
				See more
				<svg
					xmlns="http://www.w3.org/2000/svg"
					width="24"
					height="24"
					viewBox="0 0 24 24"
					fill="none"
					stroke="currentColor"
					stroke-width="2"
					stroke-linecap="round"
					stroke-linejoin="round"
				>
					<path d="M5 12h14" />
					<path d="m12 5 7 7-7 7" />
				</svg>
			</Button>
		</Card.Content>
	</Card.Root>
</a>
