<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { generateQuestion, type ReasoningQuestion } from '$lib/reasoning';
	import { results } from '$lib/stores/results';

	const DURATION = 10; // 5 minutes

	let currentQuestion = $state<ReasoningQuestion>(generateQuestion());
	let score = $state(0);
	let totalAnswered = $state(0);
	let timeExpired = $state(false);
	let showResults = $state(false);
	let showQuestion = $state(false);

	function revealQuestion() {
		if (timeExpired) return;
		showQuestion = true;
	}

	function handleAnswer(answer: string) {
		if (timeExpired) return;

		if (answer === currentQuestion.correctAnswer) {
			score++;
		}
		totalAnswered++;
		currentQuestion = generateQuestion();
		showQuestion = false;
	}

	function handleTimeExpire() {
		timeExpired = true;
		showResults = true;
		const accuracy = totalAnswered === 0 ? 0 : (score / totalAnswered) * 100;
		const speed = totalAnswered / (DURATION / 60);
		results.setResult('reasoning', {
			correct: score,
			total: totalAnswered,
			accuracy,
			speed,
			timestamp: Date.now()
		});
	}

	function retry() {
		score = 0;
		totalAnswered = 0;
		timeExpired = false;
		showResults = false;
		showQuestion = false;
		currentQuestion = generateQuestion();
	}

	function getAccuracy(): string {
		if (totalAnswered === 0) return '0';
		return ((score / totalAnswered) * 100).toFixed(1);
	}

	function getSpeed(): string {
		return (totalAnswered / (DURATION / 60)).toFixed(1);
	}
</script>

<div class="min-h-screen bg-gray-50 p-4">
	<div class="max-w-2xl mx-auto">
		<div class="flex justify-between items-center mb-6">
			<h1 class="text-2xl font-bold text-gray-800">Reasoning Test</h1>
			{#if !showResults}
				<Timer duration={DURATION} onExpire={handleTimeExpire} />
			{/if}
		</div>

		{#if showResults}
			<Card class="text-center">
				<h2 class="text-xl font-semibold mb-4">Results</h2>
				<div class="space-y-3 text-lg">
					<p><span class="font-medium">Correct Answers:</span> {score}</p>
					<p><span class="font-medium">Total Attempted:</span> {totalAnswered}</p>
					<p><span class="font-medium">Accuracy:</span> {getAccuracy()}%</p>
					<p><span class="font-medium">Speed:</span> {getSpeed()} questions/min</p>
				</div>
				<div class="mt-6 mb-2 flex gap-4 justify-center">
					<Button onclick={retry}>Try Again</Button>
					<Button href="/" color="alternative">Back to Menu</Button>
				</div>
			</Card>
		{:else}
			<Card
				class={!showQuestion && !timeExpired ? 'cursor-pointer' : ''}
				onclick={!showQuestion ? revealQuestion : undefined}
			>
				<div class="text-center space-y-6 min-h-32 flex flex-col justify-center">
					{#if showQuestion}
						<p class="text-lg font-medium text-gray-900">{currentQuestion.question}</p>
						<div class="flex gap-4 justify-center">
							<Button
								size="xl"
								onclick={() => handleAnswer(currentQuestion.names[0])}
								disabled={timeExpired}
							>
								{currentQuestion.names[0]}
							</Button>
							<Button
								size="xl"
								onclick={() => handleAnswer(currentQuestion.names[1])}
								disabled={timeExpired}
							>
								{currentQuestion.names[1]}
							</Button>
						</div>
					{:else}
						<p class="text-xl text-gray-700">{currentQuestion.statement}</p>
						<p class="text-gray-400 text-sm">Click to reveal question</p>
					{/if}
				</div>
			</Card>
		{/if}
	</div>
</div>
