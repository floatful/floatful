import { PROPERTY_TYPE, PropertyValue } from "./PropertyTypes";
import CSS_PROPERTIES from "./CSSProperties";

/**
 * This class represents a single, abstracted property within a CSS rule. It can hold multiple different types
 * of values, including color codes, numbers, predefined values, etc.
 */
class Property {
	key: string; // React keyword (e.g. "leftMargin")
	name: string; // CSS Keyword (e.g. "margin-left")
	values: (string | PROPERTY_TYPE)[]; // List of string values or PropertyTypes (numerical, hex, etc.) allowed
	value: string | PropertyValue; // string or PropertyType selected for the property.

	constructor(
		name: string,
		key: string,
		values?: (string | PROPERTY_TYPE)[],
		value?: string | PropertyValue
	) {
		this.name = name;
		this.key = key;
		this.values = values? values : this._getValues(name);
		this.value = value? value : this._getInitialValue(name);
	}

	/**
	 * Static method to convert kebab-case to camelCase to use when getting the jsx equivalent of css property names.
	 * @param str
	 * @returns
	 */
	static toCamelCase = (str: string): string => {
		return str.replace(/-./g, (x) => x[1].toUpperCase());
	};

	/**
	 * Determined if a specific property value or property type is valid for the specific property.
	 * @param value String or PropertyValue to validate
	 * @returns boolean whether the given string or PropertyValue is valid.
	 */
	isValidValue = (value: string | PropertyValue) => {
		this.values.forEach((val: String | PROPERTY_TYPE) => {
			if(
				value === val ||
				(<PropertyValue>value).type === <PROPERTY_TYPE>val
			) 
				return true;
		});
		return false;
	};

	/**
	 * Creates a new instance with the new value
	 * @param value string value matching one of the predefined string values, or PROPERTY_TYPE for variable inputs
	 * @returns new Property object with updated value.
	 */
	updateValue = (value: string | PropertyValue) => {
		return new Property(this.name, this.key, this.values, value);
	};

	/**
	 * Returns the string version of the property, as needed within a JSX or TSX file.
	 * @returns JSX or TSX formatted string
	 */
	toString = () => {
		if (typeof this.value === "string") {
			return `${this.key}: ${this.value}`;
		}
		return `${this.key}: ${this.value.toString()}`;
	};

	_getValues = (name: string): (string | PROPERTY_TYPE)[] => {
		return CSS_PROPERTIES[name].values;
	};

	_getInitialValue = (name: string): string | PropertyValue => {
		return CSS_PROPERTIES[name].initial;
	};
}

export default Property;
