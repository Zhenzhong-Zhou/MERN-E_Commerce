import {Language, NotificationsNone, Settings} from "@material-ui/icons";
import "./styles.css";
import avatar from "../../assets/images/avatar.png";

const NavBar = () => {
	return (
		<div className={"navbar"}>
			<div className={"navbarWrapper"}>
				<div className={"topLeft"}>
					<span className={"logo"}>Admin</span>
				</div>
				<div className={"topRight"}>
					<div className={"navbarIconContainer"}>
						<NotificationsNone/>
						<span className={"navbarIconBadge"}>2</span>
					</div>
					<div className={"navbarIconContainer"}>
						<Language/>
						<span className={"navbarIconBadge"}>2</span>
					</div>
					<div className={"navbarIconContainer"}>
						<Settings/>
					</div>
					<img className={"topAvatar"} alt={"Avatar"} src={avatar}/>
				</div>
			</div>
		</div>
	);
};

export default NavBar;