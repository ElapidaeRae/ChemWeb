// temporary api endpoint for testing
// Returns the method with the given ID
import {json} from '@sveltejs/kit';
import type {RequestHandler} from '@sveltejs/kit';

export const GET: RequestHandler = async ({request}) => {
	const response = { name: 'Ammonia', description: 'A method for testing', stepIDs: [1, 2, 3], methodID: 1 };
	return json(response);
}

export const PUT: RequestHandler = async ({request}) => {
	const response = { message: 'Method updated' };
	return json(response);
}

export const DELETE: RequestHandler = async ({request}) => {
	const response = { message: 'Method deleted' };
	return json(response);
}

export const POST: RequestHandler = async ({request}) => {
	const response = { message: 'Method created' };
	return json(response);
}

