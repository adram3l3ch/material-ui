import React, { useState } from "react";
import CheckboxComp from "@material-ui/core/Checkbox";
import { FormControlLabel } from "@material-ui/core";
import { ArrowBack } from "@material-ui/icons";

const Checkbox = () => {
	const [checked, setChecked] = useState(true);
	return (
		<FormControlLabel
			control={
				<CheckboxComp
					checked={checked}
					onChange={() => setChecked(!checked)}
					style={{ color: "green" }}
					checkedIcon={<ArrowBack />}
				/>
			}
			label="check box"
		/>

		// <CheckboxComp
		// 		checked={checked}
		// 		onChange={() => setChecked(!checked)}
		// 		style={{ color: "green" }}
		// 	/>
	);
};

export default Checkbox;

// Attributes

//  1.checked = {true}
//  2.onChange
//  3.color
//  4.disabled
//  5.inputProps = {{aria-label:"value"}}
//  6.icon = {<Icon/>} - onUnchecked condition
//  7.checkedIcon = {<Icon/>}

// FormControl

//  1.control
//  2.label
