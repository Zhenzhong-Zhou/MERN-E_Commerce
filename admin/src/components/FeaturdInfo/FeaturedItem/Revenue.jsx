import {ArrowDownward, ArrowUpward} from "@material-ui/icons";
import "./styles.css";

const Revenue = ({income, percentage}) => {
	return (
		<div className={"featuredItem"}>
			<span className={"featuredTitle"}>Revenue</span>
			<div className={"featuredMoneyContainer"}>
				<span className={"featuredMoney"}>${income.map(i => i.total)[1]}</span>
				<span className={"featuredMoneyRate"}>{Math.floor(percentage)}%
					{percentage < 0 ? (
						<ArrowDownward className={"featuredIcon negative"}/>
					) : (
						<ArrowUpward className={"featuredIcon"}/>
					)}
					</span>
			</div>
			<span className={"featuredSub"}>Compared to last month</span>
		</div>
	);
};

export default Revenue;