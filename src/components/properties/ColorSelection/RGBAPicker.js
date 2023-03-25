import React, { useState } from "react";

const RGBAPicker = ({ property, setNewValue }) => {
	const [rgbValue, setRGBValue] = useState({
		red: 0,
		green: 0,
		blue: 0,
		alpha: 1,
	});
	const [hexValue, setHexValue] = useState("#000000FF");

	const convertRGBtoHEX = () => {
		return (
			"#" +
			rgbValue.red.toString(16) +
			rgbValue.green.toString(16) +
			rgbValue.blue.toString(16) +
			rgbValue.alpha.toString(16)
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
			<div
				className="floatful-hex-color-display"
				style={{ backgroundColor: hexValue }}
			/>
			<label
				className="floatful floatful--RGB-label"
				for={property + "--Color-Red"}
			>
				Red
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
				for={property + "--Color-Green"}
			>
				Green
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
				for={property + "--Color-Blue"}
			>
				Blue
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
				for={property + "--Color-Alpha"}
			>
				Opacity
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
			<input type="button" onClick={close()}>
				Cancel
			</input>
			<input type="button" onClick={close(hexValue)}>
				Save
			</input>
		</div>
	);
};

export default RGBAPicker;
