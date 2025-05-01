import type { RequestHandler } from '../../../../.svelte-kit/types/src/routes';
import { json } from '@sveltejs/kit';
import { getLikesCount, getUserLikes, likeMethod, dislikeMethod } from '$lib/database';

export const POST: RequestHandler = async ({ request, url }) => {
	// Handle Likes
	const data = await request.json();
	const methodID = data.methodID;
	const userID = data.userID;

	// Check if the user has already liked the method
	const userLikes = await getUserLikes(userID);
	// Get the IDs of the methods the user has liked
	let userLikeIDs = userLikes.map((like) => like.id);
	if (methodID in userLikeIDs) {
		// User has already liked the method, so remove the like
		await dislikeMethod(methodID, userID);
	} else {
		// User has not liked the method, so add the like
		await likeMethod(methodID, userID);
	}
	// Fetch the updated likes count
	const likeCount = await getLikesCount(methodID);
	return json({ likeCount });
}
