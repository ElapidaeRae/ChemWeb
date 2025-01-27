<script lang="ts">
	// New method creation page
	// Make a bunch of entry boxes until i make it look good
	import { enhance } from "$app/forms";
	export let form;
</script>

<body>
	<div>
		<h1>New Method</h1>
		<form use:enhance>
			<label for="name">Name</label>
			<input type="text" id="name" name="name" required />

			<label for="description">Description</label>
			<textarea id="description" name="description" required></textarea>

			<label for="tags">Tags</label>
			<input type="text" id="tags" name="tags" />

			<label for="picture">Picture</label>
			<input type="file" id="picture" name="picture" />

			<button type="submit">Create Method</button>
		</form>
	</div>
</body>