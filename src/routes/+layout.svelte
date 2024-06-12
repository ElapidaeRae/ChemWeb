<script>
	import '../app.css';
	import logo from '$lib/ChemWebWordLogo.svg';
	import SearchBar from './SearchBar.svelte';
</script>


<!--The Nav Bar, containing all of the navigation elements-->
<nav class="bg-background items-center p-2">
	<div class="mx-auto p-4 max-w-screen ">
		<div class="flex flex-row justify-between items-center">
			<!-- The Logo of the website, linking to the home page-->
			<a href="/" class="space-x-2 inline">
				<img src={logo} alt="Logo" class="md:h-12 h-8" />
			</a>
			<!-- The Search Bar, allowing users to search for methods across the website with a dropdown menu for filters-->
			<SearchBar />


		</div>
		<!-- The Navigation Links, linking to the different pages of the website-->
		<div class="flex-none w-3/4 flex justify-end space-x-4">
			<a href="#" class="text-text">Home</a>
			<a href="#" class="text-text">Methods</a>
			<a href="account" class="text-text">Account</a>
		</div>
	</div>
</nav>
<slot></slot>

<style></style>
