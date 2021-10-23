import {Publish} from "@material-ui/icons";
import "./styles.css";

const ProductForm = ({product}) => {
	return (
		<form className={"productForm"}>
			<div className={"productFormLeft"}>
				<label>Product Title</label>
				<input type={"text"} placeholder={product.title}/>
				<label>Product Description</label>
				<textarea placeholder={product.description}/>
				<label>Product Price</label>
				<input type={"text"} placeholder={product.price}/>
				<label>In Stock</label>
				<select name={"inStock"} id={"idStock"}>
					<option value={"true"}>Yes</option>
					<option value={"false"}>No</option>
				</select>
			</div>
			<div className={"productFormRight"}>
				<div className={"productUpload"}>
					<img src={product.image} alt={"Product Cover"} className={"productUploadImg"}/>
					<label htmlFor={"file"}>
						<Publish/>
					</label>
					<input type={"file"} id={"file"} style={{display: "none"}}/>
				</div>
				<button className={"productFormButton"}>Update</button>
			</div>
		</form>
	);
};

export default ProductForm;