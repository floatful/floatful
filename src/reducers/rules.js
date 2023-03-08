import CSSRule from "../data/CSSRule";
import {CSSProperty, PROPERTY_TYPES} from "../data/CSSProperty";

const ACTIONS = {
    RULE: {
        ADD: 'add-rule',
        DELETE: 'delete-rule',
        UPDATE_SELECTOR: 'update-rule-selector',
        UPDATE_ELEMENT: 'update-rule-element'
    },
    PROPERTY: {
        ADD: 'add-property',
        UPDATE_VALUE:'update-property-value',
        UPDATE_UNIT: 'update-property-unit',
        DELETE: 'delete-property'
    }
}

const rulesReducer = (rules, action) => {

    switch(action.type) {

    /* RULE FUNCTIONS */
        case ACTIONS.RULE.ADD:
            return [...rules, new CSSRule(action.payload.selector, action.payload.element, action.payload.properties)];


        case ACTIONS.RULE.DELETE:
            return rules.filter(rule => rule.selector !== action.payload.selector);


        case ACTIONS.RULE.UPDATE_SELECTOR:
            return rules.map(rule => {
                if(rule.selector === action.payload.selector) {
                    return new CSSRule(action.payload.selector, rule.element, rule.properties);
                }
                return rule;
            });
        

        case ACTIONS.RULE.UPDATE_ELEMENT:
            return rules.map(rule => {
                if(rule.selector === action.payload.selector) {
                    return new CSSRule(rule.selector, action.payload.element, rule.properties);
                }
                return rule;
            });



    /* PROPERTY FUNCTIONS */

        /* */
        case ACTIONS.PROPERTY.ADD:
            return rules.map(rule => {
                if(rule.selector === action.payload.selector) {
                    const newProperties = [...rule.properties, action.payload.newProperty];
                    return new CSSRule(rule.selector, rule.elements, newProperties);
                }
                return rule;
            });
        
        /* */
        case ACTIONS.PROPERTY.DELETE:
            return rules.map(rule => {
                if(rule.selector === action.payload.selector) {
                    return new CSSRule(rule.selector, rule.element, 
                        rule.properties.filter(property => property.key !== action.payload.property));
                }
                return rule;
            });

        /*
            Checks to see if the value is allowed for the given property's type, and updates
            the value if possible.
         */
        case ACTIONS.PROPERTY.UPDATE_VALUE:
            return rules.map(rule => {
                if(rule.selector === action.payload.selector) {
                    return new CSSRule(rule.selector, rule.element, (rule.properties.map(property => {
                        if(property.key === action.payload.property.key
                                && (
                                    (property.type === PROPERTY_TYPES.UNRESTRICTED)
                                    || (property.type === PROPERTY_TYPES.NUMERICAL 
                                        && !isNaN(action.payload.value))
                                    || (property.type === PROPERTY_TYPES.RESTRICTED
                                        && property.values.includes(action.payload.value))
                                )) {
                            return new CSSProperty(property.type, property.name, property.key, 
                                action.payload.value, property.values, property.unit);
                        }
                        return property;
                    })));
                }
                return rule;
            });

        /*
            Checks to make sure the property exists, is of numerical type, and that the new
            unit is in the given boundaries.
         */
        case ACTIONS.PROPERTY.UPDATE_UNIT:
            return rules.map(rule => {
                if(rule.selector === action.payload.selector) {
                    return new CSSRule(rule.selector, rule.element, (rule.properties.map(property => {
                        if(property.key === action.payload.property.key 
                                && property.type === PROPERTY_TYPES.NUMERICAL
                                && property.NUMERICAL_UNITS.includes(action.payload.unit)) {
                            return new CSSProperty(property.type, property.name, property.key, 
                                property.value, null, action.payload.unit);
                        }
                        return property;
                    })));
                }
                return rule;
            }); 

        default:
            return rules;
    }
}

export {rulesReducer, ACTIONS}