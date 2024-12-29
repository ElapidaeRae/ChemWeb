<script lang="ts">
	// Registration page
	// This page will allow the user to register for an account on the website

</script>

<body>
	<main class="bg-background content-center h-screen">
		<div class="flex flex-wrap justify-center items-center p-2">
			<h1 class="text-4xl text-text p-8 block ">Register</h1>
			<form class="p-8 flex flex-col border-l-4 border-text" method="post">
				<label for="username" class="block text-text text-sm">Username</label>
				<input type="text" id="username" name="username" class="p-2 rounded-md" required />

				<label for="email" class="block text-text text-sm pt-2">Email</label>
				<input type="email" id="email" name="email" class="p-2 rounded-md" required />

				<label for="password" class="block text-text text-sm pt-2">Password</label>
				<input type="password" id="password" name="password" class="p-2 rounded-md" required />

				<label for="confirm" class="block text-text text-sm pt-2">Confirm Password</label>
				<input type="password" id="confirm" name="confirm" class="p-2 rounded-md" required />

				<button type="submit" class="bg-primary text-text rounded-lg p-2 mt-4">Register</button>

			</form>
		</div>
	</main>
</body>
