import { prisma } from '$lib/prisma';
import argon2 from 'argon2';

export async function createUser(email: string, username: string, password: string) {
	// hash password with argon2
	const hashedPassword = await argon2.hash(password);

	// check if user already exists
	let users = await getUsersByUsername(username);
	if (users.length > 1) {
		throw new Error('Database Error');
	}
	if (users.length == 0) {
		return prisma.user.create({
			data: {
				email,
				username,
				password: hashedPassword
			}
		});
	}
	else throw new Error('User Already Exists')
}

export async function authenticateUser(username: string, password: string) {
	let users = await getUsersByUsername(username)
	if (users.length == 0){
		return [false, 'User doesn\'t exist']
	}
	else if (users.length > 1){
		return [false, 'Database Error']
	}
	let valid = await argon2.verify(users[0].password, password)
	if (!valid){
		return [valid, 'Invalid Password']
	}
	else return [valid, 'Success']
}

export async function getUsersByUsername(username: string) {
	return prisma.user.findMany({
		where: {
			username
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