import { createMethod, getUserByUsername } from '$lib/database';
import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import type { Actions } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';

export const actions = {
	default: async ({request , cookies} ) => {
		// Get the form data
		const data = await request.formData();
		console.log('New Method Data: ' + data);
		let name = data.get('name');
		let description = data.get('description');
		let tagslist = data.get('tags').split(',');
		let image = data.get('image');
		console.log(image);

		// Check if the user is logged in
		const token = cookies.get('jwt');
		if (!token) {
			return redirect(303, '/login?redirectTo=/new-method');
		}
		// Check if the JWT token is valid
		if (!jwt.verify(token, JWT_SECRET)) {
			return redirect(303, '/login?redirectTo=/new-method');
		}
		console.log('Logged in');
		// Get the user's id by first decoding the JWT token
		let username = jwt.decode(token).sub;
		let users = await getUserByUsername(username);
		let userId = users.id;
		// Create the method in the database
		let method = await createMethod(userId, name, description, tagslist);
		// Redirect to the new method page
		return redirect(303, '/method:' + method.id);
	}
} satisfies Actions;