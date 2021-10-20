import {useEffect, useMemo, useState} from "react";
import "./styles.css";
import {Chart, FeaturedInfo, WidgetLg, WidgetSm} from "../../components";
import {axiosUser} from "../../api";

const Home = () => {
	const [userStatus, setUserStatus] = useState([]);
	const months = useMemo(() => [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	], []);

	useEffect(() => {
		const fetchStatus = async () => {
			try {
				const {data} = await axiosUser.get("users/status");
				const statusList = data.sort((a, b) => {return a._id - b._id});
				statusList.map(item =>
					setUserStatus(prevState => [
						...prevState,
						{month: months[item._id - 1], "Active User": item.total}
					])
				);
			} catch (error) {
				console.log(error);
			}
		};
		fetchStatus();
	}, [months]);

	return (
		<div className={"home"}>
			<FeaturedInfo/>
			<Chart data={userStatus} title={"User Analytics"} grid dataKey={"Active User"}/>
			<div className={"homeWidgets"}>
				<WidgetSm/>
				<WidgetLg/>
			</div>
		</div>
	);
};

export default Home;