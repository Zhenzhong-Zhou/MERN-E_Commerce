import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Visibility} from "@material-ui/icons";
import "./styles.css";
import avatar from "../../../assets/images/avatar.png";
import {axiosUser} from "../../../api";

const WidgetSm = () => {
	const admin = useSelector(state => state.user.currentUser);
	const TOKEN = admin.accessToken;
	const [users, setUsers] = useState([]);

	useEffect(() => {
		const fetchUsers = async () => {
			try {
				const {data} = await axiosUser.get("users/?new=true", {
					headers: {token: `Bearer ${TOKEN}`}
				});
				setUsers(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchUsers();
	}, [TOKEN]);

	return (
		<div className={"WidgetSm"}>
			<span className={"WidgetSmTitle"}>New Join Members</span>
			<ul className={"WidgetSmList"}>
				{users.map((user) => (
					<li className={"WidgetSmListItem"} key={user._id}>
						<img src={user.profile || avatar} alt={"Avatar"} className={"WidgetSmImg"}/>
						<div className={"WidgetSmUser"}>
							<span className={"WidgetSmUsername"}>{user.username}</span>
						</div>
						<button className={"WidgetSmButton"}><Visibility className={"WidgetSmIcon"}/>Display</button>
					</li>
				))}
			</ul>
		</div>
	);
};

export default WidgetSm;