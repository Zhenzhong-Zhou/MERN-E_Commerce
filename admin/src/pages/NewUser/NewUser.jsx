import "./styles.css";
import {NewUserForm} from "../index";

const newUser = () => {
	return (
		<div className={"newUser"}>
			<h1 className={"newUserTitle"}>New User</h1>
			<NewUserForm/>
		</div>
	);
};

export default newUser;