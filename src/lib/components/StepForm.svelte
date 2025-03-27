<script lang="ts">
	export let ordinal;

</script>

<div class="flex p-2 w-full">
	<label for="stepname{ordinal}" class="text-lg font-semibold text-gray-900 mr-2">Step {ordinal} Name:</label>
	<input type="text" id="stepname{ordinal}" name="stepname{ordinal}" class="p-2 rounded-md" required />

	<label for="stepdesc{ordinal}" class="text-lg font-semibold text-gray-900 mr-2">Step {ordinal} Description:</label>
	<textarea id="stepdesc{ordinal}" name="stepdesc{ordinal}" class="p-2 rounded-md" required />
</div>