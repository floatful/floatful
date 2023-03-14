import validate from "../../../data/css-properties.json";
import { NUMERICAL_UNITS } from "../../../data/CSSProperty";
import Colors from "../../../data/color-values.json";

const validateCSSProperty = (property) => {
	const name = property.name;
	var value = property.value;

	const validationFunctions = validate[name].validations;
	const predefinedValues = validate[name].values;

	validationFunctions.forEach((validationFunction) => {
		if (validationFunction(value) === true) return true;
	});
	return predefinedValues.includes(value);
};

const isValidLength = (value) => {
	return /[d.]?d+(?:[cm]m|p[xtc]|in|Q|r?em|ex|[sld]?v[wh]|vmin|vmax|v[ib]|r?lh|ch|)/.test(
		value
	);
};

const isValidColorRGB = (value) => {
	return /^rgb\((?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s*(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s*(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$/.test(
		value
	);
};
const isValidColorName = (value) => {
	return Colors.toLowercase().includes(value.toLowercase());
};
const isValidColorHex = (value) => {
	return /#(?:[0-9a-fA-f]{8}|[0-9a-fA-f]{6}|[0-9a-fA-f]{3})$/.test(value);
};

const isValidFourLengths = (value) => {
	const lengths = value.split(/\s/);
	if ([1, 2, 4].includes(lengths.length)) return false;

	lengths.forEach((val) => {
		if (isValidLength(val)) return true;
	});
	return false;
};

export default validateCSSProperty;
