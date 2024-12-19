import {authenticateUser, getUserSettings} from '$lib/database';
import * as jwt from 'jsonwebtoken'

let username = ''

export const actions = {
	default: async ({request}) => {
		const data = await request.formData()
		username = data.get('username')
		let password = data.get('password')
		if (username == null || password == null) {
			return {
				status: 400,
				body: {
					message: 'All fields are required'
				}
			}
		}
		let [valid, message] = await authenticateUser(username, password)
		if (!valid) {
			console.log(message);
		} else {
			let cookies = {
				set: (value: any) => {
					return {
						'set-cookie': `jwt=${value}; Path=/; HttpOnly`
					};
				}
			};
			let jwtpayload = {
				'iss': 'chemweb',
				'sub': username,
				'iat': new Date().getTime()
			};
			if (!process.env.JWT_SECRET) {
				throw new Error('JWT_SECRET not set');
			}
			let jwtoken = jwt.sign(jwtpayload, process.env.JWT_SECRET, {expiresIn: '3d'});
			cookies.set(jwtoken);
		}
	}
}
