import React from "react";

const styles = {
	background: "#eee",
	margin: "2em 0",
	padding: "1.25em",
	border: "none",
	width: "100%",
	boxSizing: "border-box",
	borderRadius: "5px",
	fontWeight: "700",
	color: "#666"
}

const Button = ({children}) => {
	return (<button style={styles}>{children}</button>);
}

export default Button;