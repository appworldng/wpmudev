import React from "react";

const styles = {
	marginBottom: "3em",
	lineHeight: "28px"
}

const Summary = ({children}) => {
	return (<p style={styles}>{children}</p>);
}

export default Summary;