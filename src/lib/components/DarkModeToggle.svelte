<!-- Dark mode Toggle Switch -->
<script lang="ts">
	import { onMount } from 'svelte';

	let cookies = {
		set: (name: string, value: any) => {
			document.cookie = `${name}=${value}; path=/`;
		},
		get: (name: string) => {
			let cookie = document.cookie.split(';').find(cookie => cookie.includes(name));
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
			cookies.set('darkMode', false);
		} else {
			document.querySelector('body').classList.add('dark');
			cookies.set('darkMode', true);
		}
	}


</script>

<div class="flex items-center space-x-2">
	<button class="text-text border-4 border-primary rounded-lg p-1" on:click={() => DarkModeToggle(cookies.get('darkMode'))}>Dark Mode</button>
</div>

