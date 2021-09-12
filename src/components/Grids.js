import React from "react";
import { Paper } from "@material-ui/core";
import { Grid } from "@material-ui/core";

const Grids = () => {
	return (
		<Grid container spacing={4} justify="space-evenly">
			<Grid item xs={6}>
				<Paper
					style={{
						height: "75px",
						width: "100%",
						background: "violet",
					}}
				></Paper>
			</Grid>
			<Grid item>
				<Paper style={{ height: "75px", width: "50px" }}></Paper>
			</Grid>
			<Grid item>
				<Paper style={{ height: "75px", width: "50px" }}></Paper>
			</Grid>
			<Grid item>
				<Paper style={{ height: "75px", width: "50px" }}></Paper>
			</Grid>
		</Grid>
	);
};

export default Grids;

// Attributes

//  1.container / item
//  2.spacing = {5}
//  3.justify = "center"

// Responsive

//  xs={12}, sm, xl, lg, md
