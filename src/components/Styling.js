import { Button } from "@material-ui/core";
import React from "react";
import {
	makeStyles,
	ThemeProvider,
	createMuiTheme,
} from "@material-ui/core/styles";

import { green } from "@material-ui/core/colors";
import "fontsource-roboto";
import { Typography } from "@material-ui/core";

const useStyles = makeStyles({
	root: {
		border: 0,
		borderRadius: "50px",
		color: "violet",
	},
});

const Styling = () => {
	const classes = useStyles();
	// const theme = createMuiTheme({
	// 	palette: {
	// 		primary: {
	// 			main: green[500],
	// 		},
	// 	},
	// });
	return (
		<>
			<Typography variant="body1" component="div">
				Hello
			</Typography>
			<Button variant="contained" className={classes.root}>
				Styled Button
			</Button>
		</>
		// <ThemeProvider theme={theme}>
		// 	<Button variant="contained" className={classes.root}>
		// 		Styled Button
		// 	</Button>
		// </ThemeProvider>
	);
};

export default Styling;
