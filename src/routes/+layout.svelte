<script>
	import '../app.css';
	import logo from '$lib/ChemWebWordLogo.svg';
	import SearchBar from '$lib/components/SearchBar.svelte';
	import ProfileMenu from '$lib/components/ProfileMenu.svelte';
	import DarkModeToggle from '$lib/components/DarkModeToggle.svelte';
</script>


<div class="flex flex-row justify-between items-center bg-secondary shadow-lg rounded-b-lg sticky -top-1 h-20">
	<!-- The Logo of the website, linking to the home page-->
	<a href="/" class="px-2 inline">
		<img src={logo} alt="ChemWeb" class="md:h-12 h-8 min-h-6 text-primary font-heading" />
	</a>
	<!-- The Search Bar, allowing users to search for methods across the website with a dropdown menu for filters-->
	<SearchBar />
	<ProfileMenu />
</div>
<!--</nav>-->

<slot></slot>

