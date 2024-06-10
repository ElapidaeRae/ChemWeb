<script>
	import '../app.css';
	import logo from '$lib/ChemWebWordLogo.svg';
	import SearchBar from './SearchBar.svelte';
</script>

<!--The Header for the page-->
<header class="bg-background flex-none">
<!--	The Nav Bar, containing all of the navigation elements-->
	<nav class="bg-background items-center">
		<div class="mx-auto p-4 max-w-screen-xl flex-wrap items-center">
			<!-- The Logo of the website, linking to the home page-->
			<a href="/" class="space-x-2 flex items-center">
				<img src={logo} alt="Logo" class="md:h-12 h-8" />
			</a>

			<!-- The Search Bar, allowing users to search for methods across the website with a dropdown menu for filters-->
			<SearchBar />
			<a href="account" class="text-text">Account</a>
		</div>
	</nav>
</header>

<slot></slot>

<style></style>
