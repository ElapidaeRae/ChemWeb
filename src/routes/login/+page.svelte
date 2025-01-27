<script lang="ts">
	import { enhance } from '$app/forms';
	export let form;
	// Define the form on the page so that the error can be displayed

</script>

<body>
<main class="bg-background content-center h-screen">
	<div class="flex flex-wrap justify-center items-center p-2">
		<h1 class="text-4xl text-text p-8 block">Login</h1>
		<form class="p-8 flex flex-col border-l-4 border-text">
			<label for="username" class="block text-text text-sm">Username</label>
			<input type="text" id="username" name="username" class="p-2 rounded-md" required />

			<label for="password" class="block text-text text-sm pt-2">Password</label>
			<input type="password" id="password" name="password" class="p-2 rounded-md" required />

			{#if form?.error}
				<p class="text-accent text-sm">{form?.error}</p>
			{/if}

			<button type="submit" class="bg-primary rounded-lg p-2 mt-4">Log In</button>
		</form>
	</div>
</main>
</body>
