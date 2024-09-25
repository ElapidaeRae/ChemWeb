<!-- The Account page will display the user's settings information and settings. -->
<!-- The user will be able to change their username, email, and password. -->
<!-- The user will also be able to delete their settings. -->

<script lang="ts">
	// Different components will be imported to be used in the settings page
	// Buttons on the left will change the displayed component on the right
	import { onMount } from 'svelte';
	import { createEventDispatcher } from 'svelte';
	import BigRedButton from '$lib/components/BigRedButton.svelte';
	import { Account } from './menus';

	// TODO: Fill the settings components with actual content
</script>

<body>
	<main class="bg-background">
		<Account />
	</main>
</body>