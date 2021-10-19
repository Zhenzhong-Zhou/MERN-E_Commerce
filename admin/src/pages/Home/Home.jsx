import "./styles.css";
import {Chart, FeaturedInfo, WidgetLg, WidgetSm} from "../../components";
import {userData} from "../../boilerplateData";

const Home = () => {
	return (
		<div className={"home"}>
			<FeaturedInfo/>
			<Chart data={userData} title={"User Analytics"} grid dataKey={"Active User"}/>
			<div className={"homeWidgets"}>
				<WidgetSm/>
				<WidgetLg/>
			</div>
		</div>
	);
};

export default Home;