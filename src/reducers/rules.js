import CSSRule from "../data/CSSRule";

/**
 * All possible actions for the rulesReducer function. Can be imported by other components
 * to make readability and usability easier.
 */
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

/**
 * React useReducer function for the array of CSSRules
 * @param {CSSRules[]} rules the given array of CSSRules to be modified
 * @param {object} action the action to do on the rules, and the inputs needed to accomplish that action.
 * @returns new instance of CSSRules array, after action is done.
 */
const rulesReducer = (rules, action) => {

    switch(action.type) {

    /* RULE FUNCTIONS */
        case ACTIONS.RULE.ADD:
            return [...rules, new CSSRule(action.payload.selector, action.payload.element, action.payload.properties)];

        case ACTIONS.RULE.DELETE:
            return rules.filter(rule => rule.selector !== action.payload.selector);

        case ACTIONS.RULE.UPDATE_SELECTOR:
            return rules.map(rule => {
                return rule.selector === action.payload.selector
                    ? rule.setSelector(action.payload.newSelector)
                    : rule;
            });
        
        case ACTIONS.RULE.UPDATE_ELEMENT:
            return rules.map(rule => {
                return rule.selector === action.payload.selector
                    ? rule.setElement(action.payload.element)
                    : rule;
            });


    /* PROPERTY FUNCTIONS */
        case ACTIONS.PROPERTY.ADD:
            return rules.map(rule => {
                return rule.selector === action.payload.selector
                    ? rule.addProperty(action.payload.property)
                    : rule;
            });
       
        case ACTIONS.PROPERTY.DELETE:
            return rules.map(rule => {
                return rule.selector === action.payload.selector 
                    ? rule.removeProperty(action.payload.property) 
                    : rule;
            });

        case ACTIONS.PROPERTY.UPDATE_VALUE:
            return rules.map(rule => {
                return rule.selector === action.payload.selector
                    ? rule.updatePropertyValue(action.payload.property, action.payload.value)
                    : rule;
            });

        case ACTIONS.PROPERTY.UPDATE_UNIT:
            return rules.map(rule => {
                return rule.selector === action.payload.selector
                    ? rule.updatePropertyUnit(action.payload.property, action.payload.unit)
                    : rule;
            }); 

    /* DEFAULT CASE */
        default:
            return rules;
    }
}

export {rulesReducer, ACTIONS}