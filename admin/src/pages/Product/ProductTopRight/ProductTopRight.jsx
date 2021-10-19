import "./styles.css";
import airpods from "../../../assets/images/airpods.jpeg";

const ProductTopRight = () => {
	return (
		<div className={"productTopRight"}>
			<div className={"productInfoTop"}>
				<img className={"productInfoImg"} src={airpods} alt={"Product Cover"}/>
				<span className={"productName"}>Apple Airpods</span>
			</div>
			<div className={"productInfoBottom"}>
				<div className={"productInfoItem"}>
					<span className={"productInfoKey"}>id:</span>
					<span className={"productInfoValue"}>123</span>
				</div>
				<div className={"productInfoItem"}>
					<span className={"productInfoKey"}>sales:</span>
					<span className={"productInfoValue"}>876</span>
				</div>
				<div className={"productInfoItem"}>
					<span className={"productInfoKey"}>active:</span>
					<span className={"productInfoValue"}>yes</span>
				</div>
				<div className={"productInfoItem"}>
					<span className={"productInfoKey"}>in stock:</span>
					<span className={"productInfoValue"}>no</span>
				</div>
			</div>
		</div>
	);
};

export default ProductTopRight;