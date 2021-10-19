import "./styles.css";
import user from "../../../assets/images/user.jpeg";
import {Visibility} from "@material-ui/icons";

const WidgetSm = () => {
	return (
		<div className={"WidgetSm"}>
			<span className={"WidgetSmTitle"}>New Join Members</span>
			<ul className={"WidgetSmList"}>
				<li className={"WidgetSmListItem"}>
					<img src={user} alt={"Avatar"} className={"WidgetSmImg"}/>
					<div className={"WidgetSmUser"}>
						<span className={"WidgetSmUsername"}>Crystal Liu</span>
						<span className={"WidgetSmUserTitle"}>Actress</span>
					</div>
					<button className={"WidgetSmButton"}><Visibility className={"WidgetSmIcon"}/>Display</button>
				</li>
			</ul>
		</div>
	);
};

export default WidgetSm;