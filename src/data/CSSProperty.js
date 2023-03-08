const PROPERTY_TYPES = {
    NUMERICAL: 'numerical',
    RESTRICTED: 'text-restricted',
    UNRESTRICTED: 'text-unrestricted'
}

/**
 * A CSS key value pair for a CSS rule. The following CSSProperty Object:
 * 
 * CSSProperty(PROPERTY_TYPES.RESTRICTED, "box-sizing", "boxSizing", "border-box" ["border-box", "inherit", ...], null);
 * 
 * would be the same as the following property in CSS:
 * 
 * rule {
 *      box-sizing: border-box;
 * }
 * 
 * The CSSProperty object can be one of three types: NUMERICAL ("10px"), RESTRICTED (text value but they are predefined
 * CSS values like "hidden"), and UNRESTRICTED (unrestricted text for content, colors, etc.). This type is determined at
 * instantiation and cannot change.
 */
class CSSProperty {

    constructor(type, cssName, jsName, value, values = null, unit=null) {
        this.name = cssName;
        this.key = jsName;
        this.value = value;
        this.type = type;
        switch(type) {
            case PROPERTY_TYPES.NUMERICAL:
                this.unit = unit;
                this.NUMERICAL_UNITS = [
                    null,
                    "px",
                    "cm",
                    "em",
                    "rem",
                    "%",
                    "vw",
                    "vh"
                ];
                break;
            case PROPERTY_TYPES.RESTRICTED:
                this.values = values;
                break;
            default:
                break;
        }
    }
}

export {CSSProperty, PROPERTY_TYPES};