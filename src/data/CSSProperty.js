const PROPERTY_TYPES = {
    NUMERICAL: 'numerical',
    RESTRICTED: 'text-restricted',
    UNRESTRICTED: 'text-unrestricted'
}

/**
 * CSSNumericProperty
 * This class represents a CSS property containing a numeric value, like 10, 2px, etc.
 * It features automatic validation for unit measurements, while also allowing the number
 * to be stored without a unit.
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