import type { Project } from '$lib/types';
import type { PageLoad } from './$types';

export const load = (async ({ fetch }) => {
	const response = await fetch('api/projetos');
	const posts: Project[] = await response.json();
	return { posts };
}) satisfies PageLoad;
