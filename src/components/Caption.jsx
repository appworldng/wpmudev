import React from "react";

const styles = {
	fontSize: "36px",
	marginBottom: "1em"
}

const Caption = ({children}) => {
	return (<h1 style={styles}>{children}</h1>);
}

export default Caption;