import "./styles.css";

const ProductTopRight = ({product}) => {
	return (
		<div className={"productTopRight"}>
			<div className={"productInfoTop"}>
				<img className={"productInfoImg"} src={product.image} alt={"Product Cover"}/>
				<span className={"productName"}>{product.title}</span>
			</div>
			<div className={"productInfoBottom"}>
				<div className={"productInfoItem"}>
					<span className={"productInfoKey"}>ID:</span>
					<span className={"productInfoValue"}>{product._id}</span>
				</div>
				<div className={"productInfoItem"}>
					<span className={"productInfoKey"}>Price:</span>
					<span className={"productInfoValue"}>{product.price}</span>
				</div>
				<div className={"productInfoItem"}>
					<span className={"productInfoKey"}>In Stock:</span>
					<span className={"productInfoValue"}>{product.inStock.toString()}</span>
				</div>
			</div>
		</div>
	);
};

export default ProductTopRight;