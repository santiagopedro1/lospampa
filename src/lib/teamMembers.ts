export type MemberInfo = {
	name: string;
	academicEducation: {
		degree: string;
		area: string;
		institution: string;
	}[];
	avatar: string;
	student?: boolean;
};

export const members = {
	professors: [
		{
			name: 'Marcelo Caggiani Luizelli',
			academicEducation: [
				{
					degree: 'PhD',
					area: 'Computer Science',
					institution: 'UFRGS'
				},
				{
					degree: 'M.Sc.',
					area: 'Computer Science',
					institution: 'UFRGS'
				},
				{
					degree: 'B.Sc.',
					area: 'Computer Science',
					institution: 'UNIPAMPA'
				}
			],
			avatar: 'https://lospampa.wordpress.com/wp-content/uploads/2019/04/marcelo.jpg'
		},
		{
			name: 'Fábio Diniz Rossi',
			academicEducation: [
				{
					degree: 'PhD',
					area: 'Computer Science',
					institution: 'PUCRS'
				},
				{
					degree: 'M.Sc.',
					area: 'Computer Science',
					institution: 'PUCRS'
				},
				{
					degree: 'B.Sc.',
					area: 'Computer Science',
					institution: 'URCAMP'
				}
			],
			avatar: 'https://lospampa.wordpress.com/wp-content/uploads/2019/04/fabio.jpg'
		},
		{
			name: 'Antonio Carlos Schneider Beck Filho',
			academicEducation: [
				{
					degree: 'PhD',
					area: 'Computer Science',
					institution: 'UFRGS'
				},
				{
					degree: 'M.Sc.',
					area: 'Computer Science',
					institution: 'UFRGS'
				},
				{
					degree: 'B.Sc.',
					area: 'Computer Science',
					institution: 'UFSM'
				}
			],
			avatar: 'https://lospampa.wordpress.com/wp-content/uploads/2019/04/caco.jpg'
		}
	],
	students: [
		{
			name: 'Pedro da Silva Santiago',
			academicEducation: [
				{
					degree: 'B.Sc.',
					area: 'Computer Science',
					institution: 'UNIPAMPA'
				}
			],
			avatar: '/gordaoFoda.jpeg',
			student: true
		}
	]
};
