import {useState} from "react";
import {useDispatch} from "react-redux";
import {Button, Container, Form, Input, Link, Title, Wrapper} from "../../styles/login";
import {login} from "../../redux/api";

const Login = () => {
	const [username, setUsername]= useState("");
	const [password, setPassword]= useState("");
	const dispatch = useDispatch();

	const handleLogin = (e) => {
		e.preventDefault();
		login(dispatch, {username, password});
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					<Input placeholder={"Username"} onChange={event => setUsername(event.target.value)}/>
					<Input placeholder={"Password"} type={"password"} onChange={event => setPassword(event.target.value)}/>
					<Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
					<Link href={"/register"} className={"link"}>CREATE A NEW ACCOUNT</Link>
					<Button onClick={handleLogin}>LOGIN</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;