function randomInt(min: number, max: number): number {
	return Math.floor(Math.random() * (max - min + 1)) + min;
}

function shuffle<T>(arr: T[]): T[] {
	const result = [...arr];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}

export interface NumberQuestion {
	numbers: [number, number, number];
	correctAnswer: number;
}

export function generateQuestion(): NumberQuestion {
	// 20% chance: use smaller numbers (all between 1-40)
	const useSmallNumbers = Math.random() < 0.2;
	const maxDistance = useSmallNumbers ? 10 : 20;
	const minNum = 1;
	const maxNum = useSmallNumbers ? 40 : 99;

	// Pick middle number (ensure room for distances on both sides)
	const middle = randomInt(minNum + maxDistance, maxNum - maxDistance);

	let distanceLow: number;
	let distanceHigh: number;

	// 40% chance: make difference between distances only 1 (harder)
	if (Math.random() < 0.4) {
		const baseDistance = randomInt(2, maxDistance - 1);
		distanceLow = baseDistance;
		distanceHigh = baseDistance + 1;
		// Randomly swap which is larger
		if (Math.random() < 0.5) {
			[distanceLow, distanceHigh] = [distanceHigh, distanceLow];
		}
	} else {
		// Normal: random distances (but different)
		distanceLow = randomInt(1, maxDistance);
		do {
			distanceHigh = randomInt(1, maxDistance);
		} while (distanceHigh === distanceLow);
	}

	const lowest = middle - distanceLow;
	const highest = middle + distanceHigh;

	// Correct answer is the one furthest from middle
	const correctAnswer = distanceHigh > distanceLow ? highest : lowest;

	// Shuffle the display order
	const numbers = shuffle([lowest, middle, highest]) as [number, number, number];

	return {
		numbers,
		correctAnswer
	};
}
