import { PROPERTY_TYPE, PropertyValue } from "./PropertyTypes";

class Property {
	name: string;
	key: string;
	values: (string | PROPERTY_TYPE)[];
	value: string | PropertyValue;

	constructor(
		name: string,
		key: string,
		values?: (string | PROPERTY_TYPE)[],
		value?: string | PropertyValue
	) {
		this.name = name;
		this.key = key;
		this.values = values !== undefined ? values : this.getValues(name);
		this.value = value !== undefined ? value : this.getInitialValue(name);
	}

	/**
	 * Static method to convert kebab-case to camelCase to use when getting the jsx equivalent of css property names.
	 * @param str
	 * @returns
	 */
	static toCamelCase = (str: string): string => {
		return str.replace(/-./g, (x) => x[1].toUpperCase());
	};

	isValidValueType = (type: PROPERTY_TYPE) => {
		let typeFound = false;
		this.values.forEach((val: string | PROPERTY_TYPE) => {
			if (type === val) typeFound = true;
		});
		return typeFound;
	};

	getValues = (name: string): (string | PROPERTY_TYPE)[] => {
		return [""];
	};

	getInitialValue = (name: string): string | PropertyValue => {
		throw new Error("Needs to be Implemented!");
	};
}

export default Property;
