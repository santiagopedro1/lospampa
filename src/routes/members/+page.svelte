<script lang="ts">
	import TeamMemberCard from '$lib/components/TeamMemberCard.svelte';

	import { members } from '$lib/teamMembers';
</script>

<main class="space-y-4">
	<h1 class="text-4xl">Group Members</h1>

	<p>Current</p>

	<h2 class="text-2xl">Professors</h2>
	<div class="flex flex-wrap gap-4">
		{#each members.professors as memberInfo}
			<TeamMemberCard {memberInfo} />
		{/each}
	</div>

	<h2 class="text-2xl">Students</h2>
	{#each members.students as memberInfo}
		<TeamMemberCard {memberInfo} />
	{/each}
</main>
