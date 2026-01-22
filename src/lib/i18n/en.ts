export default {
	home: {
		welcome: 'Welcome to {gia} Test Practice',
		giaLink: 'https://www.thomas.co/assessments/general-intelligence-assessment-gia',
		giaLabel: 'GIA',
		description: 'The GIA consists of 5 timed tests that measure different cognitive abilities:',
		encouragement: 'The GIA is challenging, but regular practice can significantly improve your scores. For best results, it’s recommended to take the assessment in your native language, as this can meaningfully affect performance.',
		minute: 'min'
	},
	nav: {
		results: 'Results',
		reasoning: 'Reasoning',
		perceptual: 'Perceptual',
		number: 'Number',
		word: 'Word',
		spatial: 'Spatial'
	},
	common: {
		tryAgain: 'Try Again',
		backToMenu: 'Back to Menu',
		nextTest: 'Next Test',
		results: 'Results',
		correctAnswers: 'Correct Answers',
		totalAttempted: 'Total Attempted',
		accuracy: 'Accuracy',
		speed: 'Speed',
		questionsPerMin: 'questions/min',
		clickToReveal: 'Click to reveal question'
	},
	reasoning: {
		title: 'Reasoning Test',
		whoIs: 'Who is',
		comparativeThan: '{name1} is {comparative} than {name2}',
		notAsAdjective: '{name1} is not as {adjective} as {name2}',
		adjectivePairs: [
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
		]
	},
	perceptual: {
		title: 'Perceptual Speed Test',
		question: 'How many letter pairs match? (case-insensitive)'
	},
	number: {
		title: 'Number Speed & Accuracy',
		question: 'Which number is furthest from the middle value?'
	},
	word: {
		title: 'Word Meaning',
		question: 'Which word is the odd one out?',
		semanticGroups: [
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
			['dog', 'cat', 'rabbit', 'hamster'],
			['lion', 'tiger', 'leopard', 'cheetah'],
			['eagle', 'hawk', 'falcon', 'owl'],
			['salmon', 'trout', 'tuna', 'cod'],
			['snake', 'lizard', 'gecko', 'iguana'],
			['apple', 'banana', 'orange', 'grape'],
			['carrot', 'potato', 'onion', 'celery'],
			['bread', 'toast', 'bagel', 'croissant'],
			['chicken', 'beef', 'pork', 'lamb'],
			['milk', 'cheese', 'yogurt', 'butter'],
			['red', 'blue', 'green', 'yellow'],
			['purple', 'violet', 'lavender', 'magenta'],
			['chair', 'sofa', 'bench', 'stool'],
			['table', 'desk', 'counter', 'workbench'],
			['bed', 'cot', 'mattress', 'bunk'],
			['car', 'truck', 'van', 'bus'],
			['bicycle', 'motorcycle', 'scooter', 'moped'],
			['airplane', 'helicopter', 'jet', 'glider'],
			['boat', 'ship', 'yacht', 'canoe'],
			['shirt', 'blouse', 'sweater', 'jacket'],
			['pants', 'jeans', 'shorts', 'trousers'],
			['shoe', 'boot', 'sandal', 'sneaker'],
			['hammer', 'wrench', 'screwdriver', 'pliers'],
			['saw', 'drill', 'chisel', 'file'],
			['rain', 'snow', 'hail', 'sleet'],
			['sunny', 'cloudy', 'overcast', 'clear'],
			['fear', 'anxiety', 'dread', 'terror'],
			['love', 'affection', 'fondness', 'adoration'],
			['football', 'soccer', 'rugby', 'hockey'],
			['tennis', 'badminton', 'squash', 'racquetball'],
			['swimming', 'diving', 'surfing', 'sailing'],
			['piano', 'organ', 'keyboard', 'harpsichord'],
			['guitar', 'violin', 'cello', 'bass'],
			['drum', 'cymbal', 'tambourine', 'bongo']
		]
	},
	spatial: {
		title: 'Spatial Visualisation',
		question: 'How many pairs match? (rotation only, not mirrored)'
	},
	resultsPage: {
		title: 'Results Summary',
		clearAll: 'Clear All',
		noResults: 'No test results yet. Complete a test to see your results here.',
		startTest: 'Start Reasoning Test',
		test: 'Test',
		correct: 'Correct',
		total: 'Total',
		date: 'Date',
		testNames: {
			reasoning: 'Reasoning',
			perceptual: 'Perceptual Speed',
			number: 'Number Speed & Accuracy',
			word: 'Word Meaning',
			spatial: 'Spatial Visualisation'
		}
	}
};
