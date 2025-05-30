import { prisma } from '$lib/prisma';
import argon2 from 'argon2';
import type { Tag, Method } from '@prisma/client'
import { logo } from '$lib/b64';

/**
 * Creates a new user in the database.
 * @param username The username of the user.
 * @param email The email of the user.
 * @param password The password of the user in plaintext.
 * @returns The user object created in the database.
 * @throws Error if the user already exists.
 * @throws Error if there is a database error.
 *
 * @example
 * createUser('EElric', 'edward@alch.gov', 'philosopherstone')
 */
export async function createUser(username: string, email: string, password: string) {

	// hash password with argon2
	const hashedPassword = await argon2.hash(password);

	// check if user already exists
	let user = await getUserByUsername(username).catch(
		() => null
	);

	if (user) {
		throw new Error('Database Error');
	}
	if (user == null) {
		return prisma.user.create({
			data: {
				email,
				username,
				password: hashedPassword
			},
			include: {
				Settings: true,
				Profile: true
			}
		});
	}
	else throw new Error('User Already Exists')
}

/**
 * Authenticates a user based on their username and password.
 * @param username The username of the user.
 * @param password The password of the user in plaintext.
 * @returns A tuple with the first element being a boolean indicating if the user is authenticated and the second element being a string with the result message.
 *
 * @example
 * let response = authenticateUser('EElric', 'philosopherstone')
 */
export async function authenticateUser(username: string, password: string) {
	let user = await getUserByUsername(username)
	if (user == null){
		return [false, 'User doesn\'t exist']
	}
	// verify password with argon2
	let valid = await argon2.verify(user.password, password)
	if (!valid){
		return [valid, 'Invalid Password']
	}
	else return [valid, 'Success']
}

/**
 * Gets a user by their username.
 * @param username The username of the user.
 * @returns An array of user objects with the given username.
 */
export async function getUserByUsername(username: string) {
	let results = await prisma.user.findFirst({
		where: {
			username
		}
	})

	if (results == null){
		throw new Error('User doesn\'t exist')
	}
	return results;
}


/**
 * Gets a user's settings by their username.
 * @param username The username of the user.
 * @returns The user settings object with the given username.
 */
export async function getUserSettings(username: string) {
	let user = await getUserByUsername(username)
	if (user == null){
		throw new Error('User doesn\'t exist')
	}
	return prisma.userSettings.findUnique({
		where: {
			userId: user.id
		}
	});
}

/**
 * Creates a new method in the database.
 * @param username The username of the user who created the method.
 * @param name The name of the method.
 * @param description An optional description of the method.
 * @param tagslist An optional array of tag objects to connect to the method.
 * @param image An optional image file to connect to the method.
 * @returns The method object created in the database.
 *
 * @example
 * createMethod('cexample0id', 'Toluene', 'A toluene synthesis')
 */

export async function createMethod(username: string, name: string, description: string | null, tagslist: string[] | null, image: File | null) {
	if (!description) {
		description = 'A method for ' + name;
	}
	let user = await getUserByUsername(username);
	console.log(user);
	if (user == null) {
		throw new Error('User doesn\'t exist');
	}
	let base64Image;
	if (image) {
			const reader = new FileReader();
			reader.readAsDataURL(image);
			reader.onload = () => {
				base64Image = reader.result;
			};
	} else {
		image = {
			name: 'default',
			base64: logo
		};
	}
	return prisma.method.create({
		data: {
			name,
			description,
			Creator: {
				connect: {
					id: user.id
				}
			},
			MethodDetails: {
				create: {
					CarouselImages: {
						connectOrCreate: {
							where: {
								base64: base64Image
							},
							create: {
								name: image?.name,
								base64: base64Image
							}
						}
					},
					Tags: {
						connectOrCreate: tagslist?.map(tag => ({
							where: { name: tag },
							create: { name: tag }
						}))
					}
				}
			},
		},
		include: {
			MethodDetails: {
				include: {
					Tags: true
				}
			}
		}
	});
}

/**
 * Gets all methods in the database by a given user.
 * @param userId The id of the user to get methods for.
 * @returns An array of method objects created by the user.
 */
export async function getMethodsByUser(userId: string) {
	return prisma.method.findMany({
		where: {
			userId
		}
	});
}

/**
 * Gets a method by its id.
 * @param methodId
 * @returns The method object with the given id.
 */

export async function getMethodById(methodId: string) {
	return prisma.method.findUnique({
		where: {
			id: methodId
		},
		include: {
			MethodDetails: {
				include: {
					Tags: true
				}
			},
			Creator: true
		}
	});
}

/**
 * Gets a random method from the database.
 * @returns A random method object.
 *
 * @example
 * let method = await getRandomMethod();
 *
 * @remarks this is ~~entirely un~~tested, but it ~~probably~~ works
 * @remarks ~~i hope~~
 */

export async function getRandomMethod(quantity: number) {
	let methods = await prisma.method.findMany({
		include: {
			MethodDetails: {
				include: {
					Tags: true
				}
			},
			Creator: true
		}
	});
	let methodlist = [];
	for (let i = 0; i < quantity; i++) {
		let randomIndex = Math.floor(Math.random() * methods.length);
		methodlist.push(methods[randomIndex]);
		methods.splice(randomIndex, 1);
	}
	return methodlist;
}

/**
 * Creates a new method details object in the database and connects it to a method.
 * @param methodId The id of the method to connect the details to.
 * @param tags An array of tag objects to connect to the method.
 * @returns The method details object created in the database.
 *
 * @example
 * createMethodDetails('cexample0id', 3, [{name: 'Nitrogen'}, {name: 'Volatile'}, {name: 'Simple'}, {name: 'Dangerous'}])
 */
export async function createMethodDetails(methodId: string, tags: Tag[]) {
	return prisma.methodDetails.create({
		data: {
			Method: {
				connect: {
					id: methodId
				}
			},
			Tags: {
				connect: tags
			}
		}
	});
}

/**
 * Updates a method in the database.
 * @param methodId The id of the method to update.
 * @param data The data to update the method with in the form of a Method object (name, description, etc).
 * @returns The updated method object.
 *
 * @example
 * updateMethod('cexample0id', {
 * 	name: 'Toluene',
 * 	description: 'A toluene synthesis process'
 * })
 */

export async function updateMethod(methodId: string, data: Method) {
	return prisma.method.update({
		where: {
			id: methodId
		},
		data
	});
}

/**
 * Deletes a method from the database.
 * @param methodId The id of the method to delete.
 * @returns The deleted method object.
 *
 * @example
 * deleteMethod('cexample0id')
 */
export async function deleteMethod(methodId: string) {
	return prisma.method.delete({
		where: {
			id: methodId
		}
	});
}


/**
 * Creates a new step in the database and connects it to a method.
 * @param methodId The id of the method to connect the step to.
 * @param name The name of the step.
 * @param description An optional description of the step.
 * @returns The step object created in the database.
 *
 * @example
 * createStep('cexample0id', 'Step 1', 'The first step in the process')
 */
export async function createStep(methodId: string, name: string, description: string | null) {
	if (!description) {
		description = 'A step for ' + name;
	}
	return prisma.step.create({
		data: {
			name,
			description,
			Method: {
				connect: {
					id: methodId
				}
			}
		}
	});
}

export async function getStepsByMethod(methodId: string) {
	return prisma.step.findMany({
		where: {
			methodId
		}
	});
}

/**
 * Creates a new tag in the database.
 * @param name The name of the tag.
 * @returns The tag object created in the database.
 *
 * @example
 * // Creates a new tag with the name 'Nitrogen'
 * createTag('Nitrogen')
 *
 * @remarks Really quite simple, not much to say here
 */

export async function createTag(name: string) {
	return prisma.tag.create({
		data: {
			name
		}
	});
}

/*
 * Creates a new image in the database.
 * @param name The name of the image.
 * @param base64 The base64 string of the image.
 * @returns The image object created in the database.
 */

export async function createImage(name: string, base64: string) {
	return prisma.image.create({
		data: {
			name,
			base64
		}
	});
}


/*
 * Creates a new like in the database.
 * @param methodId The id of the method to like.
 * @param userId The id of the user who liked the method.
 * @returns The method object with the updated likes.
 */

export async function likeMethod(methodId: string, userId: string) {
	return prisma.methodDetails.update({
		where: {
			id: methodId
		},
		data: {
			Likes: {
				connect: {
					id: userId
				}
			}
		}
	});
}

/*
 * Removes a like from a method in the database.
 * @param methodId The id of the method to unlike.
 * @param userId The id of the user who unliked the method.
 * @returns The method object with the updated likes.
 */

export async function dislikeMethod(methodId: string, userId: string) {
	return prisma.methodDetails.update({
		where: {
			id: methodId
		},
		data: {
			Likes: {
				disconnect: {
					id: userId
				}
			}
		}
	});
}


export async function getUserLikes(userId: string) {
	return prisma.user.findMany({
		where: {
			id: userId
		},
		include: {
			Likes: {
				include: {
					MethodDetails: {
						include: {
							Method: true
						}
					}
				}
			}
		}
	})
}

export async function getLikesCount(methodId: string) {
	return prisma.methodDetails.findUnique({
		where: {
			id: methodId
		},
		include: {
			_count: {
				select: {Likes: true}
			}
		}
	});
}