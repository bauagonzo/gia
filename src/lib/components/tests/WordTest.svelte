<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { generateQuestion, type WordQuestion } from '$lib/word';
	import { results } from '$lib/stores/results';
	import { t, currentTranslations } from '$lib/i18n';
	import { TEST_DURATIONS } from '$lib/config';

	interface Props {
		onNext: () => void;
	}

	let { onNext }: Props = $props();

	const DURATION = TEST_DURATIONS.word;

	function getSemanticGroups(): string[][] {
		return $currentTranslations.word.semanticGroups as string[][];
	}

	let currentQuestion = $state<WordQuestion>(generateQuestion(getSemanticGroups()));
	let score = $state(0);
	let totalAnswered = $state(0);
	let timeExpired = $state(false);
	let showResults = $state(false);

	function handleAnswer(answer: string) {
		if (timeExpired) return;

		if (answer === currentQuestion.correctAnswer) {
			score++;
		}
		totalAnswered++;
		currentQuestion = generateQuestion(getSemanticGroups());
	}

	function handleTimeExpire() {
		timeExpired = true;
		showResults = true;
		const accuracy = totalAnswered === 0 ? 0 : (score / totalAnswered) * 100;
		const speed = totalAnswered / (DURATION / 60);
		results.setResult('word', {
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
		currentQuestion = generateQuestion(getSemanticGroups());
	}

	function getAccuracy(): string {
		if (totalAnswered === 0) return '0';
		return ((score / totalAnswered) * 100).toFixed(1);
	}

	function getSpeed(): string {
		return (totalAnswered / (DURATION / 60)).toFixed(1);
	}
</script>

<div class="flex justify-between items-center mb-6">
	<h1 class="text-2xl font-bold text-gray-800 dark:text-white">{$t('word.title')}</h1>
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
			<p class="text-gray-600 dark:text-gray-300 mb-4">{$t('word.question')}</p>
			<div class="flex justify-center gap-4">
				{#each currentQuestion.words as word}
					<Button
						size="xl"
						onclick={() => handleAnswer(word)}
						disabled={timeExpired}
					>
						{word}
					</Button>
				{/each}
			</div>
		</div>
	</Card>
{/if}
