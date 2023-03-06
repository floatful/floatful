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

class CSSNumericProperty {
    constructor(cssName, jsName, number, unit = null) {
        this.name = cssName;
        this.key = jsName;
        this.value = number;
        // TODO: List all possible units for numeric values in CSS
        this.units = [
            null,
            "px",
            "cm",
            "em",
            "rem",
            "%",
            "vw",
            "vh",
        ]
        this.unit = this.units.includes(unit) ? unit : null;
    }

    getValue() {
        return this.value + "" + this.unit;
    }

    updateValue(newVal) {
        this.value = newVal;
    }

    updateUnit(unit) {
        this.unit = this.units.includes(unit) ? unit : this.unit;
    }

    toString() {
        return `${this.name}: ${this.value}${this.unit};`;
    }
}

/**
 * CSSTextProperty
 * this class represents a CSS property that contains a text-based value, such as "inherit",
 * "left", "border-box", etc. It is instantiated with all possible values it can have, and
 * features validation to make sure new values selected are within this range.
 */
class CSSTextProperty {
    constructor(name, key, values, value = null) {
        this.name = name;
        this.key = key;
        this.values = values; // All possible values the property can have
        this.value = this.values.includes(value) ? value : values[0];
    }

    updateValue(value) {
        if(this.values.includes(value)) {
            this.value = value;
        }
    }

    toString() {
        return `${this.name}: ${this.value};`;
    }
}

/**
 * Unrestricted property, value can be any string.
 */
class CSSContentProperty {
    constructor(name, key, value) {
        this.name = name;
        this.key = key;
        this.value = value;
    }

    updateValue(value) {
        this.value = value;
    }

    toString() {
        return `${this.name}: ${this.value}`;
    }

}

export {CSSNumericProperty, CSSTextProperty, CSSContentProperty, CSSProperty, PROPERTY_TYPES};