// api endpoint to return ඞ

response = {'ඞ': 'ඞ'}

export function post(req: Request, res: Response) {
		return new Response(JSON.stringify(response), {
			headers: {
				'content-type': 'application/json'
			}
		});
}