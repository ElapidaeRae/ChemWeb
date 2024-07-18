<!-- The Account page will display the user's settings information and settings. -->
<!-- The user will be able to change their username, email, and password. -->
<!-- The user will also be able to delete their settings. -->

<script lang="ts">

</script>

<body>
	<main class="bg-background">
		<!-- Everything in this div will be centered on the page -->
		<div class="flex flex-col items-center">
			<h1 class="text-text text-4xl font-bold p-4">Settings</h1>
			<div class="grid grid-cols-3 gap-4">
				<!-- Settings menu options on the left side of the page -->
				<div class="col-span-1 rounded-lg p-4">
					<h2 class="text-text text-lg font-bold">Settings</h2>
					<ul class="text-text text-sm p-2">
						<li class="p-2 m-2 bg-secondary rounded-md">Account Information</li>
						<li class="p-2 m-2 cursor-pointer rounded-md hover:bg-secondary">Privacy</li>
						<li class="p-2 m-2 cursor-pointer rounded-md hover:bg-secondary">Notifications</li>
						<li class="p-2 m-2 cursor-pointer rounded-md hover:bg-secondary">Security</li>
						<li class="p-2 m-2 cursor-pointer rounded-md hover:bg-accent">Delete Account</li>
					</ul>
				</div>
				<!-- Account information on the right side of the page -->
				<div class="col-span-2 rounded-lg p-4">
					<h2 class="text-text text-lg font-bold">Account Information</h2>
					<form class="p-2">
						<label for="username" class="block text-text text-sm">Username</label>
						<input type="text" id="username" name="username" class="w-full p-2 rounded-md" />

						<label for="email" class="block text-text text-sm pt-2">Email</label>
						<input type="email" id="email" name="email" class="w-full p-2 rounded-md" />

						<label for="password" class="block text-text text-sm pt-2">Password</label>
						<input type="password" id="password" name="password" class="w-full p-2 rounded-md" />

						<button type="submit" class="bg-primary text-text rounded-lg p-2 mt-4">Save Changes</button>
					</form>
				</div>
			</div>
		</div>
	</main>
</body>