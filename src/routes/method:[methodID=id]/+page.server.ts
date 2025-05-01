import { getMethodById, getStepsByMethod } from '$lib/database';

export async function load({url}) {
	// Load function to fetch method and step data for the page
	let methodid = url.pathname.split(':')[1];
	const method = await getMethodById(methodid);
	if (method == null) {
		throw new Error('No methods found');
	}
	// fetch the steps for the method
	let steps = await getStepsByMethod(methodid);
	if (steps == null) {
		throw new Error('No steps found');
	}
	// Check if the method is public or private
	if (method.public == true) {

	}
	return {data: method};
}