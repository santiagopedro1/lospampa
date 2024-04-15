import { defineMiddleware } from 'astro:middleware';

import { pt } from '@i18n/pt';
import { en } from '@i18n/en';

export const onRequest = defineMiddleware(({ params, locals }, next) => {
	const lang = params.lang;

	if (lang === 'pt-BR') {
		locals.t = pt;
	} else {
		locals.t = en;
	}

	return next();
});
