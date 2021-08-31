import React from "react";
import Dummy from "../components/Dummy";

const styles = {
	width: "30%",
	background: "#286FFA",
	height: "100vh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	color: "#fff",
}

const DummySection = ({children}) => {
	return (
		<div style={styles}>
			<Dummy/>
		</div>
	);
}

export default DummySection;