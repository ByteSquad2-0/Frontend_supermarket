import React from "react";
import {
Box,
Container,
Row,
Column,
FooterLink,
Heading,
} from "./footerStyles";

const Footer = () => {
return (
	<Box>
	<Container>
		<Row>
		<Column>
			<Heading>About Us</Heading>
			<FooterLink href="#">Aim</FooterLink>
			<FooterLink href="#">Team</FooterLink>
			<FooterLink href="#">Carrers</FooterLink>
		</Column>
		<Column>
			<Heading>Contact Us</Heading>
			<FooterLink href="mailto:small_connect@gmail.com">Mail us</FooterLink>
		</Column>
		</Row>
	</Container>
    <h5 style={{ color: "black",
    textAlign: "center",
    marginTop: "5px" }}>Made with &#10084; by ByteSquad Team</h5>
	</Box>
);
};
export default Footer;