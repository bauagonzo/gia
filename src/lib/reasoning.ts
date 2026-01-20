// Adjective pairs: [comparative, opposite adjective]
const adjectivePairs: [string, string, string][] = [
	['heavier', 'lighter', 'heavy'],
	['lighter', 'heavier', 'light'],
	['taller', 'shorter', 'tall'],
	['shorter', 'taller', 'short'],
	['older', 'younger', 'old'],
	['younger', 'older', 'young'],
	['faster', 'slower', 'fast'],
	['slower', 'faster', 'slow'],
	['stronger', 'weaker', 'strong'],
	['weaker', 'stronger', 'weak'],
	['smarter', 'duller', 'smart'],
	['duller', 'smarter', 'dull'],
	['richer', 'poorer', 'rich'],
	['poorer', 'richer', 'poor']
];

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

export function generateQuestion(): ReasoningQuestion {
	const [name1, name2] = pickTwoNames();
	const [comparative, opposite, adjective] = pickRandom(adjectivePairs);

	// Randomly choose statement type
	const useNegative = Math.random() < 0.5;

	let statement: string;
	let correctAnswer: string;

	if (useNegative) {
		// "X is not as [adjective] as Y" -> Y has more of trait -> X has opposite
		statement = `${name1} is not as ${adjective} as ${name2}`;
		correctAnswer = name1;
	} else {
		// "X is [comparative] than Y" -> X has more of trait -> Y has opposite
		statement = `${name1} is ${comparative} than ${name2}`;
		correctAnswer = name2;
	}

	const question = `Who is ${opposite}?`;

	return {
		statement,
		question,
		names: [name1, name2],
		correctAnswer
	};
}
