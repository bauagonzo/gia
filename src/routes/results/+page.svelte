<script lang="ts">
	import { Button, Table, TableHead, TableHeadCell, TableBody, TableBodyRow, TableBodyCell } from 'flowbite-svelte';
	import { results, type TestResult } from '$lib/stores/results';
	import { t } from '$lib/i18n';

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
			<h1 class="text-2xl font-bold text-gray-800">{$t('resultsPage.title')}</h1>
			{#if hasAnyResults($results)}
				<Button color="red" size="sm" onclick={() => results.clear()}>{$t('resultsPage.clearAll')}</Button>
			{/if}
		</div>

		{#if hasAnyResults($results)}
			<Table striped shadow class="w-full">
				<TableHead>
					<TableHeadCell>{$t('resultsPage.test')}</TableHeadCell>
					<TableHeadCell>{$t('resultsPage.correct')}</TableHeadCell>
					<TableHeadCell>{$t('resultsPage.total')}</TableHeadCell>
					<TableHeadCell>{$t('common.accuracy')}</TableHeadCell>
					<TableHeadCell>{$t('common.speed')}</TableHeadCell>
					<TableHeadCell>{$t('resultsPage.date')}</TableHeadCell>
				</TableHead>
				<TableBody>
					{#each Object.entries($results) as [key, result]}
						{#if result}
							<TableBodyRow>
								<TableBodyCell>{$t(`resultsPage.testNames.${key}`)}</TableBodyCell>
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
				<p class="text-gray-500 mb-6">{$t('resultsPage.noResults')}</p>
				<Button href="/reasoning">{$t('resultsPage.startTest')}</Button>
			</div>
		{/if}

		<div class="mt-6">
			<Button href="/" color="alternative">{$t('common.backToMenu')}</Button>
		</div>
	</div>
</div>
