import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';
import { loggedIn } from '$lib/stores';

export function load({cookies, fetch}) {
	let token = cookies.get('jwt');
	let auth;
	if (!token) {
		loggedIn.set(false);
		return {auth: false};
	}
	let authed = jwt.verify(token, JWT_SECRET);
	if (!!authed) {
		loggedIn.set(true);
		return {auth: true};
	}
}
