import CSS_PROPERTIES from "../../../data/CSSProperties";
import {NumericUnits} from "../../../data/PropertyTypes";
import {PredefinedColors} from "../../../data/PredefinedColors"
import Property from "../../../data/Property";

const validateCSSProperty = (property:Property) => {
	const name = property.name;
	var value = property.value.toString();

	/* TODO */
	// const validationFunctions = CSS_PROPERTIES[name].validations;
	const predefinedValues = CSS_PROPERTIES[name].values;

	/*validationFunctions.forEach((validationFunction:(value:string)=>boolean) => {
		if (validationFunction(value) === true) return true;
	});*/
	return predefinedValues.includes(value);
};

const isValidLength = (value:string) => {
	return /[d.]?d+(?:[cm]m|p[xtc]|in|Q|r?em|ex|[sld]?v[wh]|vmin|vmax|v[ib]|r?lh|ch|)/.test(
		value
	);
};

const isValidColorRGB = (value:string) => {
	return /^rgb\((?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s*(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s*(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5])\)$/.test(
		value
	);
};

const isValidColorRGBA = (value:string) => {
	return /^rgba\((?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s*(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s*(?:1?[0-9]{1,2}|2[0-4][0-9]|25[0-5]),\s*[\d.]+\)$/;
};

const isValidColorName = (value:string) => {
	PredefinedColors.forEach((color) => {
		if(color.toLowerCase() === value.toLowerCase()) return true;
	})
	return false;
};

const isValidColorHex = (value:string) => {
	return /#(?:[0-9a-fA-f]{8}|[0-9a-fA-f]{6}|[0-9a-fA-f]{3})$/.test(value);
};

const isValidFourLengths = (value:string) => {
	const lengths = value.split(/\s/);
	if ([1, 2, 4].includes(lengths.length)) return false;

	lengths.forEach((val) => {
		if (isValidLength(val)) return true;
	});
	return false;
};

export default validateCSSProperty;
