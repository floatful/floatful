class CSSRule {
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

    addProperty(property) {
        this.properties.push(property);
    }

    getProperty(key) {
        return this.properties.find(property => property.key === key);
    }

    toString() {
        return `${this.name} {\n${this.properties.map(property => `  ${property.toString()}`).join('\n')}\n}`;
    }
}

export default CSSRule;