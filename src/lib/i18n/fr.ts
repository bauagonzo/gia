export default {
	home: {
		welcome: 'Bienvenue à la Pratique du Test GIA',
		selectTest: 'Sélectionnez un test dans la navigation pour commencer'
	},
	nav: {
		results: 'Résultats',
		reasoning: 'Raisonnement',
		perceptual: 'Perception',
		number: 'Nombre',
		word: 'Mot',
		spatial: 'Spatial'
	},
	common: {
		tryAgain: 'Réessayer',
		backToMenu: 'Retour au menu',
		nextTest: 'Test Suivant',
		results: 'Résultats',
		correctAnswers: 'Réponses correctes',
		totalAttempted: 'Total essayé',
		accuracy: 'Précision',
		speed: 'Vitesse',
		questionsPerMin: 'questions/min',
		clickToReveal: 'Cliquez pour révéler la question'
	},
	reasoning: {
		title: 'Test de Raisonnement',
		whoIs: 'Qui est',
		comparativeThan: '{name1} est plus {comparative} que {name2}',
		notAsAdjective: '{name1} n\'est pas aussi {adjective} que {name2}',
		adjectivePairs: [
			['lourd', 'léger', 'lourd'],
			['léger', 'lourd', 'léger'],
			['grand', 'petit', 'grand'],
			['petit', 'grand', 'petit'],
			['vieux', 'jeune', 'vieux'],
			['jeune', 'vieux', 'jeune'],
			['rapide', 'lent', 'rapide'],
			['lent', 'rapide', 'lent'],
			['fort', 'faible', 'fort'],
			['faible', 'fort', 'faible'],
			['intelligent', 'bête', 'intelligent'],
			['bête', 'intelligent', 'bête'],
			['riche', 'pauvre', 'riche'],
			['pauvre', 'riche', 'pauvre']
		]
	},
	perceptual: {
		title: 'Test de Vitesse Perceptuelle',
		question: 'Combien de paires de lettres correspondent ? (insensible à la casse)'
	},
	number: {
		title: 'Vitesse et Précision Numérique',
		question: 'Quel nombre est le plus éloigné de la valeur médiane ?'
	},
	word: {
		title: 'Sens des Mots',
		question: 'Quel mot est l\'intrus ?',
		semanticGroups: [
			['heureux', 'joyeux', 'gai', 'ravi'],
			['triste', 'malheureux', 'chagrin', 'mélancolique'],
			['fâché', 'furieux', 'enragé', 'irrité'],
			['grand', 'gros', 'énorme', 'immense'],
			['petit', 'minuscule', 'menu', 'miniature'],
			['rapide', 'vite', 'prompt', 'véloce'],
			['lent', 'paresseux', 'tranquille', 'calme'],
			['intelligent', 'malin', 'astucieux', 'brillant'],
			['courageux', 'brave', 'intrépide', 'audacieux'],
			['froid', 'frais', 'glacé', 'gelé'],
			['chaud', 'tiède', 'brûlant', 'ardent'],
			['beau', 'joli', 'magnifique', 'splendide'],
			['laid', 'hideux', 'affreux', 'moche'],
			['riche', 'fortuné', 'aisé', 'prospère'],
			['pauvre', 'démuni', 'indigent', 'nécessiteux'],
			['chien', 'chat', 'lapin', 'hamster'],
			['lion', 'tigre', 'léopard', 'guépard'],
			['aigle', 'faucon', 'épervier', 'hibou'],
			['saumon', 'truite', 'thon', 'morue'],
			['serpent', 'lézard', 'gecko', 'iguane'],
			['pomme', 'banane', 'orange', 'raisin'],
			['carotte', 'pomme de terre', 'oignon', 'céleri'],
			['pain', 'toast', 'bagel', 'croissant'],
			['poulet', 'bœuf', 'porc', 'agneau'],
			['lait', 'fromage', 'yaourt', 'beurre'],
			['rouge', 'bleu', 'vert', 'jaune'],
			['violet', 'mauve', 'lavande', 'magenta'],
			['chaise', 'canapé', 'banc', 'tabouret'],
			['table', 'bureau', 'comptoir', 'établi'],
			['lit', 'couchette', 'matelas', 'superposé'],
			['voiture', 'camion', 'fourgon', 'bus'],
			['vélo', 'moto', 'scooter', 'mobylette'],
			['avion', 'hélicoptère', 'jet', 'planeur'],
			['bateau', 'navire', 'yacht', 'canoë'],
			['chemise', 'blouse', 'pull', 'veste'],
			['pantalon', 'jean', 'short', 'bermuda'],
			['chaussure', 'botte', 'sandale', 'basket'],
			['marteau', 'clé', 'tournevis', 'pince'],
			['scie', 'perceuse', 'ciseau', 'lime'],
			['pluie', 'neige', 'grêle', 'verglas'],
			['ensoleillé', 'nuageux', 'couvert', 'clair'],
			['peur', 'anxiété', 'crainte', 'terreur'],
			['amour', 'affection', 'tendresse', 'adoration'],
			['football', 'soccer', 'rugby', 'hockey'],
			['tennis', 'badminton', 'squash', 'racquetball'],
			['natation', 'plongée', 'surf', 'voile'],
			['piano', 'orgue', 'clavier', 'clavecin'],
			['guitare', 'violon', 'violoncelle', 'basse'],
			['tambour', 'cymbale', 'tambourin', 'bongo']
		]
	},
	spatial: {
		title: 'Visualisation Spatiale',
		question: 'Combien de paires correspondent ? (rotation uniquement, pas de miroir)'
	},
	resultsPage: {
		title: 'Résumé des Résultats',
		clearAll: 'Tout effacer',
		noResults: 'Aucun résultat de test. Complétez un test pour voir vos résultats ici.',
		startTest: 'Commencer le test de Raisonnement',
		test: 'Test',
		correct: 'Correct',
		total: 'Total',
		date: 'Date',
		testNames: {
			reasoning: 'Raisonnement',
			perceptual: 'Vitesse Perceptuelle',
			number: 'Vitesse et Précision Numérique',
			word: 'Sens des Mots',
			spatial: 'Visualisation Spatiale'
		}
	}
};
