import {AttachMoney, BarChart, PermIdentity, Storefront} from "@material-ui/icons";
import "./styles.css";
import {Link} from "react-router-dom";

const Quick = () => {
	return (
		<div className={"sidebarMenu"}>
		<h3 className={"sidebarTitle"}>Quick Menu</h3>
			<ul className={"sidebarList"}>
				<Link to={"/users"} className={"link"}>
					<li className={"sidebarListItem"}><PermIdentity className={"sidebarIcon"}/>Users</li>
				</Link>
				<Link to={"/products"} className={"link"}>
					<li className={"sidebarListItem"}><Storefront className={"sidebarIcon"}/>Products</li>
				</Link>
				<Link to={"/transactions"} className={"link"}>
					<li className={"sidebarListItem"}><AttachMoney className={"sidebarIcon"}/>Transactions</li>
				</Link>
				<Link to={"/reports"} className={"link"}>
					<li className={"sidebarListItem"}><BarChart className={"sidebarIcon"}/>Reports</li>
				</Link>
			</ul>
		</div>
	);
};

export default Quick;