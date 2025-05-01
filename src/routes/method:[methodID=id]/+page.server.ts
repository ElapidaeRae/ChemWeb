import { getMethodById, getStepsByMethod, getUserByUsername } from '$lib/database';
import { redirect, type RequestHandler } from '@sveltejs/kit';
import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';

export async function load({url, cookies}) {
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
	let userId;
	if (method.public == false) {
		// Check if the user is logged in as the author
		let token = cookies.get('jwt');
		if (!token) {
			throw redirect(303, '/');
		} else {
			// Check if the user is the author
			let authed = jwt.verify(token, JWT_SECRET);
			if (typeof authed.sub !== 'string') {
				throw redirect(303, '/');
			}
			if (authed.sub !== method.Creator.username) {
				throw redirect(303, '/');
			}
			userId = await getUserByUsername(authed.sub).then(
				(user) => {
					if (user == null) {
						throw new Error('No user found');
					}
					return user.id;
				}
			)
		}
	}
	console.log(url.href)
	let resp = await fetch(url.origin + '/api/like', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({methodid, userId})
	});
	return {data: {method, steps, userId}};
}
