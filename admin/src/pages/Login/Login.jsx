import {useState} from "react";
import {useDispatch} from "react-redux";
import {login} from "../../redux/api";
import "./styles.css";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const dispatch = useDispatch();

	const handleClick = (e) => {
		e.preventDefault();
		login(dispatch, {username, password});
	};

	return (
		<div className={"login"}>
			<h1>E_Commerce Dashboard</h1>
			<input type={"text"} placeholder={"Username"} onChange={event => setUsername(event.target.value)}/>
			<input type={"password"} placeholder={"Password"} onChange={event => setPassword(event.target.value)}/>
			<button onClick={handleClick}>Login</button>
		</div>
	);
};

export default Login;