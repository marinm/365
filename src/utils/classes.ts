export function classes(classConditions: Object): string {
	return Object.entries(classConditions)
		.filter(([_, value]) => value)
		.map(([key, _]) => key)
		.join(" ");
}