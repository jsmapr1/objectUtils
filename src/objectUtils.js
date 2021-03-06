import isObject from 'isobject';

export function ensureArray(obj) {
	if (Array.isArray(obj) === false) {
		return [obj];
	}
	return obj;
}

export function assignDeep(target, source) {
	const output = Object.assign({}, target);
	if (isObject(target) && isObject(source)) {
		Object.keys(source).forEach(key => {
			if (isObject(source[key])) {
				if (!(key in target)) {
					Object.assign(output, {[key]: source[key]});
				} else {
					output[key] = mergeDeep(target[key], source[key]);
				}
			} else {
				Object.assign(output, {[key]: source[key]});
			}
		});
	}
	return output;
}
