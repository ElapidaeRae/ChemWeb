import {authenticateUser, getUserSettings} from '$lib/database';
import { fail, redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
import type { Actions } from '@sveltejs/kit';


export const actions = {
	default: async ({request, cookies, url}) => {
		// If the user is already logged in, redirect them to the root page
		let token = cookies.get('jwt');
		if (token) {
			return redirect(303, '/');
		}
		// retrieving the login form data
		const data = await request.formData()
		let username: string = data.get('username')
		let password: string = data.get('password')
		// if the username or password is null, return a form error
		if (username == null || password == null) {
			return fail(400,{username, error:'All fields are required'})
		}
		// authenticate the password against the database
		let [valid, message] = await authenticateUser(username, password)
		// if the password is invalid, return a form error
		if (!valid) {
			return fail(400,{error:message})
		} else {
			// otherwise, create a JWT token and set it as a cookie
			let jwtpayload = {
				'iss': 'chemweb',
				'sub': username,
				'iat': new Date().getTime()
			};
			if (JWT_SECRET == null) {
				console.log('JWT_SECRET not set');
				return fail(501, {error:'JWT_SECRET not set'});
			}
			// let expiry = getUserSettings(username).then((settings) => {
			// 	return settings.loginduration;
			// });
			let expiry = '72h';
			let token = jwt.sign(jwtpayload, JWT_SECRET, {expiresIn: expiry});
			cookies.set('jwt', token, {path: '/'});
			// Redirect to the page the user was trying to access
			if (url.searchParams.get('redirectTo') == null) {
				return redirect(303, '/');
			}
			console.log('Redirecting to ' + url.searchParams.get('redirectTo'));
			return redirect(303, '/' + url.searchParams.get('redirectTo'));
		}
	}
} satisfies Actions;
