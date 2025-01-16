<script>
import logo from '$lib/ChemWebWordLogo.svg';
import SearchBar from '$lib/components/LayoutSearchBar.svelte';
import ProfileMenu from '$lib/components/ProfileMenu.svelte';
import { onMount } from 'svelte';
import { loggedIn } from '$lib/stores';
import DarkModeMenu from '$lib/components/DarkModeMenu.svelte';

// Check if the user is logged in on mount of the component
onMount(({ cookies }) => {
	let token = cookies.get('jwt');
	if (!token) {
		loggedIn.set(true);
	} else {
		loggedIn.set(false);
	}
});

$: loggedIn.subscribe(value => {
	if (value) {
		console.log('User is logged in');
	} else {
		console.log('User is not logged in');
	}
});
</script>

<div class="flex flex-row justify-between items-center bg-secondary shadow-lg rounded-b-lg sticky -top-1 h-20">
	<!-- The Logo of the website, linking to the home page-->
	<a href="/" class="px-2 inline">
		<img src={logo} alt="ChemWeb" class="md:h-12 h-8 min-h-6 text-primary font-heading" />
	</a>
	<span class="flex">
		<SearchBar />
	</span>
	{#if ($loggedIn)}
		<ProfileMenu username="w" />
	{:else}
		<div class="p-4">
			<DarkModeMenu />
			<a href="/login" class="text-text rounded-md border-2 bg-primary p-2">Login</a>
			<a href="/register" class="text-text rounded-md border-2 bg-primary p-2">Register</a>
		</div>
	{/if}
</div>