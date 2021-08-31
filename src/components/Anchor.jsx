import React from "react";
import { Link, BrowserRouter } from "react-router-dom";

const styles = {
	fontWeight: "700",
	color: "#286FFA",
	textDecoration: "none"
}

const Anchor = ({children}) => {
	return (
		<BrowserRouter>
			<Link style={styles}>{children}</Link>
		</BrowserRouter>
	);
}

export default Anchor;