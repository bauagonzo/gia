<script lang="ts">
	import { Navbar, NavBrand, NavLi, NavUl } from 'flowbite-svelte';
	import { Select, Label } from 'flowbite-svelte';
	import { locale, t, type Locale } from '$lib/i18n';

	let languages = [
		{ value: 'en', name: 'EN' },
		{ value: 'fr', name: 'FR' },
		{ value: 'sp', name: 'SP', disabled: true }
	];

	function handleLocaleChange(e: Event) {
		const target = e.target as HTMLSelectElement;
		locale.set(target.value as Locale);
	}
</script>

<Navbar class="bg-white border-b border-gray-200">
	<NavBrand href="#">
		<span class="text-xl font-semibold">GIA test</span>
	</NavBrand>
	<div class="flex mx-auto space-x-4">
		<NavUl>
			<NavLi href="/results">{$t('nav.results')}</NavLi>
			<NavLi href="/reasoning">{$t('nav.reasoning')}</NavLi>
			<NavLi href="/perceptual">{$t('nav.perceptual')}</NavLi>
			<NavLi href="/number">{$t('nav.number')}</NavLi>
			<NavLi href="/word">{$t('nav.word')}</NavLi>
			<NavLi href="/spatial">{$t('nav.spatial')}</NavLi>
		</NavUl>
	</div>
	<Label>
		<Select class="mt-2" items={languages} value={$locale} onchange={handleLocaleChange} />
	</Label>
</Navbar>
