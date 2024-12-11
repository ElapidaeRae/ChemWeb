<!-- Dark mode Toggle Switch -->
<script lang="ts">
	import { onMount } from 'svelte';

	let cookies = {
		set: (value: any) => {
			document.cookie = `darkMode=${value}; path=/`;
		},
		get: (name: string) => {
			let cookie = document.cookie.split(';').find(cookie => cookie.startsWith(name));
			if (cookie) {
				return cookie.split('=')[1] === 'true';
			}
			return false;
		}
	};

	onMount(() => {
		if (cookies.get('darkMode')) {
			document.querySelector('body').classList.add('dark');
		}
	});

	export function DarkModeToggle(cookie: boolean) {
		if (cookie === true) {
			document.querySelector('body').classList.remove('dark');
			cookies.set(false);
		} else {
			document.querySelector('body').classList.add('dark');
			cookies.set(true);
		}
	}

</script>

<button class="text-text shadow-inner shadow-primary rounded-lg p-1" on:click={() => DarkModeToggle(cookies.get('darkMode'))}>
<!--	<input type="checkbox" bind:value={darkMode}>-->
	Dark Mode
</button>

