import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export function load({ cookies, url }) {
	let token = cookies.get('jwt');
	if (!token) {
		return redirect(303,'/login?redirectTo=' + url.pathname);
	}
	if (jwt.verify(token, JWT_SECRET)) {
		return {
			status: 200
		};
	}
}