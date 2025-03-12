// Load function to fetch method data for the page
import { getRandomMethod } from '$lib/database';

export async function load() {
	const methods = await getRandomMethod(2);
	if (methods == null) {
		throw new Error('No methods found');
	}
	return {data: methods};
}