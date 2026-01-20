<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl } from 'flowbite-svelte';
	import { Select, Label } from 'flowbite-svelte';
	import { locale, t, type Locale } from '$lib/i18n';
	import ReasoningTest from '$lib/components/tests/ReasoningTest.svelte';
	import PerceptualTest from '$lib/components/tests/PerceptualTest.svelte';
	import NumberTest from '$lib/components/tests/NumberTest.svelte';
	import WordTest from '$lib/components/tests/WordTest.svelte';
	import SpatialTest from '$lib/components/tests/SpatialTest.svelte';
	import ResultsView from '$lib/components/tests/ResultsView.svelte';

	type ActiveView = 'menu' | 'reasoning' | 'perceptual' | 'number' | 'word' | 'spatial' | 'results';

	let activeTest = $state<ActiveView>('menu');

	let languages = [
		{ value: 'en', name: 'EN' },
		{ value: 'fr', name: 'FR' },
		{ value: 'sp', name: 'SP', disabled: true }
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
	<NavBrand href="#">
		<span class="text-xl font-semibold">GIA test</span>
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
				<ReasoningTest onBack={goToMenu} />
			{:else if activeTest === 'perceptual'}
				<PerceptualTest onBack={goToMenu} />
			{:else if activeTest === 'number'}
				<NumberTest onBack={goToMenu} />
			{:else if activeTest === 'word'}
				<WordTest onBack={goToMenu} />
			{:else if activeTest === 'spatial'}
				<SpatialTest onBack={goToMenu} />
			{:else if activeTest === 'results'}
				<ResultsView onBack={goToMenu} onStartTest={(test) => setActiveTest(test as ActiveView)} />
			{:else}
				<div class="text-center py-12">
					<h1 class="text-3xl font-bold text-gray-800 mb-4">{$t('home.welcome')}</h1>
					<p class="text-gray-600">{$t('home.selectTest')}</p>
				</div>
			{/if}
		{/key}
	</div>
</div>
