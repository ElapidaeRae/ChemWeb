import { prisma } from '$lib/prisma';
import argon2 from 'argon2';

async function seed() {
	await prisma.user.create({
		data: {
			email: 'johnchemistry@nomail.com',
			username: 'johnchemistry',
			password: await argon2.hash('password'),
			profile: {
				create: {
					name: 'John Chemistry',
					bio: 'I am the chemist.',
					avatar: 'https://i.pravatar.cc/300'
				}
			}

