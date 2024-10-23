import { prisma } from '$lib/prisma';

export function load ({ cookies }) {
	if (cookies.token) {
		return { status: 302, redirect: '/dashboard' };
	}
}

export const actions = {
	default: async ({ cookies, request }) => {
		const data = await request.formdata();
		prisma.user.create({
			data: {
				email: data.get('email'),
				password: data.get('password')
			}
		});
	}
}
