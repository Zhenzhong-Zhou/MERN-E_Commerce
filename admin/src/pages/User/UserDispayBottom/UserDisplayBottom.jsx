import {CalendarToday, LocationSearching, MailOutline, PermIdentity, PhoneAndroid} from "@material-ui/icons";
import "./styles.css";

const UserDisplayBottom = () => {
	return (
		<div className={"userDisplayBottom"}>
			<span className={"userDisplayTitle"}>Account Details</span>
			<div className={"userDisplayInfo"}>
				<PermIdentity className={"userDisplayIcon"}/>
				<span className={"userDisplayInfoTitle"}>crystalliu100</span>
			</div>
			<div className={"userDisplayInfo"}>
				<CalendarToday className={"userDisplayIcon"}/>
				<span className={"userDisplayInfoTitle"}>1987-8-25</span>
			</div>
			<span className={"userDisplayTitle"}>Contact Details</span>
			<div className={"userDisplayInfo"}>
				<PhoneAndroid className={"userDisplayIcon"}/>
				<span className={"userDisplayInfoTitle"}>+1 123 456 7890</span>
			</div>
			<div className={"userDisplayInfo"}>
				<MailOutline className={"userDisplayIcon"}/>
				<span className={"userDisplayInfoTitle"}>crystal@gmail.com</span>
			</div>
			<div className={"userDisplayInfo"}>
				<LocationSearching className={"userDisplayIcon"}/>
				<span className={"userDisplayInfoTitle"}>New York | USA</span>
			</div>
		</div>
	);
};

export default UserDisplayBottom;