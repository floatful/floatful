import Property from "./Property";

/**
 * Class representing a rule in CSS, referring to a specific selection (e.g. div > a) with specific properties.
 *
 * Instances of this object are immutable because of their use in the react reducers,
 * so updating values within them through the given functions returns a new object instead.
 */
class Rule {
	selector: string;
	element: string;
	properties: Property[];

	constructor(selector: string, element: string, properties: Property[]) {
		this.selector = selector;
		this.element = element;
		this.properties = properties;
	}

	/**
	 * Returns a new Rule with the new given selector
	 * @param selector new selector to replace the current one
	 * @returns new Rule instance
	 */
	setSelector = (selector: string) => {
		return new Rule(selector, this.element, this.properties);
	};

	/**
	 * Returns a new Rule instance with the new given element.
	 * @param element new element to replace the current one
	 * @returns new Rule instance with updated element
	 */
	setElement = (element: string) => {
		return new Rule(this.selector, element, this.properties);
	};

	/**
	 * Returns a new Rule, identical to this isntance, but with the given property appended
	 * @param property a new Property to add into the rule
	 * @returns new Rule instance with new property included.
	 */
	addProperty = (property: Property) => {
		return new Rule(this.selector, this.element, [
			...this.properties,
			property,
		]);
	};

	/**
	 * Returns a new Rule with the property associated with the property key filtered out.
	 * @param property the property to be removed
	 * @returns new Rule instance without the given property
	 */
	removeProperty = (property: Property) => {
		return new Rule(
			this.selector,
			this.element,
			this.properties.filter((prop: Property) => {
				return property.key !== prop.key;
			})
		);
	};

	/**
	 * Returns a new Rule, identical to this instance, but changing one property to a new one with a new value
	 * @param property the Property object to update
	 * @param newProperty the new Property to replace the original with
	 * @returns a new Rule instance with the changed property
	 */
	updateProperty = (property: Property, newProperty: Property) => {
		return new Rule(
			this.selector,
			this.element,
			this.properties.map((prop: Property) => {
				return property.key === prop.key ? newProperty : property;
			})
		);
	};
}

export default Rule;
