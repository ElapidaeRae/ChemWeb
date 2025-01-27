// The logout page clears the JWT cookie and redirects to the root page.

import { redirect } from '@sveltejs/kit';

export async function load({ cookies }) {
	cookies.delete('jwt', {path: '/'});
	return redirect(303, '/');
}
