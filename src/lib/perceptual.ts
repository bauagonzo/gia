// Weight b, p, q, d more heavily for perceptual challenge
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZbpqdbpqdbpqdbpqd';

function randomLetter(): string {
	const letter = letters[Math.floor(Math.random() * letters.length)];
	return letter.toUpperCase();
}

function randomCase(letter: string): string {
	return Math.random() < 0.5 ? letter.toLowerCase() : letter.toUpperCase();
}

export interface LetterPair {
	left: string;
	right: string;
	isMatch: boolean;
}

export interface PerceptualQuestion {
	pairs: LetterPair[];
	correctAnswer: number;
}

export function generateQuestion(): PerceptualQuestion {
	const pairs: LetterPair[] = [];
	let matchCount = 0;

	for (let i = 0; i < 4; i++) {
		const isMatch = Math.random() < 0.5;
		const letter1 = randomLetter();

		let left: string;
		let right: string;

		if (isMatch) {
			// Same letter, possibly different case
			left = randomCase(letter1);
			right = randomCase(letter1);
			matchCount++;
		} else {
			// Different letters
			let letter2 = randomLetter();
			while (letter2 === letter1) {
				letter2 = randomLetter();
			}
			left = randomCase(letter1);
			right = randomCase(letter2);
		}

		pairs.push({ left, right, isMatch });
	}

	return {
		pairs,
		correctAnswer: matchCount
	};
}
