import type { LayoutServerLoad } from './$types';
import { detectLocale } from '$lib/i18n/i18n-util';

const langCookie = 'lang';

export const load = (async ({ cookies, request }) => {
	if (cookies.get(langCookie) === undefined) {
		const acceptLanguage = request.headers.get('accept-language');
		const languages = acceptLanguage?.split(',').map((lang) => lang.split(';')[0].trim()) ?? [];
		let cookieOk = false;
		for (const lang of languages) {
			switch (true) {
				case lang.includes('en'):
					console.log('Detected preferred language: en');
					cookies.set(langCookie, 'en', {
						path: '/',
						maxAge: 60 * 60 * 24 * 365, // 1 year
						httpOnly: false
					});
					cookieOk = true;
					break;
				case lang.includes('pt'):
					console.log('Detected preferred language: pt');
					cookies.set(langCookie, 'pt', {
						path: '/',
						maxAge: 60 * 60 * 24 * 365, // 1 year
						httpOnly: false
					});
					cookieOk = true;
					break;
				default:
					break;
			}
			if (cookieOk) {
				break;
			}
		}
		if (!cookieOk) {
			console.log('No preferred language detected, setting default language to en');
			cookies.set(langCookie, 'en', {
				path: '/',
				maxAge: 60 * 60 * 24 * 365, // 1 year
				httpOnly: false
			});
		}
	}

	// check for the theme cookie
	// if it's not set, set it to the default theme
	if (cookies.get('theme') === undefined) {
		console.log('No theme cookie detected, setting default theme to light');
		cookies.set('theme', 'light', {
			path: '/',
			maxAge: 60 * 60 * 24 * 365, // 1 year
			httpOnly: false
		});
	}

	const locale = detectLocale(() => [cookies.get(langCookie)!]);
	const theme = cookies.get('theme') === 'dark' ? 'dark' : 'light';

	return { locale, theme };
}) satisfies LayoutServerLoad;
