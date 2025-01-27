import jwt from 'jsonwebtoken';

export function verifyJWT(token: string, secret): boolean {
	return !!jwt.verify(token, secret);
}
