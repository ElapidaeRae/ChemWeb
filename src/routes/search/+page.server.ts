import { page } from '$app/stores';

let vear = $page.url.searchParams.get('query');
export async function load() {
	let pageName = $page.url.searchParams.get('query')
	page.set(pageName);
}