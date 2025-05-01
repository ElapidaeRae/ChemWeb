import { createUser } from '$lib/database';
import { redirect } from '@sveltejs/kit';


export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		let username = data.get('username');
		let email = data.get('email');
		let password = data.get('password');
		let confirm = data.get('confirm');

		console.log('Registration Data: ' + data)
		if (email == null || username == null || password == null || confirm == null) {
			return {
				status: 422,
				body: 'All fields are required'
			}
		}
		else if (password != confirm) {
			return {
				status: 422,
				body: 'Passwords do not match'
			}
		}
		else if (email instanceof File || username instanceof File || password instanceof File || confirm instanceof File) {
			return {
				status: 418,
				body: 'What did you do?'
			}
		}
		else {
			await createUser(username, email, password)
			return redirect(303, '/')
		}
	}
}
