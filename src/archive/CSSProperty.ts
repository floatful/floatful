/** All possible property types, self-contained so other components can use them. */
enum PROPERTY_TYPE {
	NUMERICAL = "numerical",
	RESTRICTED = "text-restricted",
	UNRESTRICTED = "text-unrestricted",
};

/**
 * class representing single and complex key-value CSS properties
 */
class CSSProperty {
	type: PROPERTY_TYPE;
	name: string;
	key: string;
	value: string;
	values?: string;
	unit?: string;

	constructor(type : PROPERTY_TYPE, cssName : string, jsName : string, value: string, values?:string, unit?: string) {
		this.name = cssName;
		this.key = jsName;
		this.value = value;
		this.type = type;
		this.values = values;
		this.unit = unit;
	}

	/**
	 * Static method to convert kebab-case to camelCase to use when getting the jsx equivalent of
	 * css property names.
	 * @param {*} str
	 * @returns
	 */
	static toCamelCase = (str:string) => {
		return str.replace(/-./g, (x) => x[1].toUpperCase());
	};

	/**
	 * Static method to return list of all possible numerical units
	 * @returns list of string units and null
	 */
	static getUnits = () => {
		return [null, "px", "cm", "em", "rem", "%", "vw", "vh", ]
	}

	/**
	 * Returns whether a given value is valid for the property type.
	 *
	 * A property value is labeled valid:
	 *      - ALWAYS if the property type is UNRESTRICTED
	 *      - if the property type is RESTRICTED and the value is an option in the property's value options
	 *      - OR if the property type is NUMERICAL and the value is a number.
	 * @param {*} value A string or number value to check
	 * @returns true if the value is valid for the property instance, false if it is not.
	 */
	isValidValue(value:string|number) {
		switch (this.type) {
			case PROPERTY_TYPE.NUMERICAL:
				return !isNaN(value);
			case PROPERTY_TYPE.RESTRICTED:
				return this.values.includes(value);
			default:
				return true;
		}
	}

	/**
	 * Returns a new property instance with the same content as the current instance,
	 * but with the new given value
	 * @param {*} value the new value
	 * @returns CSSProperty object based on the current instance with the new value,
	 * or the current object if the new value is not valid.
	 */
	updateValue(value) {
		return this.isValidValue(value)
			? new CSSProperty(
					this.type,
					this.name,
					this.key,
					value,
					this.values,
					this.unit
			  )
			: this;
	}

	/**
	 * Returns a new property instance with the same content as the current instance,
	 * but with the new unit
	 * @param {string} unit the new unit value given
	 * @returns new CSSProperty containing the new unit, or this instance if the new unit was not valid
	 */
	updateUnit(unit) {
		return NUMERICAL_UNITS.includes(unit)
			? new CSSProperty(
					this.type,
					this.name,
					this.key,
					this.value,
					this.values,
					unit
			  )
			: this;
	}

	/**
	 * Returns a string version of the property, including its jsx key and value (and unit if applicable)
	 * @returns {string}
	 */
	toString() {
		return this.type === PROPERTY_TYPES.NUMERICAL
			? `${this.key}: ${this.value}${this.unit}`
			: `${this.key}: ${this.value}`;
	}
}

export { CSSProperty, PROPERTY_TYPES, NUMERICAL_UNITS };
