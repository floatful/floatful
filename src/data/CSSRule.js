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

    toString() {
        return `${this.name} {\n${this.properties.map(property => `  ${property.toString()}`).join('\n')}\n}`;
    }
}

export default CSSRule;