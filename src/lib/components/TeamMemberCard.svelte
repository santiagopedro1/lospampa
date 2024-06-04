<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';

	import type { MemberInfo } from '$lib/teamMembers';

	export let memberInfo: MemberInfo;
</script>

{#if memberInfo.student}
	<Card.Root class="grid w-fit place-items-center">
		<Card.Header class="grid place-items-center">
			<img
				src={memberInfo.avatar}
				alt={memberInfo.name}
				class="w-28 object-cover"
			/>
			<Card.Title>{memberInfo.name}</Card.Title>
		</Card.Header>
		<Card.Content>
			<div class="flex items-center gap-4">
				{#each memberInfo.academicEducation as edu}
					<div>
						<div class="font-semibold">
							{edu.degree} in {edu.area}
						</div>
						<div class="italic text-gray-600">{edu.institution}</div>
					</div>
				{/each}
			</div>
		</Card.Content>
	</Card.Root>
{:else}
	<Card.Root class="flex w-fit items-center justify-center">
		<Card.Content class="grid gap-2 py-4">
			<div class="flex items-center gap-4">
				<img
					src={memberInfo.avatar}
					alt={memberInfo.name}
					class="w-28 object-cover"
				/>
				<div>
					{#each memberInfo.academicEducation as edu}
						<div>
							<div class="font-semibold">
								{edu.degree} in {edu.area}
								{#if edu.currentlyEnrolled}
									student
								{/if}
							</div>
							<div class="italic text-gray-600">{edu.institution}</div>
						</div>
					{/each}
				</div>
			</div>
			<Card.Title>{memberInfo.name}</Card.Title>
		</Card.Content>
	</Card.Root>
{/if}
