<script lang="ts">

	enum SettingsMenus {
		AccountInfo,
		Privacy,
		Security,
		Delete

	}
</script>


<main class="bg-background border-r-4">
	<div class="flex flex-col items-center">
		<h1 class="text-text text-4xl font-bold p-4">Settings</h1>
		<div class="grid grid-cols-3 gap-4">
			<!-- Settings menu options on the left side of the page -->
			<div class="col-span-1 rounded-lg p-4 border-r-4 border-accent">
				<h2 class="text-text text-lg font-bold">Settings Menu</h2>
			</div>
			<div class="grid col-span-2 p-4">
				<slot></slot>
			</div>
		</div>
	</div>
</main>