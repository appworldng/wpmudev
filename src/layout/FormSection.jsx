import React from "react";
import Form from "../components/Form";

const styles = {
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	width: "70%",
	height: "100vh",
}

const FormSection = ({children}) => {
	return (
		<div style={styles}>
			<Form />
		</div>
	);
}

export default FormSection;