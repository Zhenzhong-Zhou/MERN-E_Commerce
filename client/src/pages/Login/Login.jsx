import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {Button, Container, Error, Form, Input, Link, Title, Wrapper} from "../../styles/login";
import {login} from "../../redux/api";

const Login = () => {
	const [username, setUsername]= useState("");
	const [password, setPassword]= useState("");
	const dispatch = useDispatch();
	const {isFetching, error} = useSelector(state => state.user);

	const handleLogin = (e) => {
		e.preventDefault();
		login(dispatch, {username, password});
	};

	return (
		<Container>
			<Wrapper>
				<Title>SIGN IN</Title>
				<Form>
					{error && <Error>Your username or password is incorrect...</Error>}
					<Input placeholder={"Username"} type={"text"} onChange={event => setUsername(event.target.value)}/>
					<Input placeholder={"Password"} type={"password"} onChange={event => setPassword(event.target.value)}/>
					<Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
					<Link href={"/register"} className={"link"}>CREATE A NEW ACCOUNT</Link>
					<Button onClick={handleLogin} disabled={isFetching}>LOGIN</Button>
				</Form>
			</Wrapper>
		</Container>
	);
};

export default Login;