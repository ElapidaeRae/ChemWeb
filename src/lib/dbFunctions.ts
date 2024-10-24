import { prisma } from '$lib/prisma';

export async function findUser( email: string ) {
	return prisma.user.findUnique({
		where: {
			email: email
		}
	});
}

export async function addUser( username: string, email: string, password: string ) {
	const user = await prisma.user.create({
		data: {
			username: username,
			email: email,
			password: password,
			settings: {
				create: {}
			},
			profile: {
				create: {}
			}
		}
	});
}

export async function addMethod( name: string, description: string, creators: User[] ) {
	const method = await prisma.method.create({
		data: {
			name: name,
			description: description,
			creator: {
				connectOrCreate: creators.map(creator => {
					return {
						where: { id: creator.id },
						create: creator
					};
				})
			},
		}
	});
}