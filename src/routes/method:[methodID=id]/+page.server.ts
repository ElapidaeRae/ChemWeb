import { getMethodById } from '$lib/database';

export async function load({url}) {
	// Load function to fetch method data for the page
	let methodid = url.pathname.split(':')[1];
	const method = await getMethodById(methodid);
	if (method == null) {
		throw new Error('No methods found');
	}
	return {data: method};
}