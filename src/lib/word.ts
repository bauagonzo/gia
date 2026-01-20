// Semantic groups of related words
const semanticGroups: string[][] = [
	// Synonyms
	['happy', 'joyful', 'cheerful', 'delighted'],
	['sad', 'unhappy', 'sorrowful', 'melancholy'],
	['angry', 'furious', 'enraged', 'irate'],
	['big', 'large', 'huge', 'enormous'],
	['small', 'tiny', 'little', 'miniature'],
	['fast', 'quick', 'rapid', 'swift'],
	['slow', 'sluggish', 'leisurely', 'unhurried'],
	['smart', 'intelligent', 'clever', 'bright'],
	['brave', 'courageous', 'fearless', 'bold'],
	['cold', 'chilly', 'freezing', 'frigid'],
	['hot', 'warm', 'scorching', 'blazing'],
	['beautiful', 'pretty', 'gorgeous', 'stunning'],
	['ugly', 'hideous', 'unsightly', 'grotesque'],
	['rich', 'wealthy', 'affluent', 'prosperous'],
	['poor', 'needy', 'destitute', 'impoverished'],

	// Categories - Animals
	['dog', 'cat', 'rabbit', 'hamster'],
	['lion', 'tiger', 'leopard', 'cheetah'],
	['eagle', 'hawk', 'falcon', 'owl'],
	['salmon', 'trout', 'tuna', 'cod'],
	['snake', 'lizard', 'gecko', 'iguana'],

	// Categories - Food
	['apple', 'banana', 'orange', 'grape'],
	['carrot', 'potato', 'onion', 'celery'],
	['bread', 'toast', 'bagel', 'croissant'],
	['chicken', 'beef', 'pork', 'lamb'],
	['milk', 'cheese', 'yogurt', 'butter'],

	// Categories - Colors
	['red', 'blue', 'green', 'yellow'],
	['purple', 'violet', 'lavender', 'magenta'],

	// Categories - Furniture
	['chair', 'sofa', 'bench', 'stool'],
	['table', 'desk', 'counter', 'workbench'],
	['bed', 'cot', 'mattress', 'bunk'],

	// Categories - Vehicles
	['car', 'truck', 'van', 'bus'],
	['bicycle', 'motorcycle', 'scooter', 'moped'],
	['airplane', 'helicopter', 'jet', 'glider'],
	['boat', 'ship', 'yacht', 'canoe'],

	// Categories - Clothing
	['shirt', 'blouse', 'sweater', 'jacket'],
	['pants', 'jeans', 'shorts', 'trousers'],
	['shoe', 'boot', 'sandal', 'sneaker'],

	// Categories - Tools
	['hammer', 'wrench', 'screwdriver', 'pliers'],
	['saw', 'drill', 'chisel', 'file'],

	// Categories - Weather
	['rain', 'snow', 'hail', 'sleet'],
	['sunny', 'cloudy', 'overcast', 'clear'],

	// Categories - Emotions
	['fear', 'anxiety', 'dread', 'terror'],
	['love', 'affection', 'fondness', 'adoration'],

	// Categories - Sports
	['football', 'soccer', 'rugby', 'hockey'],
	['tennis', 'badminton', 'squash', 'racquetball'],
	['swimming', 'diving', 'surfing', 'sailing'],

	// Categories - Music
	['piano', 'organ', 'keyboard', 'harpsichord'],
	['guitar', 'violin', 'cello', 'bass'],
	['drum', 'cymbal', 'tambourine', 'bongo']
];

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

export function generateQuestion(): WordQuestion {
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
