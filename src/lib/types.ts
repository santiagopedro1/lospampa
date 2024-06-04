// - title: This is the project title. It is used in the list of projects and on the project page.

// - description: This is a brief description of the project. It is useful to provide a quick overview of the project content. The description is used in the list of projects and just below the project title on its page.

// - externalLinks (optional): This field can contain relevant external links for the project, such as other websites or social networks. This field is optional and may or may not be included, depending on the project's needs. The typing of externalLinks is as follows:

// ```javascript
// ExternalLinks = {
//     name: string;
//     url: string;
// };

export type Project = {
	title: string;
	description: string;
	coverImage: string;
	slug: string;
};
