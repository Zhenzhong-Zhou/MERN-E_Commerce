import {ArrowDownward} from "@material-ui/icons";
import "./styles.css";

const Sale = () => {
	return (
		<div className={"featuredItem"}>
			<span className={"featuredTitle"}>Sales</span>
			<div className={"featuredMoneyContainer"}>
				<span className={"featuredMoney"}>$5,415</span>
				<span className={"featuredMoneyRate"}>-1.4<ArrowDownward className={"featuredIcon negative"}/></span>
			</div>
			<span className={"featuredSub"}>Compared to last month</span>
		</div>
	);
};

export default Sale;