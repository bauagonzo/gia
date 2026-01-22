export default {
	home: {
		welcome: 'Bienvenido a la Práctica del Test {gia}',
		giaLink: 'https://www.thomas.co/es/assessments/evaluacion-de-inteligencia-general-gia',
		giaLabel: 'GIA',
		description: 'El GIA consta de 5 pruebas cronometradas que miden diferentes capacidades cognitivas:',
		encouragement: 'El GIA es exigente, pero la práctica regular puede mejorar significativamente tus resultados. Para obtener los mejores resultados, se recomienda realizar la evaluación en tu idioma nativo, ya que esto puede influir de manera significativa en el rendimiento.',
		minute: 'min'
	},
	nav: {
		results: 'Resultados',
		reasoning: 'Razonamiento',
		perceptual: 'Percepción',
		number: 'Número',
		word: 'Palabra',
		spatial: 'Espacial'
	},
	common: {
		tryAgain: 'Intentar de nuevo',
		backToMenu: 'Volver al menú',
		nextTest: 'Siguiente prueba',
		results: 'Resultados',
		correctAnswers: 'Respuestas correctas',
		totalAttempted: 'Total intentado',
		accuracy: 'Precisión',
		speed: 'Velocidad',
		questionsPerMin: 'preguntas/min',
		clickToReveal: 'Haz clic para revelar la pregunta'
	},
	reasoning: {
		title: 'Test de Razonamiento',
		whoIs: 'Quién es',
		comparativeThan: '{name1} es más {comparative} que {name2}',
		notAsAdjective: '{name1} no es tan {adjective} como {name2}',
		adjectivePairs: [
			['pesado', 'ligero', 'pesado'],
			['ligero', 'pesado', 'ligero'],
			['alto', 'bajo', 'alto'],
			['bajo', 'alto', 'bajo'],
			['viejo', 'joven', 'viejo'],
			['joven', 'viejo', 'joven'],
			['rápido', 'lento', 'rápido'],
			['lento', 'rápido', 'lento'],
			['fuerte', 'débil', 'fuerte'],
			['débil', 'fuerte', 'débil'],
			['inteligente', 'torpe', 'inteligente'],
			['torpe', 'inteligente', 'torpe'],
			['rico', 'pobre', 'rico'],
			['pobre', 'rico', 'pobre']
		]
	},
	perceptual: {
		title: 'Test de Velocidad Perceptual',
		question: '¿Cuántos pares de letras coinciden? (sin distinguir mayúsculas)'
	},
	number: {
		title: 'Velocidad y Precisión Numérica',
		question: '¿Qué número está más alejado del valor medio?'
	},
	word: {
		title: 'Significado de Palabras',
		question: '¿Cuál es la palabra intrusa?',
		semanticGroups: [
			['feliz', 'alegre', 'contento', 'encantado'],
			['triste', 'infeliz', 'afligido', 'melancólico'],
			['enfadado', 'furioso', 'enojado', 'iracundo'],
			['grande', 'enorme', 'inmenso', 'gigante'],
			['pequeño', 'diminuto', 'minúsculo', 'menudo'],
			['rápido', 'veloz', 'ágil', 'ligero'],
			['lento', 'pausado', 'tranquilo', 'calmado'],
			['inteligente', 'listo', 'astuto', 'brillante'],
			['valiente', 'audaz', 'intrépido', 'osado'],
			['frío', 'helado', 'gélido', 'congelado'],
			['caliente', 'cálido', 'ardiente', 'abrasador'],
			['hermoso', 'bonito', 'precioso', 'bello'],
			['feo', 'horrible', 'espantoso', 'horroroso'],
			['rico', 'adinerado', 'acaudalado', 'próspero'],
			['pobre', 'necesitado', 'indigente', 'menesteroso'],
			['perro', 'gato', 'conejo', 'hámster'],
			['león', 'tigre', 'leopardo', 'guepardo'],
			['águila', 'halcón', 'gavilán', 'búho'],
			['salmón', 'trucha', 'atún', 'bacalao'],
			['serpiente', 'lagarto', 'gecko', 'iguana'],
			['manzana', 'plátano', 'naranja', 'uva'],
			['zanahoria', 'patata', 'cebolla', 'apio'],
			['pan', 'tostada', 'bollo', 'croissant'],
			['pollo', 'ternera', 'cerdo', 'cordero'],
			['leche', 'queso', 'yogur', 'mantequilla'],
			['rojo', 'azul', 'verde', 'amarillo'],
			['morado', 'violeta', 'lavanda', 'magenta'],
			['silla', 'sofá', 'banco', 'taburete'],
			['mesa', 'escritorio', 'mostrador', 'banco'],
			['cama', 'catre', 'colchón', 'litera'],
			['coche', 'camión', 'furgoneta', 'autobús'],
			['bicicleta', 'motocicleta', 'scooter', 'ciclomotor'],
			['avión', 'helicóptero', 'jet', 'planeador'],
			['barco', 'buque', 'yate', 'canoa'],
			['camisa', 'blusa', 'jersey', 'chaqueta'],
			['pantalón', 'vaqueros', 'shorts', 'bermudas'],
			['zapato', 'bota', 'sandalia', 'zapatilla'],
			['martillo', 'llave', 'destornillador', 'alicates'],
			['sierra', 'taladro', 'cincel', 'lima'],
			['lluvia', 'nieve', 'granizo', 'aguanieve'],
			['soleado', 'nublado', 'cubierto', 'despejado'],
			['miedo', 'ansiedad', 'temor', 'terror'],
			['amor', 'cariño', 'afecto', 'adoración'],
			['fútbol', 'baloncesto', 'rugby', 'hockey'],
			['tenis', 'bádminton', 'squash', 'pádel'],
			['natación', 'buceo', 'surf', 'vela'],
			['piano', 'órgano', 'teclado', 'clavicémbalo'],
			['guitarra', 'violín', 'violonchelo', 'bajo'],
			['tambor', 'platillo', 'pandereta', 'bongó']
		]
	},
	spatial: {
		title: 'Visualización Espacial',
		question: '¿Cuántos pares coinciden? (solo rotación, no espejo)'
	},
	resultsPage: {
		title: 'Resumen de Resultados',
		clearAll: 'Borrar todo',
		noResults: 'Aún no hay resultados. Completa una prueba para ver tus resultados aquí.',
		startTest: 'Comenzar Test de Razonamiento',
		test: 'Prueba',
		correct: 'Correctas',
		total: 'Total',
		date: 'Fecha',
		testNames: {
			reasoning: 'Razonamiento',
			perceptual: 'Velocidad Perceptual',
			number: 'Velocidad y Precisión Numérica',
			word: 'Significado de Palabras',
			spatial: 'Visualización Espacial'
		}
	}
};
