import {Button, Container, Form, Input, Link, Title, Wrapper} from "../../styles/login";

const Login = () => {
	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder={"Username"}/>
					<Input placeholder={"Password"}/>
					<Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
					<Link>CREATE A NEW ACCOUNT</Link>
					<Button>LOGIN</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;