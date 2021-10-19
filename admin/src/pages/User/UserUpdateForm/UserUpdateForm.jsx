import {Publish} from "@material-ui/icons";
import "./styles.css";
import user from "../../../assets/images/user.jpeg";

const UserUpdateForm = () => {
	return (
		<form className={"userUpdateForm"}>
			<div className={"userUpdateLeft"}>
				<div className={"userUpdateItem"}>
					<label>Username</label>
					<input type={"text"} placeholder={"crystalliu100"} className={"userUpdateInput"}/>
				</div>
				<div className={"userUpdateItem"}>
					<label>Full Name</label>
					<input type={"text"} placeholder={"Crystal Liu"} className={"userUpdateInput"}/>
				</div>
				<div className={"userUpdateItem"}>
					<label>Email</label>
					<input type={"text"} placeholder={"crystal@gamil.com"} className={"userUpdateInput"}/>
				</div>
				<div className={"userUpdateItem"}>
					<label>Phone</label>
					<input type={"text"} placeholder={"+1 123 456 7890"} className={"userUpdateInput"}/>
				</div>
				<div className={"userUpdateItem"}>
					<label>Address</label>
					<input type={"text"} placeholder={"New York | USA"} className={"userUpdateInput"}/>
				</div>
			</div>
			<div className={"userUpdateRight"}>
				<div className={"userUpdateUpload"}>
					<img src={user} alt={"Avatar"} className={"userUpdateImg"}/>
					<label htmlFor={"file"}><Publish className={"userUpdateIcon"}/></label>
					<input type={"file"} id={"file"} style={{display: "none"}}/>
				</div>
				<button className={"userUpdateButton"}>Update</button>
			</div>
		</form>
	);
};

export default UserUpdateForm;