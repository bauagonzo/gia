<script lang="ts">
	import { onMount } from 'svelte';

	interface Props {
		duration: number;
		onExpire: () => void;
	}

	let { duration, onExpire }: Props = $props();

	let remaining = $state(duration);
	let intervalId: ReturnType<typeof setInterval> | null = null;

	function formatTime(seconds: number): string {
		const mins = Math.floor(seconds / 60);
		const secs = seconds % 60;
		return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
	}

	onMount(() => {
		intervalId = setInterval(() => {
			remaining--;
			if (remaining <= 0) {
				if (intervalId) clearInterval(intervalId);
				onExpire();
			}
		}, 1000);

		return () => {
			if (intervalId) clearInterval(intervalId);
		};
	});
</script>

<div class="text-lg font-mono text-gray-700 dark:text-gray-300" class:text-red-600={remaining <= 30} class:dark:text-red-400={remaining <= 30}>
	{formatTime(remaining)}
</div>
