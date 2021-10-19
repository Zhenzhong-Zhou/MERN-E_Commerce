import "./styles.css";

const NewUserForm = () => {
	return (
		<form className={"newUserForm"}>
			<div className={"newUserItem"}>
				<label>Username</label>
				<input type={"text"} placeholder={"yuanyuan"}/>
			</div>
			<div className={"newUserItem"}>
				<label>Full Name</label>
				<input type={"text"} placeholder={"Yuanyuan Gao"}/>
			</div>
			<div className={"newUserItem"}>
				<label>Email</label>
				<input type={"text"} placeholder={"yuan@gamil.com"}/>
			</div>
			<div className={"newUserItem"}>
				<label>Password</label>
				<input type={"password"} placeholder={"Password"}/>
			</div>
			<div className={"newUserItem"}>
				<label>Phone</label>
				<input type={"text"} placeholder={"+1 306 123 4567"}/>
			</div>
			<div className={"newUserItem"}>
				<label>Address</label>
				<input type={"text"} placeholder={"Beijing | China"}/>
			</div>
			<div className={"newUserItem"}>
				<label>Gender</label>
				<div className={"newUserGender"}>
					<input type={"radio"} placeholder={"Gender"} id={"male"} value={"male"}/>
					<label for={"male"}>Male</label>
					<input type={"radio"} placeholder={"Gender"} id={"female"} value={"female"}/>
					<label htmlFor={"female"}>Female</label>
					<input type={"radio"} placeholder={"Gender"} id={"other"} value={"other"}/>
					<label for={"other"}>Other</label>
				</div>
			</div>
			<div className={"newUserItem"}>
				<label>Active</label>
				<select className={"newUserSelect"} name={"active"} id={"active"}>
					<option value={"yes"}>Yes</option>
					<option value={"no"}>No</option>
				</select>
			</div>
			<button className={"newUserButton"}>Create</button>
		</form>
	);
};

export default NewUserForm;