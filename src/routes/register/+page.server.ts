import { prisma } from '$lib/prisma';
import argon2 from 'argon2';
import { createUser } from '$lib/database';

export function load ({ cookies }) {
	if (cookies.token) {
		return { status: 302, redirect: '/dashboard' };
	}
}

export const actions = {
	default: async ({ request }) => {
		const data = await request.formData();
		console.log(data)
		await createUser(data.get('email'), data.get('username'), data.get('string'))
	}
}
