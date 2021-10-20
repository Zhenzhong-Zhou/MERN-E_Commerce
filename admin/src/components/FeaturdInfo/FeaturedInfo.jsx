import {useEffect, useState} from "react";
import "./styles.css";
import {Cost, Revenue, Sale} from "../index";
import {axiosUser} from "../../api";

const FeaturedInfo = () => {
	const [income, setIncome] = useState([]);
	const [percentage, setPercentage] = useState(0);

	useEffect(() => {
		const fetchIncome = async () => {
			try {
				const {data} = await axiosUser.get("orders/income");
				setIncome(data);
				setPercentage((data[1].total*100) / data[0].total - 100)
			} catch (error) {
				console.log(error);
			}
		};
		fetchIncome();
	}, []);

	return (
		<div className={"featured"}>
			<Revenue income={income} percentage={percentage}/>
			<Sale/>
			<Cost/>
		</div>
	);
};

export default FeaturedInfo;