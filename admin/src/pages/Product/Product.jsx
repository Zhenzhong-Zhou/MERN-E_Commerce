import {Link} from "react-router-dom";
import "./styles.css";
import {Chart} from "../../components";
import {productData} from "../../boilerplateData";
import {ProductForm, ProductTopRight} from "../index";

const Product = () => {
	return (
		<div className={"product"}>
			<div className={"productTitleContainer"}>
				<h1 className={"productTitle"}>Product</h1>
				<Link to={"/NewProduct"}>
					<button className={"productAddButton"}>Create</button>
				</Link>
			</div>
			<div className={"productTop"}>
				<div className={"productTopLeft"}>
					<Chart data={productData} dataKey={"Sales"} title={"Sales Performance"}/>
				</div>
				<ProductTopRight/>
			</div>
			<div className={"productBottom"}>
				<ProductForm/>
			</div>
		</div>
	);
};

export default Product;