<!-- The Account page will display the user's settings information and settings. -->
<!-- The user will be able to change their username, email, and password. -->
<!-- The user will also be able to delete their settings. -->

<script lang="ts">
	// Different components will be imported to be used in the settings page
	// Buttons on the left will change the displayed component on the right
	import BigRedButton from '$lib/components/BigRedButton.svelte';
	import "./[menu]";
	import Account from './[menu]/Account.svelte';

	// TODO: Fill the settings components with actual content
</script>

<body>
	<main class="bg-background p-4">
		<div class="grid grid-cols-3 gap-4">
			<div class="col-span-1 p-2">
				Testing
			</div>
		<Account />
		</div>
	</main>
</body>
