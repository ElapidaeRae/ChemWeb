<script lang="ts">
	import { writable } from 'svelte/store';
	import DarkModeToggle from './DarkModeToggle.svelte';

	export let profileMenu = writable(false);

	profileMenu.subscribe(value => {
		if (value) {
			document.getElementById('profileMenu').classList.remove('hidden');
		} else {
			document.getElementById('profileMenu').classList.add('hidden');
		}
	});
</script>

<div class="flex items-center space-x-2">
	<button on:click={() => $profileMenu = !$profileMenu}>Profile</button>
	<div id="profileMenu" class="hidden">
		<DarkModeToggle />
		<a href="../../routes/account" class="text-text">Account</a>
		<a href="logout" class="text-text">Logout</a>
	</div>
</div>
