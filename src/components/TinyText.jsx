import React from "react";

const styles = {
	color: "#999",
	fontSize: "12px",
	margin: "0",
	lineHeight: "28px"
}

const TinyText = ({children}) => {
	return (<p style={styles}>{children}</p>);
}

export default TinyText;