import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {login} from "../../redux/api";
import {Button, Container, Error, Input, Title} from "./styles";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();
	const {isFetching, error} = useSelector(state => state.user);

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, {username, password});
	};

	return (
		<Container>
			<Title>E_Commerce Dashboard</Title>
			{error && <Error>Your username or password is incorrect...</Error>}
			<Input type={"text"} placeholder={"Username"} onChange={event => setUsername(event.target.value)}/>
			<Input type={"password"} placeholder={"Password"} onChange={event => setPassword(event.target.value)}/>
			<Button onClick={handleClick} disabled={isFetching}>Login</Button>
		</Container>
	);
};

export default Login;