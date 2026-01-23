import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export type Theme = 'light' | 'dark';

function getInitialTheme(): Theme {
	if (browser) {
		const stored = localStorage.getItem('theme') as Theme;
		if (stored === 'light' || stored === 'dark') return stored;
	}
	return 'light';
}

function createThemeStore() {
	const { subscribe, set, update } = writable<Theme>(getInitialTheme());

	return {
		subscribe,
		toggle: () => {
			update((current) => {
				const newTheme = current === 'light' ? 'dark' : 'light';
				if (browser) {
					localStorage.setItem('theme', newTheme);
				}
				return newTheme;
			});
		},
		set: (value: Theme) => {
			set(value);
			if (browser) {
				localStorage.setItem('theme', value);
			}
		}
	};
}

export const theme = createThemeStore();
