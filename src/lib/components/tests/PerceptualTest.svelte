<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { generateQuestion, type PerceptualQuestion } from '$lib/perceptual';
	import { results } from '$lib/stores/results';
	import { t } from '$lib/i18n';
	import { TEST_DURATIONS } from '$lib/config';

	interface Props {
		onNext: () => void;
	}

	let { onNext }: Props = $props();

	const DURATION = TEST_DURATIONS.perceptual;

	let currentQuestion = $state<PerceptualQuestion>(generateQuestion());
	let score = $state(0);
	let totalAnswered = $state(0);
	let timeExpired = $state(false);
	let showResults = $state(false);

	function handleAnswer(answer: number) {
		if (timeExpired) return;

		if (answer === currentQuestion.correctAnswer) {
			score++;
		}
		totalAnswered++;
		currentQuestion = generateQuestion();
	}

	function handleTimeExpire() {
		timeExpired = true;
		showResults = true;
		const accuracy = totalAnswered === 0 ? 0 : (score / totalAnswered) * 100;
		const speed = totalAnswered / (DURATION / 60);
		results.setResult('perceptual', {
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

<svelte:head>
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
	<link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;700&display=swap" rel="stylesheet" />
</svelte:head>

<div class="flex justify-between items-center mb-6">
	<h1 class="text-2xl font-bold text-gray-800">{$t('perceptual.title')}</h1>
	{#if !showResults}
		<Timer duration={DURATION} onExpire={handleTimeExpire} />
	{/if}
</div>

{#if showResults}
	<Card class="text-center">
		<h2 class="text-xl font-semibold mb-4">{$t('common.results')}</h2>
		<div class="space-y-3 text-lg">
			<p><span class="font-medium">{$t('common.correctAnswers')}:</span> {score}</p>
			<p><span class="font-medium">{$t('common.totalAttempted')}:</span> {totalAnswered}</p>
			<p><span class="font-medium">{$t('common.accuracy')}:</span> {getAccuracy()}%</p>
			<p><span class="font-medium">{$t('common.speed')}:</span> {getSpeed()} {$t('common.questionsPerMin')}</p>
		</div>
		<div class="mt-6 mb-2 flex gap-4 justify-center">
			<Button onclick={retry}>{$t('common.tryAgain')}</Button>
			<Button onclick={onNext}>{$t('common.nextTest')}</Button>
		</div>
	</Card>
{:else}
	<Card>
		<div class="text-center space-y-6 min-h-32 pb-4">
			<p class="text-gray-600 mb-4">{$t('perceptual.question')}</p>
			<div class="flex justify-center gap-8" style="font-family: 'Maven Pro', sans-serif;">
				{#each currentQuestion.pairs as pair}
					<div class="flex flex-col items-center gap-2 text-4xl font-medium">
						<span>{pair.left}</span>
						<span>{pair.right}</span>
					</div>
				{/each}
			</div>
			<div class="flex gap-3 justify-center mt-6">
				{#each [0, 1, 2, 3, 4] as num}
					<Button
						size="xl"
						onclick={() => handleAnswer(num)}
						disabled={timeExpired}
					>
						{num}
					</Button>
				{/each}
			</div>
		</div>
	</Card>
{/if}
