import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';

export function load({cookies, fetch}) {
	let token = cookies.get('jwt');
	let auth: boolean;
	if (!token) {
		return {auth: false, sub: null};
	}
	let authed = jwt.verify(token, JWT_SECRET);
	if (!!authed) {
		return {auth: true, sub: authed.sub};
	}
}
