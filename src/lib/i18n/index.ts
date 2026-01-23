import { writable, derived } from 'svelte/store';
import { browser } from '$app/environment';
import en from './en';
import fr from './fr';
import sp from './sp';
import el from './el';

export type Locale = 'en' | 'fr' | 'sp' | 'el';

const translations: Record<Locale, typeof en> = { en, fr, sp, el };

function getInitialLocale(): Locale {
	if (browser) {
		const stored = localStorage.getItem('locale') as Locale;
		if (stored && translations[stored]) return stored;
	}
	return 'en';
}

export const locale = writable<Locale>(getInitialLocale());

locale.subscribe((value) => {
	if (browser) {
		localStorage.setItem('locale', value);
	}
});

export const t = derived(locale, ($locale) => {
	return (key: string): string => {
		const keys = key.split('.');
		let value: unknown = translations[$locale];
		for (const k of keys) {
			if (value && typeof value === 'object' && k in value) {
				value = (value as Record<string, unknown>)[k];
			} else {
				return key; // Return key if translation not found
			}
		}
		return typeof value === 'string' ? value : key;
	};
});

// Export current translations for accessing arrays and objects
export const currentTranslations = derived(locale, ($locale) => translations[$locale]);
