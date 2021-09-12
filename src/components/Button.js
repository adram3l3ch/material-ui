import React from "react";
import Button from "@material-ui/core/Button";
import Save from "@material-ui/icons/Save";
import { ButtonGroup } from "@material-ui/core";
import { Delete } from "@material-ui/icons";

const Buttons = () => {
	return (
		<ButtonGroup>
			<Button
				startIcon={<Save />}
				onClick={() => alert("hello")}
				size="large"
				variant="contained"
				color="primary"
				style={{ color: "yellow" }}
			>
				save
			</Button>
			<Button
				startIcon={<Delete />}
				variant="contained"
				color="secondary"
			>
				Discard
			</Button>
		</ButtonGroup>
	);
};

export default Buttons;

// attributes

//  1. variant = contained, text, outlined
//  2. size = large, small, medium
//  3. color = primary, secondary
//  4. disabled
//  5. href
//  6. onCLick
//  7. style = {{fontSize:24px}}
//  8. startIcon/endIcon = {<Icon/>}
