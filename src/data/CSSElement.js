import { CSSTextProperty, CSSNumericProperty } from "./CSSProperty";

class CSSElement {
    constructor(selector, element = "div", properties = null) {
        this.selector = selector;
        this.element = element;
        this.properties = properties;
    }

    updateSelector(selector) {
        // TODO: Add selector validation here (or further up the chain)
        this.selector = selector;
        // TODO: update element based on this too
    }

    updateElement(element) {
        this.element = element
    }

    removeProperty(key) {
        this.properties = this.properties.filter(property => property.key !== key);
    }

    addNumericProperty(property) {
        if(property instanceof CSSNumericProperty) {
            this.properties.push(property);
        }
    }

    addTextProperty(property) {
        if(property instanceof CSSTextProperty) {
            this.properties.push(property);
        }
    }

    updateNumericPropertyValue(key, value) {
        const property = this.properties.find(property => property.key === key);
        if(property instanceof CSSNumericProperty) {
            property.updateValue(value);
        }
    }

    updateNumericPropertyUnit(key, unit) {
        const property = this.properties.find(property => property.key === key);
        if(property instanceof CSSNumericProperty) {
            property.updateUnit(unit);
        }
    }

    updateTextPropertyValue(key, value) {
        const property = this.properties.find(property => property.key === key);
        if(property instanceof CSSTextProperty) {
            property.updateValue(value);
        }
    }

    toString() {
        return `${this.name} {\n${this.properties.map(property => `  ${property.toString()}`).join('\n')}\n}`;
    }
}

export default CSSElement;