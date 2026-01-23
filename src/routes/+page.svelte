<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl, Button } from 'flowbite-svelte';
	import { Select, Label } from 'flowbite-svelte';
	import { BrainSolid } from 'flowbite-svelte-icons';
	import { locale, t, currentTranslations, type Locale } from '$lib/i18n';
	import { TEST_DURATIONS } from '$lib/config';
	import ReasoningTest from '$lib/components/tests/ReasoningTest.svelte';
	import PerceptualTest from '$lib/components/tests/PerceptualTest.svelte';
	import NumberTest from '$lib/components/tests/NumberTest.svelte';
	import WordTest from '$lib/components/tests/WordTest.svelte';
	import SpatialTest from '$lib/components/tests/SpatialTest.svelte';
	import ResultsView from '$lib/components/tests/ResultsView.svelte';

	const testKeys = ['reasoning', 'perceptual', 'number', 'word', 'spatial'] as const;

	type ActiveView = 'menu' | 'reasoning' | 'perceptual' | 'number' | 'word' | 'spatial' | 'results';

	let activeTest = $state<ActiveView>('menu');

	let languages = [
		{ value: 'en', name: 'EN' },
		{ value: 'fr', name: 'FR' },
		{ value: 'sp', name: 'SP' },
		{ value: 'el', name: 'EL' }
	];

	function handleLocaleChange(e: Event) {
		const target = e.target as HTMLSelectElement;
		locale.set(target.value as Locale);
	}

	function setActiveTest(test: ActiveView) {
		activeTest = test;
	}

	function goToMenu() {
		activeTest = 'menu';
	}
</script>

<Navbar class="bg-white border-b border-gray-200">
	<NavBrand href="https://gia.lafabrique.ai" class="flex items-center gap-2">
		<BrainSolid class="w-8 h-8 text-primary-600" />
		<span class="text-xl font-semibold">gia.lafabrique.ai</span>
	</NavBrand>
	<div class="flex mx-auto space-x-4">
		<NavUl>
			<NavLi href="#" onclick={() => setActiveTest('results')} class={activeTest === 'results' ? 'text-primary-700 font-semibold' : ''}>{$t('nav.results')}</NavLi>
			<NavLi href="#" onclick={() => setActiveTest('reasoning')} class={activeTest === 'reasoning' ? 'text-primary-700 font-semibold' : ''}>{$t('nav.reasoning')}</NavLi>
			<NavLi href="#" onclick={() => setActiveTest('perceptual')} class={activeTest === 'perceptual' ? 'text-primary-700 font-semibold' : ''}>{$t('nav.perceptual')}</NavLi>
			<NavLi href="#" onclick={() => setActiveTest('number')} class={activeTest === 'number' ? 'text-primary-700 font-semibold' : ''}>{$t('nav.number')}</NavLi>
			<NavLi href="#" onclick={() => setActiveTest('word')} class={activeTest === 'word' ? 'text-primary-700 font-semibold' : ''}>{$t('nav.word')}</NavLi>
			<NavLi href="#" onclick={() => setActiveTest('spatial')} class={activeTest === 'spatial' ? 'text-primary-700 font-semibold' : ''}>{$t('nav.spatial')}</NavLi>
		</NavUl>
	</div>
	<Label>
		<Select class="mt-2" items={languages} value={$locale} onchange={handleLocaleChange} />
	</Label>
</Navbar>

<div class="min-h-screen bg-gray-50 p-4">
	<div class={activeTest === 'results' ? 'max-w-6xl mx-auto' : 'max-w-2xl mx-auto'}>
		{#key activeTest}
			{#if activeTest === 'reasoning'}
				<ReasoningTest onNext={() => setActiveTest('perceptual')} />
			{:else if activeTest === 'perceptual'}
				<PerceptualTest onNext={() => setActiveTest('number')} />
			{:else if activeTest === 'number'}
				<NumberTest onNext={() => setActiveTest('word')} />
			{:else if activeTest === 'word'}
				<WordTest onNext={() => setActiveTest('spatial')} />
			{:else if activeTest === 'spatial'}
				<SpatialTest onNext={() => setActiveTest('results')} />
			{:else if activeTest === 'results'}
				<ResultsView onBack={goToMenu} onStartTest={(test) => setActiveTest(test as ActiveView)} />
			{:else}
				{@const welcomeParts = $t('home.welcome').split('{gia}')}
				<div class="text-center py-12">
					<h1 class="text-3xl font-bold text-gray-800 mb-6">
						{welcomeParts[0]}<a href={$currentTranslations.home.giaLink} target="_blank" rel="noopener noreferrer" class="text-primary-600 hover:underline">{$currentTranslations.home.giaLabel}</a>{welcomeParts[1] || ''}
					</h1>

					<p class="text-gray-600 mb-4">{$t('home.description')}</p>

					<ul class="text-left inline-block mb-6">
						{#each testKeys as key}
							<li class="text-gray-700 py-1">
								<span class="font-medium">{$currentTranslations.resultsPage.testNames[key]}</span>
								<span class="text-gray-500 ml-2">({Math.floor(TEST_DURATIONS[key] / 60)} {$t('home.minute')})</span>
							</li>
						{/each}
					</ul>

					<p class="text-gray-600 mb-8 max-w-lg mx-auto">{$t('home.encouragement')}</p>

					<Button onclick={() => setActiveTest('reasoning')}>{$t('resultsPage.startTest')}</Button>
				</div>
			{/if}
		{/key}
	</div>
</div>
