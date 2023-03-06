const ACTIONS = {
    RULE: {
        ADD: 'add-rule',
        UPDATE_SELECTOR: 'update-rule-selector',
        UPDATE_ELEMENT: 'update-rule-element',
        DELETE: 'delete-rule'
    },
    PROPERTY: {
        ADD: 'add-property',
        UPDATE_VALUE:'update-property-value',
        UPDATE_UNIT: 'update-property-unit',
        UPDATE_TYPE: 'update-property-type',
        DELETE: 'delete-property'
    }
}

const newRule = (selector) => {

}

const reducer = (rules, action) => {

    switch(action.type) {

        case ACTIONS.RULE.ADD:
            return [...rules, newRule(action.payload.selector)];

        case ACTIONS.RULE.REMOVE:
            return rules.filter(rule => rule.selector !== action.payload.selector);

        case ACTIONS.RULE.UPDATE_SELECTOR:
            return rules.map(rule => {
                if(rule.selector === action.payload.selector) {
                    rule.selector = action.payload.newSelector;
                }
            });
        
        case ACTIONS.RULE.UPDATE_ELEMENT:
            return rules.map(rule => {
                if(rule.selector === action.payload.selector) {
                    rule.element = action.payload.element;
                }
            });

        default:
            return rules;
    }
}

export {reducer, ACTIONS}