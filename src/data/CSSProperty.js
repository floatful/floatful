/** All possible property types, self-contained so other components can use them. */
const PROPERTY_TYPES = {
	NUMERICAL: "numerical",
	RESTRICTED: "text-restricted",
	UNRESTRICTED: "text-unrestricted",
};

/** All possible numerical units to measure distance/length, as these do not cange property to property */
const NUMERICAL_UNITS = [null, "px", "cm", "em", "rem", "%", "vw", "vh"];

/**
 * class representing single and complex key-value CSS properties
 */
class CSSProperty {
	/**
	 * Creates a new CSS property using the specified value type, css name, js name, value,
	 * value options, and unit. Some of these are optional, and some are only necessary for specific types.
	 * @param {ACTION} type the type of property, based on the different types in the ACTIONS variable
	 * @param {string} cssName the css key for the property (e.g. "box-sizing")
	 * @param {string} jsName the camel case jsx key for the property (e.g. "boxSizing")
	 * @param {*} value the stored value, can be a number, an option in a range, or freeform string
	 * @param {string[]} values an array of possible values for RESTRICTED-type properties
	 * @param {string} unit the specified unit for the property instance ("px", "em", etc.)
	 */
	constructor(type, cssName, jsName, value, values = null, unit = null) {
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
	static toCamelCase = (str) => {
		return str.replace(/-./g, (x) => x[1].toUpperCase());
	};

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
	isValidValue(value) {
		switch (this.type) {
			case PROPERTY_TYPES.NUMERICAL:
				return !isNaN(value);
			case PROPERTY_TYPES.RESTRICTED:
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
