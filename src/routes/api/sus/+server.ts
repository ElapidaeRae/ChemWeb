// api endpoint to return ඞ


export function POST(req: Request, res: Response) {
	const response = 'ඞ'
	return new Response(response, {
		headers: {
			'content-type': 'application/json'
		}
	});
}