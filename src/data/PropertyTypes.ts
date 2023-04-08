/*
    I've put all of the possible numeric units into an array, as well as a 
 */
const NumericUnits: readonly (string|null)[] = [
    null,
    "%",
    "cm", 
    "mm", 
    "in", 
    "px", 
    "pt", 
    "pc", 
    "em", 
    "ex", 
    "ch", 
    "rem", 
    "vw", 
    "vh", 
    "vmin", 
    "vmax"
] as const;
type NumericUnit = typeof NumericUnits[number];

const PredefinedColors: readonly string[] = [
    "AliceBlue",
    "AntiqueWhite",
    "Aqua",
    "Aquamarine",
    "Azure",
    "Beige",
    "Bisque",
    "Black",
    "BlanchedAlmond",
    "Blue",
    "BlueViolet",
    "Brown",
    "BurlyWood",
    "CadetBlue",
    "Chartreuse",
    "Chocolate",
    "Coral",
    "CornflowerBlue",
    "Cornsilk",
    "Crimson",
    "Cyan",
    "DarkBlue",
    "DarkCyan",
    "DarkGoldenRod",
    "DarkGrey",
    "DarkGreen",
    "DarkKhaki",
    "DarkMagenta",
    "DarkOliveGreen",
    "Darkorange",
    "DarkOrchid",
    "DarkRed",
    "DarkSalmon",
    "DarkSeaGreen",
    "DarkSlateBlue",
    "DarkSlateGrey",
    "DarkTurquoise",
    "DarkViolet",
    "DeepPink",
    "DeepSkyBlue",
    "DimGray",
    "DodgerBlue",
    "FireBrick",
    "FloralWhite",
    "ForestGreen",
    "Fuchsia",
    "Gainsboro",
    "GhostWhite",
    "Gold",
    "GoldenRod",
    "Grey",
    "Green",
    "GreenYellow",
    "HoneyDew",
    "HotPink",
    "IndianRed",
    "Indigo",
    "Ivory",
    "Khaki",
    "Lavender",
    "LavenderBlush",
    "LawnGreen",
    "LemonChiffon",
    "LightBlue",
    "LightCoral",
    "LightCyan",
    "LightGoldenRodYellow",
    "LightGrey",
    "LightGreen",
    "LightPink",
    "LightSalmon",
    "LightSeaGreen",
    "LightSkyBlue",
    "LightSlateGrey",
    "LightSteelBlue",
    "LightYellow",
    "Lime",
    "LimeGreen",
    "Linen",
    "Magenta",
    "Maroon",
    "MediumAquaMarine",
    "MediumBlue",
    "MediumOrchid",
    "MediumPurple",
    "MediumSeaGreen",
    "MediumSlateBlue",
    "MediumSpringGreen",
    "MediumTurquoise",
    "MediumVioletRed",
    "MidnightBlue",
    "MintCream",
    "MistyRose",
    "Moccasin",
    "NavajoWhite",
    "Navy",
    "OldLace",
    "Olive",
    "OliveDrab",
    "Orange",
    "OrangeRed",
    "Orchid",
    "PaleGoldenRod",
    "PaleGreen",
    "PaleTurquoise",
    "PaleVioletRed",
    "PapayaWhip",
    "PeachPuff",
    "Peru",
    "Pink",
    "Plum",
    "PowderBlue",
    "Purple",
    "Red",
    "RosyBrown",
    "RoyalBlue",
    "SaddleBrown",
    "Salmon",
    "SandyBrown",
    "SeaGreen",
    "SeaShell",
    "Sienna",
    "Silver",
    "SkyBlue",
    "SlateBlue",
    "SlateGrey",
    "Snow",
    "SpringGreen",
    "SteelBlue",
    "Tan",
    "Teal",
    "Thistle",
    "Tomato",
    "Turquoise",
    "Violet",
    "Wheat",
    "White",
    "WhiteSmoke",
    "Yellow",
    "YellowGreen"
] as const;
type PredefinedColor = typeof PredefinedColors[number];

interface Value {
    value: any;
}

class NumericValue implements Value {

    value: string;
    unit: NumericUnit;
    num: number;

    constructor(num:number, unit:NumericUnit) {
        this.value = "" + num + unit;
        this.unit = unit;
        this.num = num;
    }

    updateNumber = (num:number) => {
        return new NumericValue(num, this.unit);
    }
    updateUnit = (unit:NumericUnit) => {
        return new NumericValue(this.num, unit);
    }
}

class PredefinedColorValue implements Value {
    value: PredefinedColor;

    constructor(value:PredefinedColor) {
        this.value = value;
    }
}

/**
 * Represents a hex value with red, blue, green, and optional alpha channels
 * (e.g. "#000000ff" or "#3a062b").
 */
class HexValue implements Value {
    value: string;
    red: number;
    green: number;
    blue:number;
    alpha?:number

    constructor(red:number, green:number, blue:number, alpha?:number) {
        this.red = red;
        this.green = green;
        this.blue = blue;

        this.value = "#" +
			red.toString(16).padStart(2, "0") +
			green.toString(16).padStart(2, "0") +
			blue.toString(16).padStart(2, "0");
        this.value = alpha !== undefined ? this.value + alpha.toString(16).padStart(2, "0") : this.value;
    }

    /**
     * Returns an updated HexValue object with the new red value.
     * @param red Number from 0 to 255 representing the red channel value.
     * @returns new HexValue object with all previous values, along with the new red value.
     */
    updateRed = (red:number) => {
        return new HexValue(red, this.green, this.blue, this.alpha);
    }

    /**
     * Returns an updated HexValue object with the new green value.
     * @param green Number from 0 to 255 representing the green channel value.
     * @returns new HexValue object with all previous values, along with the new green value.
     */
    updateGreen = (green:number) => {
        return new HexValue(this.red, green, this.blue, this.alpha);
    }
    
    /**
     * Returns an updated HexValue object with the new blue value.
     * @param blue Number from 0 to 255 representing the blue channel value.
     * @returns new HexValue object with all previous values, along with the new blue value.
     */
    updateBlue = (blue:number) => {
        return new HexValue(this.red, this.green, blue, this.alpha);
    }

    /**
     * Returns an updated HexValue object with a new alpha value.
     * @param alpha optional number from 0 to 255 representing the alpha channel value. If no value is given, alpha channel is removed from the value
     * @returns new HexValue object with all previous values, along with the new green value.
     */
    updateAlpha = (alpha?:number) => {
        return new HexValue(this.red, this.green, this.blue, this.alpha);
    }
}

/**
 * Represents 4 different numeric values, useful for properties like margin, padding, etc.
 */
class CardinalNumericValue implements Value {
    value: string;
    top: NumericValue;
    left: NumericValue;
    right: NumericValue;
    bottom: NumericValue;

    constructor(top:NumericValue, right:NumericValue, bottom:NumericValue, left:NumericValue) {
        this.top = top;
        this.right = right;
        this.bottom = bottom;
        this.left = left;
        this.value = top.value + right.value + bottom.value + left.value;
    }

    updateTop = (top:NumericValue) => {
        return new CardinalNumericValue(top, this.right, this.bottom, this.left);
    }

    updateRight = (right:NumericValue) => {
        return new CardinalNumericValue(this.top, right, this.bottom, this.left);
    }

    updateBottom = (bottom:NumericValue) => {
        return new CardinalNumericValue(this.top, this.right, bottom, this.left);
    }

    updateLeft = (left:NumericValue) => {
        return new CardinalNumericValue(this.top, this.right, this.bottom, left);
    }
}

export {NumericUnits, PredefinedColors, Value, NumericValue, HexValue, CardinalNumericValue, PredefinedColorValue};