import type { Translation } from '../i18n-types';

const pt = {
	LINKS: [
		{
			title: 'projetos',
			href: '/projects',
			subtitle: 'Confira nossos projetos!'
		},
		{
			title: 'publicações',
			href: '/publications',
			subtitle: 'Confira nossas publicações!'
		},
		{
			title: 'membros',
			href: '/members',
			subtitle: 'Conheça nossos membros!'
		}
	],
	hero: {
		title: 'Laboratório de Otimização de Sistemas',
		sub: ['Departamento de Ciência da Computação', 'Universidade Federal do Pampa']
	},
	currentAreas: {
		title: 'Atualmente, estamos realizando pesquisas nas seguintes áreas:',
		areas: [
			'Computação Paralela',
			'Arquiteturas Multicore Heterogêneas',
			'Rede definida por software',
			'Computação em Nuvem'
		]
	},
	intro:
		'Com o aumento na demanda por serviços disponibilizados através de sistemas embarcados (e.g., tablets e smartphones, automóveis, instrumentos biomédicos) e o crescimento eminente de sistemas que propiciam a interconexão entre tais dispositivos (e.g., redes wireless, tecnologia 4G, 5G, bluetooth), existe uma necessidade de formação de profissionais para atuar no desenvolvimento da área. Neste sentido, o grupo busca modelar e desenvolver sistemas computacionais (e.g., métodos e algoritmos) que visam otimizar a solução de problemas complexos envolvendo os componentes de hardware e software nas grandes áreas de sistemas embarcados e redes de computadores. Em especial, o trabalho do grupo é bastante focado no desenvolvimento de tecnologias e aplicações que tenham forte possibilidade de apropriação por empresas nacionais em conjunto com produção de trabalhos científicos com impacto nacional e internacional.',
	projects: {
		title: 'Projetos',
		sub: 'Aqui está uma lista de todos os nossos projetos atuais e anteriores.'
	},
	publications: {
		title: 'Publicações',
		journals: 'Periódicos',
		conferences: 'Conferências'
	}
} satisfies Translation;

export default pt;
