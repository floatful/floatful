class CSSRule {
    constructor(selector, element = "div", properties = null) {
        this.selector = selector;
        this.element = element;
        this.properties = properties;
    }

    toString() {
        return `${this.name} {\n${this.properties.map(property => `  ${property.toString()}`).join('\n')}\n}`;
    }
}

export default CSSRule;