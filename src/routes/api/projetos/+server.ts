import { fail, json } from '@sveltejs/kit';

import type { RequestHandler } from './$types';
import type { Project } from '$lib/types';

async function getProjects(): Promise<Project[]> {
	let posts: Project[] = [];

	const paths = import.meta.glob('/src/lib/projetos/*.md', { eager: true });

	for (const path in paths) {
		const file = paths[path];
		const slug = path.split('/').at(-1)?.replace('.md', '');

		if (file && typeof file === 'object' && 'metadata' in file && slug) {
			const metadata = file.metadata as Omit<Project, 'slug'>;
			const post = { ...metadata, slug } satisfies Project;
			posts.push(post);
		}
	}

	return posts;
}

export const GET: RequestHandler = async ({ request }) => {
	if (import.meta.env.DEV && !request.headers.get('Origin')) {
		const projects = await getProjects();
		return json(projects);
	} else {
		throw fail(403);
	}
};
