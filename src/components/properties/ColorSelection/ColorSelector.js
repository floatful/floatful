import React, { useState } from "react";
import RGBAPicker from "./RGBAPicker";

const ColorSelector = ({ property, dispatch }) => {
	const [valueType, setValueType] = useState("hexadecimal");
	const [tempValue, setValue] = useState(property.value);

	const handleInputChange = (e) => {
		setValueType(e.target.value);
	};

	const handleNewValue = (newValue, closeSelectorOnFinish) => {};

	return (
		<div className="floatful floatful--color-selector">
			<select
				name={property.name + "-values"}
				value={valueType}
				onChange={(e) => handleInputChange(e)}
			>
				<option key="hexidecimal" value="hexadecimal">
					Hex Value
				</option>
				<option key="predefined" value="predefined">
					Predefined CSS Values
				</option>
				<option key="recentlyUsed" value="recentlyUsed">
					Recently Used Colors
				</option>
			</select>

			{valueType === "hexadecimal" && (
				<RGBAPicker property={property} setNewValue={handleNewValue} />
			)}
			{valueType === "predefined" && <></>}
			{valueType === "recentlyUsed" && <></>}
		</div>
	);
};

export default ColorSelector;
