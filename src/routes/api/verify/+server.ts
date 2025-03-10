// An api route to verify a JWT token

import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';
import { json } from '@sveltejs/kit';

export async function POST({ request, cookies }) {
	let token = cookies.get('jwt');
	if (!token) {
		return json({error: 'No Token'}, {status: 401});
	}
	let authed = jwt.verify(token, JWT_SECRET);
	// Verify that the token is still in date
	if (authed.iat < new Date().getTime()) {
		// Token has expired and must be removed
		cookies.set('jwt', '', {path: '/', expires: new Date(0)});
		return json({error: 'Token has expired'}, {status: 401});
	}
	if (!!authed) {
		return json({username: authed.sub}, {status: 200});
	} else {
		return json({error: 'Invalid Token'}, {status: 401});
	}
}

export async function PUT({ request, cookies }) {
	// Create a new JWT from a payload
	let jwtpayload = await request.json();
	let token = jwt.sign(jwtpayload, JWT_SECRET);
	cookies.set('jwt', token, {path: '/'});
	return json({auth: true, token: token});
}