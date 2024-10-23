<script lang="ts">
	// Registration page
	// This page will allow the user to register for an account on the website
	const argon2 = require('argon2');


</script>

<body>
	<main class="bg-background">
		<div>
			<form class="p-2" method="post" action="?/register">
				<label for="username" class="block text-text text-sm">Username</label>
				<input type="text" id="username" name="username" class="w-full p-2 rounded-md" />

				<label for="email" class="block text-text text-sm pt-2">Email</label>
				<input type="email" id="email" name="email" class="w-full p-2 rounded-md" />

				<label for="password" class="block text-text text-sm pt-2">Password</label>
				<input type="password" id="password" name="password" class="w-full p-2 rounded-md" />

				<label for="confirm-password" class="block text-text text-sm pt-2">Confirm Password</label>
				<input type="password" id="confirm-password" name="confirm-password" class="w-full p-2 rounded-md" />

				<button type="submit" class="bg-primary text-text rounded-lg p-2 mt-4">Register</button>
			</form>
		</div>
	</main>
</body>
