import React from "react";

const styles = {
	display: "flex",
	padding: "0",
	margin: "0",
	fontFamily: "Arial"
}

const Section = ({children}) => {
	return (<section style={styles}>{children}</section>);
}

export default Section;