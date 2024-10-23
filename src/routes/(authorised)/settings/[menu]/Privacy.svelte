<script lang="ts">
	// Privacy settings component
	// Radio buttons will allow the user to change their privacy settings

</script>

<h1 class="font-bold text-xl leading-tight text-accent">Privacy Settings</h1>

<form class="p-2">
	<label for="privacy" class="block text-text text-sm">Privacy</label>
	<div class="flex items-center">
		<input type="radio" id="public" name="privacy" value="public" class="mr-2" />
		<label for="public" class="text-text">Public</label>

		<input type="radio" id="private" name="privacy" value="private" class="ml-4 mr-2" />
		<label for="private" class="text-text">Private</label>
	</div>
</form>
