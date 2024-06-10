<script lang="ts">
	import * as Card from '$lib/components/ui/card';

	export let title: string;
	export let where: string;
	export let who: Array<string>;
</script>

<Card.Root>
	<Card.Header>
		<Card.Title>{title}</Card.Title>
		<Card.Description>{where}</Card.Description>
	</Card.Header>
	<Card.Content>
		<p>Authors: {who.join('; ')}</p>
	</Card.Content>
</Card.Root>
