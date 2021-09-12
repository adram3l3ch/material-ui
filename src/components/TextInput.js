import { TextField } from "@material-ui/core";
import React from "react";

const TextInput = () => {
	return (
		<TextField
			variant="filled"
			color="secondary"
			type="text"
			label="About"
			placeholder="About"
		/>
	);
};

export default TextInput;

// Attributes

//  1. variant = filled,outlined,standard
//  2. type =text, date, color, file,time ...
//  3. value
//  4. label
//  5. placeholder
