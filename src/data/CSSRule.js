/**
 * CSS Rule containing the full selector, the specific element it renders as (if any), and an
 * array of CSS properties for this rule. For example, CSSRule("div p", "p", [...PROPERTIES])
 * would be equivalent to the following lines of CSS:
 * 
 * div p {
 *      PROPERTIES
 * }
 * 
 * where each property is a CSSProperty object.
 */
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