export function match(value) {
	return /^c([a-z0-9]{7,25})$/.test(value)
}