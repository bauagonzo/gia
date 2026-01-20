const symbols = ['R', 'F', 'G'] as const;
const rotations = [0, 90, 180, 270] as const;

function pickRandom<T>(arr: readonly T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

export interface SymbolPair {
	symbol: 'R' | 'F' | 'G';
	topRotation: number;
	bottomRotation: number;
	isMirrored: boolean;
	isMatch: boolean;
}

export interface SpatialQuestion {
	pairs: [SymbolPair, SymbolPair];
	correctAnswer: number;
}

export function generateQuestion(): SpatialQuestion {
	const pairs: SymbolPair[] = [];
	let matchCount = 0;

	for (let i = 0; i < 2; i++) {
		const symbol = pickRandom(symbols);
		const topRotation = pickRandom(rotations);
		const bottomRotation = pickRandom(rotations);

		// 50% chance of being mirrored (not a match)
		const isMirrored = Math.random() < 0.5;
		const isMatch = !isMirrored;

		if (isMatch) {
			matchCount++;
		}

		pairs.push({
			symbol,
			topRotation,
			bottomRotation,
			isMirrored,
			isMatch
		});
	}

	return {
		pairs: pairs as [SymbolPair, SymbolPair],
		correctAnswer: matchCount
	};
}
