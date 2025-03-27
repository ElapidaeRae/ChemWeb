import { createMethod, createStep, getUserByUsername } from '$lib/database';
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
		// get all the data from the form called 'step'
		let steps = [];
		let i = 1;
		while (data.get('step' + i)) {
			let stepname = data.get('stepname' + i);
			let stepdesc = data.get('stepdesc' + i);
			steps.push({name: stepname, description: stepdesc});
			i++;
		}

		// Check if the user is logged in
		const token = cookies.get('jwt');
		if (!token) {
			return redirect(303, '/login?redirectTo=/new-method');
		}
		// Check if the JWT token is valid
		if (!jwt.verify(token, JWT_SECRET)) {
			return redirect(303, '/login?redirectTo=%2Fnew-method');
		}
		console.log('Logged in');
		// Get the user's id by first decoding the JWT token
		let username = jwt.decode(token).sub;
		let users = await getUserByUsername(username);
		let userId = users.id;
		// Create the method in the database
		let method = await createMethod(userId, name, description, tagslist);
		// Add the steps to the method
		for (const step of steps) {
			let thestep = await createStep(method.id, step.name, step.description);
		}
		// Redirect to the new method page
		return redirect(303, '/method:' + method.id);
	}
} satisfies Actions;