import { redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';

export function load({ cookies, url }) {
	let token = cookies.get('jwt');
	if (!token) {
		cookies.set('redirectTo', url.pathname, { path: '/' });
		return redirect(303,'/login');
	}
	if (jwt.verify(token, JWT_SECRET)) {
		cookies.delete('redirectTo', { path: '/' });
		return {
			status: 200
		};
	}
}