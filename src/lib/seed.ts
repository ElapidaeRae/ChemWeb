import {createMethod, getUsersByUsername, createTag} from '$lib/database';
// import picture from '$lib/Hydrazine_Conformer3D_medium.png';


let method = {
	id: 'ctestestest',
	name: 'Hydrazine',
	description: 'A simple method for synthesizing hydrazine from ammonia and bleach.',
	author: 'John Chemistry',
	date: '1633046400000',
	picture: 'Hydrazine_Conformer3D_medium.png',
	MethodDetails: {
		likes: 3,
		tags: ['Nitrogen', 'Volatile', 'Simple', 'Dangerous']
	}
};

let user = await getUsersByUsername('John Chemistry');
console.log(user);

await createMethod(user[0].id, method.name, method.description);