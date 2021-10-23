import {useEffect, useMemo, useState} from "react";
import {Link, useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import "./styles.css";
import {Chart} from "../../components";
import {ProductForm, ProductTopRight} from "../index";
import {axiosUser} from "../../api";

const Product = () => {
	const admin = useSelector(state => state.user.currentUser);
	const TOKEN = admin.accessToken;
	const location = useLocation();
	const productId = location.pathname.split("/")[2];
	const product = useSelector(state => state.product.products.find(product => product._id === productId));
	const [productStatus, setProductStatus] = useState([]);

	const months = useMemo(() => [
		"January", "February", "March",
		"April", "May", "June", "July",
		"August", "September", "October",
		"November", "December"
	], []);

	useEffect(() => {
		const fetchProductStatus = async () => {
			try {
				const {data} = await axiosUser.get(`orders/income?pid=${productId}`, {
					headers: {token: `Bearer ${TOKEN}`}
				});
				data.map(item =>
					setProductStatus(prevState =>
						[
							...prevState, {month: months[item._id - 1], Sales: item.total}
						]
					)
				);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProductStatus();
	}, [productId, months, TOKEN]);

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
					<Chart data={productStatus} dataKey={"Sales"} title={"Sales Performance"}/>
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