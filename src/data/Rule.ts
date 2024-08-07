import Property from "./Property";
import { PropertyValue } from "./PropertyTypes";

/**
 * Class representing a rule in CSS, referring to a specific selection (e.g. div > a) with 
 * specific properties.
 *
 * Instances of this object are immutable because of their use in the react reducers,
 * so updating values within them through the given functions returns a new object instead.
 * 
 * TODO: name and children have been added to the class. 
 * 	-	name is an optional name for the rule, which overrides the selector path when 
 * 		displayed in the selector list. When the style is exported, the name is commented 
 * 		above the rule in the stylesheet.
 * 	-	children is an array of Rules that only exist underneath this Rule. For example, 
 * 		if we wanted "div.header p", this rule would be "div.header" and would have the 
 * 		child Rule "p"
 * 
 * These new parameters need to have setters, with the children parameter needing remove 
 * and add functions.
 */
class Rule {
	selector: string;
	name?: string;
	target: string;
	properties: Property[];
	children: Rule[];

	constructor(selector: string, target: string, name?: string, properties?: Property[], children?:Rule[]) {
		this.selector = selector;
		this.name = name;
		this.target = target;
		this.properties = properties? properties : [];
		this.children = children? children : [];
	}

	/**
	 * Returns a new Rule with the new given selector
	 * @param selector new selector to replace the current one
	 * @returns new Rule instance
	 */
	setSelector = (selector: string) => {
		return new Rule(selector, this.target, this.name, this.properties, this.children);
	};

	/**
	 * Returns a new Rule instance with the new given element.
	 * @param target new element to replace the current one
	 * @returns new Rule instance with updated element
	 */
	setTarget = (target: string) => {
		return new Rule(this.selector, target, this.name, this.properties, this.children);
	};

	/**
	 * Returns a new Rule, identical to this isntance, but with the given property appended
	 * @param property a new Property to add into the rule
	 * @returns new Rule instance with new property included.
	 */
	addProperty = (property: Property) => {
		return new Rule(this.selector, this.target, this.name, [
			...this.properties,
			property,
		], this.children);
	};

	/**
	 * Returns a new Rule with the property associated with the property key filtered out.
	 * @param property the property to be removed
	 * @returns new Rule instance without the given property
	 */
	removeProperty = (property: Property) => {
		return new Rule(
			this.selector,
			this.target,
			this.name,
			this.properties.filter((prop: Property) => {
				return property.key !== prop.key;
			}),
			this.children
		);
	};

	/**
	 * Returns a new Rule, identical to this instance, but changing the value of the specified property to a new one
	 * @param property the Property object to update
	 * @param value the new Property value to replace the original with
	 * @returns a new Rule instance with the changed property
	 */
	updatePropertyValue = (
		property: Property,
		value: string | PropertyValue
	) => {
		return new Rule(
			this.selector,
			this.target,
			this.name,
			this.properties.map((prop: Property) => {
				return property.key === prop.key
					? property.updateValue(value)
					: property;
			}),
			this.children
		);
	};
}

export default Rule;
