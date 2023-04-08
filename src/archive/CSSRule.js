/**
 * Class representing a CSS Rule.
 * 
 * This class is meant to be an immutable object, and each function besides the toString function
 * returns an entirely new CSSRule instance.
 */
class CSSRule {
    /**
     * Creates a new CSS rule with the given properties, tied to the given html element
     * @param {string} selector the full css rule (e.g. "p + p")
     * @param {string} element optional element the rule is tied to (e.g. "p")
     * @param {CSSProperty[]} properties all starting properties the rule defines
     */
    constructor(selector, element = "div", properties = []) {
        this.selector = selector;
        this.element = element;
        this.properties = properties;
    }

    /**
     * Returns a new CSSRule with the new given selector
     * @param {string} selector new selector to replace the current one
     * @returns CSSRule instance
     */
    setSelector(selector) {
        return new CSSRule(selector, this.element, this.properties);
    }

    /**
     * Returns a new CSSRule with the new given selector
     * @param {string} element new element to replace the current one
     * @returns 
     */
    setElement(element) {
        return new CSSRule(this.selector, element, this.properties);
    }

    /**
     * Returns a new CSSRule, identical to this isntance, but with the given property appended
     * @param {CSSProperty} property a new CSSProperty to add into the rule
     * @returns new CSSRule instance with new property included.
     */
    addProperty(property) {
        return new CSSRule(this.selector, this.element, [...this.properties, property]);
    }

    /**
     * Returns a new CSSRule with the property associated with the property key filtered out.
     * @param {CSSProperty} propertyToRemove the property to be removed
     * @returns new CSSRule without the given property
     */
    removeProperty(propertyToRemove) {
        return new CSSRule(this.selector, this.element, this.properties.filter(property =>
            propertyToRemove.key !== property.key
        ));
    }

    /**
     * Returns a new CSSRule, identical to this instance, but changing the value of one of it's properties
     * @param {CSSProperty} propertyToUpdate the CSSProperty to be updated
     * @param {*} value the new value for the given property
     * @returns a new CSSRule object with the changed property
     */
    updatePropertyValue(propertyToUpdate, value) {
        return new CSSRule(this.selector, this.element, this.properties.map(property => {
            return property.key === propertyToUpdate.key
                ? property.updateValue(value)
                : property;
        }));
    }

    /**
     * Returns a new CSSRule, identical to this instance, but changing the unit of one of it's NUMERICAL
     * properties.
     * @param {CSSProperty} propertyToUpdate the CSSProperty object to update
     * @param {*} unit the new unit for the given property
     * @returns a new CSSRule instance with the changed property
     */
    updatePropertyUnit(propertyToUpdate, unit) {
        return new CSSRule(this.selector, this.element, this.properties.map(property => {
            return property.key === propertyToUpdate.key
                ? property.updateUnit(unit)
                : property
        }))
    } 


    /**
     * Returns a string version of the CSS rule, along with each of it's properties.
     * @returns {string} 
     */
    toString() {
        return `${this.selector} {\n${this.properties.map(property => `  ${property.toString()}`).join('\n')}\n}`;
    }
}

export default CSSRule;