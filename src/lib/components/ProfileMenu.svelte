<script lang="ts">
	import DarkModeToggle from './DarkModeToggle.svelte';

	let dropdownState = false;

	const toggleDropdown = () => {
		dropdownState = !dropdownState;
		console.log(dropdownState);
	}

	// Close the dropdown menu if the user clicks on an element outside of the dropdown
	const dropdownLostFocus = ({relatedTarget, currentTarget}) => {
		if (relatedTarget === null || !currentTarget.contains(relatedTarget)) {
			dropdownState = false;
		}
	}
</script>

<div class="flex items-center" on:focusout={dropdownLostFocus}>
	<div class="flex flex-col menu bg-background rounded-lg shadow-lg shadow-accent p-2 relative translate-y-20 translate-x-8 items-center" style:visibility={dropdownState ? 'visible' : 'hidden'}>
		<DarkModeToggle />
		<a href="/settings" class="text-text">Settings</a>
		<a href="/logout" class="text-text">Logout</a>
	</div>

	<button class="relative text-text border-4 border-black rounded-full p-1 m-2 dropdown" on:click={toggleDropdown}>
		<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  		<path stroke-linecap="round" stroke-linejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
		</svg>
	</button>

</div>
