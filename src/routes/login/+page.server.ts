import {authenticateUser, getUserSettings} from '$lib/database';
import { fail, redirect } from '@sveltejs/kit';
import jwt from 'jsonwebtoken';
import { JWT_SECRET } from '$env/static/private';
import type { Actions } from '@sveltejs/kit';
import { goto } from '$app/navigation';


export const actions = {
	default: async ({request, cookies, url}) => {
		// If the user is already logged in, redirect them to the root page
		let token = cookies.get('jwt');
		if (token) {
			return redirect(303, '/');
		}
		// retrieving the login form data
		const data = await request.formData()
		console.log('Login form: ' + data)
		let username: FormDataEntryValue | null = data.get('username')
		let password: FormDataEntryValue | null = data.get('password')
		// if the username or password is null, return a form error
		if (username == null || password == null) {
			return fail(400,{username, error:'All fields are required'})
		}
		// If the user somehow managed to upload a file as a username or password, return a form error befitting the absurdity of that
		if (username instanceof File || password instanceof File) {
			return fail(418, {error: 'What did you do?'})
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
				return fail(501, {error: 'JWT_SECRET not set'});
			}
			let expiry = '72h';
			let token = jwt.sign(jwtpayload, JWT_SECRET, {expiresIn: expiry});
			cookies.set('jwt', token, {path: '/', expires: new Date(new Date().getTime() + 1000 * 60 * 60 * 24 * 3), httpOnly: true, secure: true});
			// Redirect to the page the user was trying to access
			let location = url.searchParams.get('redirectTo');
			if (location == null) {
				return redirect(303, '/');
			} else {
				return redirect(303, location);
			}
		}
	}
} satisfies Actions;
