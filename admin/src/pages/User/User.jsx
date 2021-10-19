import "./styles.css";
import user from "../../assets/images/user3.jpeg";
import {UserDisplayBottom, UserUpdateForm} from "../index";
import {Link} from "react-router-dom";

const User = () => {
	return (
		<div className={"user"}>
			<div className={"userTitleContainer"}>
				<h1 className={"userTitle"}>Edit User</h1>
				<Link to={"/NewUser"}>
					<button className={"userAddButton"}>Create</button>
				</Link>
			</div>
			<div className={"userContainer"}>
				<div className={"userDisplay"}>
					<div className={"userDisplayTop"}>
						<img src={user} alt={"Avatar"} className={"userDisplayImg"}/>
						<div className={"userDisplayTopTitle"}>
							<span className={"userDisplayUsername"}>Crystal Liu</span>
							<span className={"userDisplayUserTitle"}>Actress</span>
						</div>
					</div>
					<UserDisplayBottom/>
				</div>
				<div className={"userUpdate"}>
					<span className={"userUpdateTitle"}>Edit</span>
					<UserUpdateForm/>
				</div>
			</div>
		</div>
	);
};

export default User;