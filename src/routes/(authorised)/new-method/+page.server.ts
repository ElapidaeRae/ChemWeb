import { createMethod, createStep, getUserByUsername } from '$lib/database';
import { fail, json, redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import type { Actions } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';

export const actions = {
	default: async ({request, cookies} ) => {
		// Get the form data
		const data = await request.formData();
		console.log('New Method Data: ' + JSON.stringify(data));
		let name = data.get('name');
		// Check if the name is empty
		if (name == null || name == '') {
			return fail(400, {name, error: 'Name is required'});
		}
		if (typeof name !== 'string') {
			return fail(400, {name, error: 'Name must be a string'});
		}

		let description = data.get('description');
		let tagdata = data.get('tags');
		// Check if the tagslist is a string, if so, split it into an array
		let tagslist;
		if (typeof tagdata === 'string') {
			tagslist = tagdata.split(',');
		}
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

		let token = cookies.get('jwt');
		if (!token) {
			return redirect(303, '/login');
		}
		// Get the username from the JWT token
		let authed = jwt.verify(token, JWT_SECRET);
		if (typeof authed.sub !== 'string') {
			return fail(401, {error: 'Invalid Token'});
		}
		// Get the user's id by first decoding the JWT token
		let username = authed.sub
		// Create the method in the database
		let method = await createMethod(username, name, description, tagslist, image);
		// Add the steps to the method
		for (const step of steps) {
			if (!step.name || !step.description) {
				return fail(400, {error: 'Step name and description are required'});
			}
			if (typeof step.name !== 'string' || typeof step.description !== 'string') {
				return fail(400, {error: 'Step name and description must be strings'});
			}
			await createStep(method.id, step.name, step.description);
		}
		// Redirect to the new method page
		return redirect(303, '/method:' + method.id);
	}
} satisfies Actions;