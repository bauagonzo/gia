<script lang="ts">
	import { Card, Button, Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from 'flowbite-svelte';
	import { results, type TestResult } from '$lib/stores/results';

	const testNames: Record<string, string> = {
		reasoning: 'Reasoning',
		perceptual: 'Perceptual Speed',
		number: 'Number Speed & Accuracy',
		word: 'Word Meaning',
		spatial: 'Spatial Visualisation'
	};

	function formatDate(timestamp: number): string {
		return new Date(timestamp).toLocaleString();
	}

	function hasAnyResults(r: typeof $results): boolean {
		return Object.values(r).some((v) => v !== null);
	}
</script>

<div class="min-h-screen bg-gray-50 p-4">
	<div class="max-w-6xl mx-auto">
		<div class="flex justify-between items-center mb-6">
			<h1 class="text-2xl font-bold text-gray-800">Results Summary</h1>
			{#if hasAnyResults($results)}
				<Button color="red" size="sm" onclick={() => results.clear()}>Clear All</Button>
			{/if}
		</div>

		{#if hasAnyResults($results)}
			<Table striped shadow class="w-full">
				<TableHead>
					<TableHeadCell>Test</TableHeadCell>
					<TableHeadCell>Correct</TableHeadCell>
					<TableHeadCell>Total</TableHeadCell>
					<TableHeadCell>Accuracy</TableHeadCell>
					<TableHeadCell>Speed</TableHeadCell>
					<TableHeadCell>Date</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each Object.entries($results) as [key, result]}
						{#if result}
							<TableBodyRow>
								<TableBodyCell>{testNames[key]}</TableBodyCell>
								<TableBodyCell>{result.correct}</TableBodyCell>
								<TableBodyCell>{result.total}</TableBodyCell>
								<TableBodyCell>{result.accuracy.toFixed(1)}%</TableBodyCell>
								<TableBodyCell>{result.speed.toFixed(1)}/min</TableBodyCell>
								<TableBodyCell class="text-sm">{formatDate(result.timestamp)}</TableBodyCell>
							</TableBodyRow>
						{/if}
					{/each}
				</TableBody>
			</Table>
		{:else}
			<div class="text-center py-12">
				<p class="text-gray-500 mb-6">No test results yet. Complete a test to see your results here.</p>
				<Button href="/reasoning">Start Reasoning Test</Button>
			</div>
		{/if}

		<div class="mt-6">
			<Button href="/" color="alternative">Back to Menu</Button>
		</div>
	</div>
</div>
