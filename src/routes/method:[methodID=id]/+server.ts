// Gets the appropriate method based on the methodID

import { getMethodById } from '$lib/database';

export async function GET({ params }) {
	const { methodID } = params;
	const method = await getMethodById(methodID);
	if (method) {
		return {
			body: method
		};
	}
	return {
		status: 404,
		body: {
			error: 'Method not found'
		}
	};
}