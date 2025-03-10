<script lang="ts">
	// New method creation page
	// Make a bunch of entry boxes until i make it look good
	import { enhance } from "$app/forms";
	export let form;
</script>

<body>
	<div class="flex flex-col items-center p-2">
		<h1>New Method</h1>
		<form class="flex flex-col items-center justify-center" use:enhance>
			<label for="name">Name</label>
			<input type="text" id="name" name="name" class="rounded-md" required />

			<label for="description">Description</label>
			<textarea id="description" name="description" class="rounded-md" required></textarea>

			<label for="tags">Tags</label>
			<p class="text-center text-sm">Separate tags with commas</p>
			<input type="text" id="tags" name="tags" class="rounded-md" required />

			<label for="picture">Picture</label>
			<input type="file" id="picture" name="picture" />

			<button class="rounded-md border-4 border-accent bg-background text-text p-1 m-2" type="submit">Create Method</button>
		</form>
	</div>
</body>