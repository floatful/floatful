import React, { useState } from "react";

const RGBAPicker = ({ property, setNewValue }) => {
	const [rgbValue, setRGBValue] = useState({
		red: 0,
		green: 0,
		blue: 0,
		alpha: 255,
	});
	const [hexValue, setHexValue] = useState("#000000FF");

	const convertRGBtoHEX = () => {
		return (
			"#" +
			parseInt(rgbValue.red).toString(16).padStart(2, "0") +
			parseInt(rgbValue.green).toString(16).padStart(2, "0") +
			parseInt(rgbValue.blue).toString(16).padStart(2, "0") +
			parseInt(rgbValue.alpha).toString(16).padStart(2, "0")
		);
	};

	const handleValueChange = (channel, newChannelValue) => {
		let newRGBValue = { ...rgbValue };
		newRGBValue[channel] = newChannelValue;
		setRGBValue(newRGBValue);
		let newHexValue = convertRGBtoHEX();
		setHexValue(newHexValue);
	};

	const close = (value = property.value) => {
		setNewValue(value, true);
	};

	return (
		<div className="floatful floatful--hex-color-picker">
			<p>{hexValue}</p>
			<div
				className="floatful--hex-color-display"
				style={{ backgroundColor: hexValue }}
			/>
			<label
				className="floatful floatful--RGB-label"
				htmlFor={property + "--Color-Red"}
			>
				Red: {parseInt(rgbValue.red).toString(16)}:{typeof rgbValue.red}
			</label>
			<input
				className="floatful floatful--RGB-slider"
				id={property + "--Color-Red"}
				type="range"
				min="0"
				max="255"
				value={rgbValue.red}
				onChange={(e) => handleValueChange("red", e.target.value)}
			/>
			<label
				className="floatful floatful--RGB-label"
				htmlFor={property + "--Color-Green"}
			>
				Green: {rgbValue.green}
			</label>
			<input
				className="floatful floatful--RGB-slider"
				id={property + "--Color-Green"}
				type="range"
				min="0"
				max="255"
				value={rgbValue.green}
				onChange={(e) => handleValueChange("green", e.target.value)}
			/>
			<label
				className="floatful floatful--RGB-label"
				htmlFor={property + "--Color-Blue"}
			>
				Blue: {rgbValue.blue}
			</label>
			<input
				className="floatful floatful--RGB-slider"
				id={property + "--Color-Blue"}
				type="range"
				min="0"
				max="255"
				value={rgbValue.blue}
				onChange={(e) => handleValueChange("blue", e.target.value)}
			/>
			<label
				className="floatful floatful--RGB-label"
				htmlFor={property + "--Color-Alpha"}
			>
				Opacity: {rgbValue.alpha}
			</label>
			<input
				className="floatful floatful--RGB-slider"
				id={property + "--Color-Alpha"}
				type="range"
				min="0"
				max="255"
				value={rgbValue.alpha}
				onChange={(e) => handleValueChange("alpha", e.target.value)}
			/>
			<input value="Cancel" type="button" onClick={close()} />
			<input value="Save" type="button" onClick={close(hexValue)} />
		</div>
	);
};

export default RGBAPicker;
