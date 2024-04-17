---
title: 'Instructions for creating a project on the website'
description: 'This file contains instructions for creating a project on the website.'
---

## How to Create a Project on the Website

### General Information

The URL of a specific project is based on the name of its file.

For example, if the file is named `example.md`, the project URL will be `/projects/example`.

Always start with the second-level header. The first one will be the project title.

### All Markdown features are available

For more information on how to use markdown, you can refer to the [**cheat sheet**](https://www.markdownguide.org/cheat-sheet/ "Markdown cheat sheet" target="\_blank") or, if you prefer, read the [**complete documentation**](https://www.markdownguide.org "Markdown guide" target="\_blank").

### Front Matter

The Front Matter is the part of the file that contains information about the project. It is delimited by `---` at the beginning and end of the file. _title_, _description_ are mandatory fields, _externalLinks_ and _heroImage_ are optional.

- title: This is the project title. It is used in the list of projects and on the project page.

- description: This is a brief description of the project. It is useful to provide a quick overview of the project content. The description is used in the list of projects and just below the project title on its page.

- externalLinks (optional): This field can contain relevant external links for the project, such as other websites or social networks. This field is optional and may or may not be included, depending on the project's needs. The typing of externalLinks is as follows:

```javascript
ExternalLinks = {
    name: string;
    url: string;
};
```

Where `name` is the name of the link and `url` is the address of the link.

We have icons for the following types of external links: `app-store`, `discord`, `facebook`, `github`, `gitlab`, `instagram`, `play-store`.

- heroImage (optional): This field can contain an image that will be displayed in the header of the project page. The image must be hosted on the site and the path to the image must be provided. This field is optional and may or may not be included, depending on the project's needs.
