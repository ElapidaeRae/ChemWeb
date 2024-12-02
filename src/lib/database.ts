import { prisma } from '$lib/prisma';
import argon2 from 'argon2';

export async function createUser(email: string, username: string, password: string) {
	// hash password with argon2
	const hashedPassword = await argon2.hash(password);

	return prisma.user.create({
		data: {
			email,
			password: hashedPassword
		}
	});
}

export async function getUserByEmail(email: string) {
	return prisma.user.findUnique({
		where: {
			email
		}
	});
}

export async function createMethod(userId: string, name: string, description: string | null) {
	if (!description) {
		description = 'A method for ' + name;
	}
	return prisma.method.create({
		data: {
			name,
			description,
			userId
		}
	});
}