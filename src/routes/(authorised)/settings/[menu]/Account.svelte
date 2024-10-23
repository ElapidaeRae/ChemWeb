<script lang="ts">
	// Account information settings component
	// This component will allow the user to change their username, email, and password in a form

	import { enhance } from '$app/forms';


</script>

<div class="col-span-2 rounded-lg p-4">
	<h2 class="text-text text-lg font-bold">Account Information</h2>
	<form class="p-2" method="post" use:enhance>
		<label for="username" class="block text-text text-sm">Username</label>
		<input type="text" id="username" name="username" class="w-full p-2 rounded-md" />

		<label for="Bio" class="block text-text text-sm pt-2">Bio</label>
		<textarea id="Bio" name="Bio" class="w-full p-2 rounded-md"></textarea>

		<label for="email" class="block text-text text-sm pt-2">Email</label>
		<input type="email" id="email" name="email" class="w-full p-2 rounded-md" />

		<label for="password" class="block text-text text-sm pt-2">New Password</label>
		<input type="password" id="password" name="password" class="w-full p-2 rounded-md" />

		<label for="confirm-password" class="block text-text text-sm pt-2">Confirm Password</label>
		<input type="password" id="confirm-password" name="confirm-password" class="w-full p-2 rounded-md" />

		<button type="submit" class="bg-primary text-text rounded-lg p-2 mt-4">Save Changes</button>
	</form>
</div>