import Rule from "../data/Rule";
import Property from "../data/Property";
import { PropertyValue } from "../data/PropertyTypes";

enum ACTIONS {
	ADD_RULE,
	DELETE_RULE,
	UPDATE_RULE_SELECTOR,
	UPDATE_RULE_TARGET,
	ADD_PROPERTY,
	DELETE_PROPERTY,
	UPDATE_PROPERTY_VALUE,
}

type Action =
	| {
			type: ACTIONS.ADD_RULE | ACTIONS.DELETE_RULE;
			payload: {
				rule: Rule;
			};
	  }
	| {
			type: ACTIONS.UPDATE_RULE_TARGET | ACTIONS.UPDATE_RULE_SELECTOR;
			payload: {
				rule: Rule;
				value: string;
			};
	  }
	| {
			type: ACTIONS.ADD_PROPERTY | ACTIONS.DELETE_PROPERTY;
			payload: {
				rule: Rule;
				property: Property;
			};
	  }
	| {
			type: ACTIONS.UPDATE_PROPERTY_VALUE;
			payload: {
				rule: Rule;
				property: Property;
				value: string | PropertyValue;
			};
	  };

const rulesReducer = (rules: Rule[], action: Action) => {
	switch (action.type) {
		case ACTIONS.ADD_RULE:
			return [...rules, action.payload.rule];

		case ACTIONS.DELETE_RULE:
			return rules.filter(
				(rule: Rule) => rule.selector !== action.payload.rule.selector
			);

		case ACTIONS.UPDATE_RULE_SELECTOR:
			return rules.map((rule: Rule) => {
				return rule.selector === action.payload.rule.selector
					? rule.setSelector(action.payload.value)
					: rule;
			});

		case ACTIONS.UPDATE_RULE_TARGET:
			return rules.map((rule: Rule) => {
				return rule.selector === action.payload.rule.selector
					? rule.setTarget(action.payload.value)
					: rule;
			});

		case ACTIONS.ADD_PROPERTY:
			return rules.map((rule: Rule) => {
				return rule.selector === action.payload.rule.selector
					? rule.addProperty(action.payload.property)
					: rule;
			});

		case ACTIONS.DELETE_PROPERTY:
			return rules.map((rule: Rule) => {
				return rule.selector === action.payload.rule.selector
					? rule.removeProperty(action.payload.property)
					: rule;
			});

		case ACTIONS.UPDATE_PROPERTY_VALUE:
			return rules.map((rule: Rule) => {
				return rule.selector === action.payload.rule.selector
					? rule.updatePropertyValue(
							action.payload.property,
							action.payload.value
					  )
					: rule;
			});
	}
};

export { rulesReducer, ACTIONS, type Action };
