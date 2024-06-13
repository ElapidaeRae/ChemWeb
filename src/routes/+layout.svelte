<script>
	import '../app.css';
	import logo from '$lib/ChemWebWordLogo.svg';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import ProfileMenu from '$lib/components/ProfileMenu.svelte';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
</script>

<!--The Nav Bar, containing all of the navigation elements-->
<nav class="bg-background items-center p-2">
	<div class="mx-auto p-4 max-w-screen">
		<div class="flex flex-row justify-between items-center">
			<!-- The Logo of the website, linking to the home page-->
			<a href="/" class="space-x-2 inline">
				<img src={logo} alt="Logo" class="md:h-12 h-8" />
			</a>
			<!-- The Search Bar, allowing users to search for methods across the website with a dropdown menu for filters-->
			<SearchBar />
			<!-- A dark mode toggle switch, allowing users to switch between light and dark mode-->
			<!-- TODO: Make a profile menu dropdown that contains the user's account information and settings-->
			<DarkModeToggle />
		</div>
		<!-- The Navigation Links, linking to the different pages of the website-->
		<div class="flex justify-end space-x-4 mt-6 bg-primary rounded-md">
			<a href="#" class="text-text p-1">Home</a>
			<a href="#" class="text-text p-1">Methods</a>
			<a href="account" class="text-text p-1">Account</a>
			<div></div>
		</div>
	</div>
</nav>

<slot></slot>

<style></style>
