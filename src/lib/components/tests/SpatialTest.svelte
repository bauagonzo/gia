<script lang="ts">
	import { Card, Button } from 'flowbite-svelte';
	import Timer from '$lib/components/Timer.svelte';
	import { generateQuestion, type SpatialQuestion } from '$lib/spatial';
	import { results } from '$lib/stores/results';
	import { t } from '$lib/i18n';
	import { TEST_DURATIONS } from '$lib/config';

	interface Props {
		onBack: () => void;
	}

	let { onBack }: Props = $props();

	const DURATION = TEST_DURATIONS.spatial;

	let currentQuestion = $state<SpatialQuestion>(generateQuestion());
	let score = $state(0);
	let totalAnswered = $state(0);
	let timeExpired = $state(false);
	let showResults = $state(false);

	function getTransform(rotation: number, mirrored: boolean): string {
		const transforms: string[] = [];
		if (mirrored) {
			transforms.push('scaleX(-1)');
		}
		if (rotation !== 0) {
			transforms.push(`rotate(${rotation}deg)`);
		}
		return transforms.join(' ') || 'none';
	}

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
		results.setResult('spatial', {
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

<div class="flex justify-between items-center mb-6">
	<h1 class="text-2xl font-bold text-gray-800">{$t('spatial.title')}</h1>
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
			<Button onclick={onBack} color="alternative">{$t('common.backToMenu')}</Button>
		</div>
	</Card>
{:else}
	<Card>
		<div class="text-center space-y-6 min-h-32 pb-4">
			<p class="text-gray-600 mb-4">{$t('spatial.question')}</p>
			<div class="flex justify-center gap-12">
				{#each currentQuestion.pairs as pair}
					<div class="flex flex-col items-center gap-4 p-4 border rounded-lg bg-gray-50">
						<div
							class="text-5xl font-bold select-none"
							style="transform: {getTransform(pair.topRotation, false)};"
						>
							{pair.symbol}
						</div>
						<div class="border-t border-gray-300 w-16"></div>
						<div
							class="text-5xl font-bold select-none"
							style="transform: {getTransform(pair.bottomRotation, pair.isMirrored)};"
						>
							{pair.symbol}
						</div>
					</div>
				{/each}
			</div>
			<div class="flex gap-4 justify-center mt-6">
				{#each [0, 1, 2] as num}
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
