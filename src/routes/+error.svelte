<script lang="ts">
	import { page } from '$app/stores';
</script>

<body class="bg-background">
	<main class="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
		<div class="text-center">
			<p class="text-base font-semibold text-accent">{$page.status}</p>
			<h1 class="mt-4 text-3xl font-bold font-heading tracking-tight text-text sm:text-5xl">{$page.error.message}</h1>
			<p class="mt-6 text-base leading-7 text-text">Sorry, an error seems to have occurred.</p>
			<div class="mt-10 flex items-center justify-center gap-x-6">
				<a href="/" class="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">Go back home</a>
				<a href="contact-us" class="text-sm font-semibold text-text">Contact support <span aria-hidden="true">&rarr;</span></a>
			</div>
		</div>
	</main>
</body>