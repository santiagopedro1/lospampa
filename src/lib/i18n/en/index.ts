import type { BaseTranslation } from '../i18n-types';

const en = {
	LINKS: [
		{
			title: 'projects',
			href: '/projects',
			subtitle: 'Check out our projects!'
		},
		{
			title: 'publications',
			href: '/publications',
			subtitle: 'Check out our publications!'
		},
		{
			title: 'members',
			href: '/members',
			subtitle: 'Meet our members!'
		}
	],
	hero: {
		title: 'Systems Optimization Laboratory',
		sub: ['Department of Computer Science', 'Federal University of Pampa']
	},
	currentAreas: {
		title: 'We are currently carrying out research in the following areas:',
		areas: [
			'Parallel Computing',
			'Heterogeneous Multicore Architectures',
			'Software-defined networking',
			'Cloud computing'
		]
	},
	intro:
		"With the increase in demand for services made available through embedded systems (e.g., tablets and smartphones, automobiles, biomedical instruments) and the imminent growth of systems that provide interconnection between such devices (e.g., wireless networks, 4G, 5G, bluetooth technology) , there is a need for training professionals to work in the development of the area. In this sense, the group seeks to model and develop computational systems (e.g., methods and algorithms) that aim to optimize the solution of complex problems involving hardware and software components in the broad areas of embedded systems and computer networks. In particular, the group's work is very focused on the development of technologies and applications that have a strong possibility of appropriation by national companies in conjunction with the production of scientific work with national and international impact.",
	projects: {
		title: 'Projects',
		sub: 'Here is a list of all our current and past projects.'
	},
	publications: {
		title: 'Publications',
		journals: 'Journals',
		conferences: 'Conferences'
	}
} satisfies BaseTranslation;

export default en;