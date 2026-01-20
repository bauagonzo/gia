function pickRandom<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

function shuffle<T>(arr: T[]): T[] {
	const result = [...arr];
	for (let i = result.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1));
		[result[i], result[j]] = [result[j], result[i]];
	}
	return result;
}

export interface WordQuestion {
	words: [string, string, string];
	correctAnswer: string;
}

export function generateQuestion(semanticGroups: string[][]): WordQuestion {
	// Pick a random semantic group
	const groupIndex = Math.floor(Math.random() * semanticGroups.length);
	const group = semanticGroups[groupIndex];

	// Pick 2 random words from the group
	const shuffledGroup = shuffle(group);
	const relatedWords = [shuffledGroup[0], shuffledGroup[1]];

	// Pick an unrelated word from a different group
	let oddWordGroup: string[];
	do {
		oddWordGroup = pickRandom(semanticGroups);
	} while (oddWordGroup === group);

	const oddWord = pickRandom(oddWordGroup);

	// Combine and shuffle
	const words = shuffle([...relatedWords, oddWord]) as [string, string, string];

	return {
		words,
		correctAnswer: oddWord
	};
}
