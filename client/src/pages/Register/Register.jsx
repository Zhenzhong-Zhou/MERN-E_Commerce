import {Agreement, Button, Container, Form, Input, Title, Wrapper} from "../../styles/register";

const Register = () => {
	return (
		<Container>
			<Wrapper>
				<Title>CREATE AN ACCOUNT</Title>
				<Form>
					<Input placeholder={"Username"}/>
					<Input placeholder={"First Name"}/>
					<Input placeholder={"Last Name"}/>
					<Input placeholder={"Email"}/>
					<Input placeholder={"Password"}/>
					<Input placeholder={"Confirmed Password"}/>
					<Agreement>
						By creating an account, I consent to the processing of my personal
						data in accordance with the <b>PRIVACY POLICY</b>
					</Agreement>
					<Button>CREATE</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Register;