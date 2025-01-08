import {authenticateUser, getUserSettings} from '$lib/database';
import { fail, redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';


export const actions = {
	default: async ({request, cookies}) => {
		// retrieving the login form data
		const data = await request.formData()
		console.log(data);
		let username: string = data.get('username')
		let password: string = data.get('password')
		// if the username or password is null, return a form error
		if (username == null || password == null) {
			return fail(400,{username, error:'All fields are required'})
		}
		// authenticate the password against the database
		let [valid, message] = await authenticateUser(username, password)
		if (!valid) {
			console.log(valid,message);
		} else {
			console.log(valid,message);
			let jwtpayload = {
				'iss': 'chemweb',
				'sub': username,
				'iat': new Date().getTime()
			};
			console.log(jwtpayload,JWT_SECRET);
			if (JWT_SECRET == null) {
				console.log('JWT_SECRET not set');
				return fail(501, {error:'JWT_SECRET not set'});
			}
			let expiry = getUserSettings(username).then((settings) => {
				return settings.loginduration;
			});
			console.log('Expiry: ', expiry);
			let jwtoken = jwt.sign(jwtpayload, JWT_SECRET, {expiresIn: '72h'});
			console.log('JWT made: ', jwtoken);
			cookies.set('jwt', jwtoken, {path: '/'});
			console.log('Cookie set');
			return redirect(300, '/');
		}
	}
}
