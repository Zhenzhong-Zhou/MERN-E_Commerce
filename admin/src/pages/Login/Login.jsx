import {useState} from "react";

const Login = () => {
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");

	const handleClick = (e) => {
		e.preventDefault();
		//
	}

	return (
		<div>
			<input type={"text"} placeholder={"Username"} onChange={event => setUsername(event.target.value)}/>
			<input type={"password"} placeholder={"Password"} onChange={event => setPassword(event.target.value)}/>
			<button onClick={handleClick}>Login</button>
		</div>
	);
};

export default Login;