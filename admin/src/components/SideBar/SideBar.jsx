import "./styles.css";
import {Dashboard, Notification, Quick, Staff} from "../index";

const SideBar = () => {
	return (
		<div className={"sidebar"}>
			<div className={"sidebarWrapper"}>
				<Dashboard/>
				<Quick/>
				<Notification/>
				<Staff/>
			</div>
		</div>
	);
};

export default SideBar;