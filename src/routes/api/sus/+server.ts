// api endpoint to return ඞ


export function GET(req: Request, res: Response) {
	const response = 'ඞ\n'
	return new Response(response, {
		headers: {
			'content-type': 'application/json'
		}
	});
}