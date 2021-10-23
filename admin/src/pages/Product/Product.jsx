import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import "./styles.css";
import {Chart} from "../../components";
import {productData} from "../../boilerplateData";
import {ProductForm, ProductTopRight} from "../index";

const Product = () => {
	const location = useLocation();
	const productId = location.pathname.split("/")[2];
	const product = useSelector(state => state.product.products.find(product => product._id === productId));

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
				<ProductTopRight product={product}/>
			</div>
			<div className={"productBottom"}>
				<ProductForm product={product}/>
			</div>
		</div>
	);
};

export default Product;