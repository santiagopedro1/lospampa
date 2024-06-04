<script lang="ts">
	import { setLocale } from '$lib/i18n/i18n-svelte';
	import { loadLocale } from '$lib/i18n/i18n-util.sync';
	import * as Select from '$lib/components/ui/select';

	import type { Selected } from 'bits-ui';
	import type { Locales } from '$lib/i18n/i18n-types';

	export let currentLocale: string;

	const langs = [
		{ value: 'en', label: 'English (US)' },
		{ value: 'pt', label: 'Português (BR)' }
	];

	function updateLang(e: Selected<string> | undefined) {
		if (!e) return;
		document.cookie = `lang=${e.value}; path=/; max-age=31536000`;
		loadLocale(e.value as Locales);
		setLocale(e.value as Locales);
	}
</script>

<Select.Root
	selected={langs.find((v) => v.value === currentLocale)}
	onSelectedChange={updateLang}
>
	<Select.Trigger class="w-[180px] justify-self-end bg-card">
		<svg
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			stroke-width="2"
			stroke-linecap="round"
			stroke-linejoin="round"
		>
			<circle
				cx="12"
				cy="12"
				r="10"
			/>
			<path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
			<path d="M2 12h20" />
		</svg>
		<Select.Value />
	</Select.Trigger>
	<Select.Content>
		<Select.Group>
			{#each langs as lang}
				<Select.Item
					value={lang.value}
					label={lang.label}>{lang.label}</Select.Item
				>
			{/each}
		</Select.Group>
	</Select.Content>
</Select.Root>
