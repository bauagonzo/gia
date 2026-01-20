const names = [
	'Alice', 'Bob', 'Carol', 'David', 'Emma', 'Frank', 'Grace', 'Henry',
	'Ivy', 'Jack', 'Kate', 'Leo', 'Maya', 'Noah', 'Olivia', 'Paul',
	'Quinn', 'Ryan', 'Sarah', 'Tom', 'Uma', 'Victor', 'Wendy', 'Xavier',
	'Yuki', 'Zara', 'Ahmed', 'Bella', 'Carlos', 'Diana', 'Erik', 'Fatima'
];

function pickRandom<T>(arr: T[]): T {
	return arr[Math.floor(Math.random() * arr.length)];
}

function pickTwoNames(): [string, string] {
	const first = pickRandom(names);
	let second = pickRandom(names);
	while (second === first) {
		second = pickRandom(names);
	}
	return [first, second];
}

export interface ReasoningQuestion {
	statement: string;
	question: string;
	names: [string, string];
	correctAnswer: string;
}

export interface ReasoningTranslations {
	adjectivePairs: [string, string, string][];
	comparativeThan: string;
	notAsAdjective: string;
	whoIs: string;
}

export function generateQuestion(translations: ReasoningTranslations): ReasoningQuestion {
	const [name1, name2] = pickTwoNames();
	const [comparative, opposite, adjective] = pickRandom(translations.adjectivePairs);

	// Randomly choose statement type
	const useNegative = Math.random() < 0.5;

	let statement: string;
	let correctAnswer: string;

	if (useNegative) {
		// "X is not as [adjective] as Y" -> Y has more of trait -> X has opposite
		statement = translations.notAsAdjective
			.replace('{name1}', name1)
			.replace('{name2}', name2)
			.replace('{adjective}', adjective);
		correctAnswer = name1;
	} else {
		// "X is [comparative] than Y" -> X has more of trait -> Y has opposite
		statement = translations.comparativeThan
			.replace('{name1}', name1)
			.replace('{name2}', name2)
			.replace('{comparative}', comparative);
		correctAnswer = name2;
	}

	const question = `${translations.whoIs} ${opposite}?`;

	return {
		statement,
		question,
		names: [name1, name2],
		correctAnswer
	};
}
