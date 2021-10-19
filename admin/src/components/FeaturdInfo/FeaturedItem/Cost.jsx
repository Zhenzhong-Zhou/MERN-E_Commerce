import {ArrowUpward} from "@material-ui/icons";
import "./styles.css";

const Cost = () => {
	return (
		<div className={"featuredItem"}>
			<span className={"featuredTitle"}>Cost</span>
			<div className={"featuredMoneyContainer"}>
				<span className={"featuredMoney"}>$2,222</span>
				<span className={"featuredMoneyRate"}>+2.6<ArrowUpward className={"featuredIcon"}/></span>
			</div>
			<span className={"featuredSub"}>Compared to last month</span>
		</div>
	);
};

export default Cost;