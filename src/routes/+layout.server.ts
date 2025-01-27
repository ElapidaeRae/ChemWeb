import { JWT_SECRET } from '$env/static/private';
import jwt from 'jsonwebtoken';

export function load({cookies}) {
	let token = cookies.get('jwt');
	if (!token) {
		return false;
	}
	let authed = jwt.verify(token, JWT_SECRET);
}

export let teststrung = 'test'