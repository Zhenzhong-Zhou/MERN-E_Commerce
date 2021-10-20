import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import "./styles.css";
import {Cost, Revenue, Sale} from "../index";
import {axiosUser} from "../../api";

const FeaturedInfo = () => {
	const admin = useSelector(state => state.user.currentUser);
	const TOKEN = admin.accessToken;
	const [income, setIncome] = useState([]);
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		const fetchIncome = async () => {
			try {
				const {data} = await axiosUser.get("orders/income", {
					headers: {token: `Bearer ${TOKEN}`}
				});
				setIncome(data);
				setPercentage((data[0].total*100) / data[1].total - 100)
			} catch (error) {
				console.log(error);
			}
		};
		fetchIncome();
	}, [TOKEN]);

	return (
		<div className={"featured"}>
			<Revenue income={income} percentage={percentage}/>
			<Sale/>
			<Cost/>
		</div>
	);
};

export default FeaturedInfo;