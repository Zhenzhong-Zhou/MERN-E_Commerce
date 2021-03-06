import {useEffect, useState} from "react";
import {format} from "timeago.js";
import "./styles.css";
import user from "../../../assets/images/user1.jpeg";
import {Button} from "../../index";
import {axiosUser} from "../../../api";
import {useSelector} from "react-redux";

const WidgetLg = () => {
	const admin = useSelector(state => state.user.currentUser);
	const TOKEN = admin.accessToken;
	const [orders, setOrders] = useState([]);

	useEffect(() => {
		const fetchOrders = async () => {
			try {
				const {data} = await axiosUser.get("orders", {
					headers: {token: `Bearer ${TOKEN}`}
				});
				setOrders(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchOrders();
	}, [TOKEN]);
	return (
		<div className={"widgetLg"}>
			<h3 className={"widgetLgTitle"}>Latest transactions</h3>
			<table className={"widgetLgTable"}>
				<tbody>
					<tr className={"widgetLgTr"}>
						<th className={"widgetLgTh"}>Customer</th>
						<th className={"widgetLgTh"}>Date</th>
						<th className={"widgetLgTh"}>Amount</th>
						<th className={"widgetLgTh"}>Status</th>
					</tr>
					{orders.map(order => (
						<tr className={"widgetLgTr"} key={order._id}>
							<td className={"widgetLgUser"}>
								<img src={user} alt={"Avatar"} className={"widgetLgImg"}/>
								<span className={"widgetLgName"}>{order.userId}</span>
							</td>
							<td className={"widgetLgDate"}>{format(order.createdAt)}</td>
							<td className={"widgetLgAmount"}>${order.amount}</td>
							<td className={"widgetLgStatus"}><Button type={order.status}/></td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default WidgetLg;