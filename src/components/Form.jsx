import React from "react";

import TextControl from "./TextControl";
import PasswordControl from "./PasswordControl";
import SelectControl from "./SelectControl";
import Button from "./Button";

import Caption from "./Caption";
import Summary from "./Summary";
import TinyText from "./TinyText";

import Anchor from "./Anchor";

const Form = () => {
	return (
		<form style={{ width: "33.33%" }}>
          <Caption>Let's set up your account</Caption>
          <Summary>Already have an account? <Anchor>Sign In</Anchor></Summary>
          <TextControl label="Your name" />
          <TextControl label="Email address" />
          <SelectControl/>
          <PasswordControl label="Password" />
          <TinyText>Minimum 8 characters</TinyText>
          <Button>Next</Button>
          <TinyText>By clicking the “Next” button, you agree to creating a free account, and to <Anchor>Terms of Service</Anchor> and <Anchor>Privacy Policy</Anchor>.</TinyText>
		</form>
	);
}

export default Form;