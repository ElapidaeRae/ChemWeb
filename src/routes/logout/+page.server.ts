// The logout page clears the JWT cookie and redirects to the root page.

import { redirect } from '@sveltejs/kit';
import { loggedIn } from '$lib/stores';

export async function load({ cookies }) {
	cookies.delete('jwt', {path: '/'});
	loggedIn.set(false);
	return redirect(303, '/');
}