<script lang="ts">

	const SettingsMenus = ["Account", "Privacy", "Security", "DelAccount"];

</script>


<main class="bg-background">
	<div class="flex flex-col items-center">
		<h1 class="text-text text-4xl font-bold p-4">Settings</h1>
		<div class="grid grid-cols-3 gap-4">

			<!-- Settings menu options on the left side of the page -->
			<div class="col-span-1 p-4 border-r-4 border-accent">
				<h2 class="text-text text-lg font-bold">Settings Menu</h2>
				{#each SettingsMenus as menu}
					<button class="text-text p-2 w-full">{menu}</button>
				{/each}
			</div>

			<!-- Settings content on the right side of the page -->
			<div class="grid col-span-2 p-4">
				<slot></slot>
			</div>

		</div>
	</div>
</main>