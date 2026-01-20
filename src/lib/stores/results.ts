import { writable } from 'svelte/store';
import { browser } from '$app/environment';

export interface TestResult {
	correct: number;
	total: number;
	accuracy: number;
	speed: number;
	timestamp: number;
}

export interface AllResults {
	reasoning: TestResult | null;
	perceptual: TestResult | null;
	number: TestResult | null;
	word: TestResult | null;
	spatial: TestResult | null;
}

const defaultResults: AllResults = {
	reasoning: null,
	perceptual: null,
	number: null,
	word: null,
	spatial: null
};

function loadFromStorage(): AllResults {
	if (!browser) return defaultResults;
	const stored = localStorage.getItem('gia-results');
	if (stored) {
		try {
			return JSON.parse(stored);
		} catch {
			return defaultResults;
		}
	}
	return defaultResults;
}

function createResultsStore() {
	const { subscribe, set, update } = writable<AllResults>(loadFromStorage());

	return {
		subscribe,
		setResult: (testType: keyof AllResults, result: TestResult) => {
			update((results) => {
				const newResults = { ...results, [testType]: result };
				if (browser) {
					localStorage.setItem('gia-results', JSON.stringify(newResults));
				}
				return newResults;
			});
		},
		clear: () => {
			set(defaultResults);
			if (browser) {
				localStorage.removeItem('gia-results');
			}
		}
	};
}

export const results = createResultsStore();
