function isIterable<T>(value: any): value is Iterable<T> {
	return value != null && typeof value[Symbol.iterator] === 'function';
}

function arrify<T>(value: T | T[] | null | undefined): T[] {
	if (value === null || value === undefined) {
		return [];
	}

	if (Array.isArray(value)) {
		return value;
	}

	if (typeof value === 'string') {
		return [value];
	}
	
	if (isIterable<T>(value)) {
		return [...value];
	}

	return [value];
}

// CommonJS export
if (typeof module !== 'undefined' && module.exports) {
    module.exports = arrify;
}

// ES Module export
export default arrify;