import "./styles.css";
import user from "../../../assets/images/user1.jpeg";
import {Button} from "../../index";

const WidgetLg = () => {
	return (
		<div className={"widgetLg"}>
			<h3 className={"widgetLgTitle"}>Latest transactions</h3>
			<table className={"widgetLgTable"}>
				<tr className={"widgetLgTr"}>
					<th className={"widgetLgTh"}>Customer</th>
					<th className={"widgetLgTh"}>Date</th>
					<th className={"widgetLgTh"}>Amount</th>
					<th className={"widgetLgTh"}>Status</th>
				</tr>
				<tr className={"widgetLgTr"}>
					<td className={"widgetLgUser"}>
						<img src={user} alt={"Avatar"} className={"widgetLgImg"}/>
						<span className={"widgetLgName"}>Xixi</span>
					</td>
					<td className={"widgetLgDate"}>6 Sep 2021</td>
					<td className={"widgetLgAmount"}>$100.00</td>
					<td className={"widgetLgStatus"}><Button type={"Approved"}/></td>
				</tr>
				<tr className={"widgetLgTr"}>
					<td className={"widgetLgUser"}>
						<img src={user} alt={"Avatar"} className={"widgetLgImg"}/>
						<span className={"widgetLgName"}>Xixi</span>
					</td>
					<td className={"widgetLgDate"}>6 Sep 2021</td>
					<td className={"widgetLgAmount"}>$100.00</td>
					<td className={"widgetLgStatus"}><Button type={"Declined"}/></td>
				</tr>
				<tr className={"widgetLgTr"}>
					<td className={"widgetLgUser"}>
						<img src={user} alt={"Avatar"} className={"widgetLgImg"}/>
						<span className={"widgetLgName"}>Xixi</span>
					</td>
					<td className={"widgetLgDate"}>6 Sep 2021</td>
					<td className={"widgetLgAmount"}>$100.00</td>
					<td className={"widgetLgStatus"}><Button type={"Pending"}/></td>
				</tr>
			</table>
		</div>
	);
};

export default WidgetLg;