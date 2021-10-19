import "./styles.css";
import {Cost, Revenue, Sale} from "../index";

const FeaturedInfo = () => {
	return (
		<div className={"featured"}>
			<Revenue/>
			<Sale/>
			<Cost/>
		</div>
	);
};

export default FeaturedInfo;