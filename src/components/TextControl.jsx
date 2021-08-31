import React from "react";

const styles = {
	padding: "1.25em",
	width: "100%",
	boxSizing: "border-box",
	border: "1px solid rgba(0, 0, 0, 0.1)",
	fontSize: "14px",
	borderRadius: "5px",
	marginBottom: "1.5em"
}

const TextControl = ({label}) => {
	return (<input type="text" placeholder={label} style={styles} />);
}

export default TextControl;