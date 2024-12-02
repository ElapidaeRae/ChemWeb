<body>
	<main>
		<!-- The Contact us page -->
		<div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 p-2 ">
			<!-- Contact us form -->
			<form class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" action="?/send_email">
				<div class="mb-4">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="name">
						Name
					</label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="Name">
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="email">
						Email
					</label>
					<input class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="text" placeholder="Email">
				</div>
				<div class="mb-6">
					<label class="block text-gray-700 text-sm font-bold mb-2" for="message">
						Message
					</label>
					<textarea class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="message" placeholder="Message"></textarea>
				</div>
				<div class="flex items-center justify-between">
					<button class="bg-secondary hover:bg-accent text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="button">
						Send
					</button>
				</div>
			</form>
		</div>

	</main>
</body>