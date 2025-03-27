import { page } from '$app/stores';

export async function load() {
	let pageName = $page.url.searchParams.get('query')
	page.set(pageName);
}