import {Publish} from "@material-ui/icons";
import "./styles.css";
import airpods from "../../../assets/images/airpods.jpeg";

const ProductForm = () => {
	return (
		<form className={"productForm"}>
			<div className={"productFormLeft"}>
				<label>Product Name</label>
				<input type={"text"} placeholder={"Apple Airpods"}/>
				<label>In Stock</label>
				<select name={"inStock"} id={"idStock"}>
					<option value={"yes"}>Yes</option>
					<option value={"no"}>No</option>
				</select>
				<label>Active</label>
				<select name={"active"} id={"active"}>
					<option value={"yes"}>Yes</option>
					<option value={"no"}>No</option>
				</select>
			</div>
			<div className={"productFormRight"}>
				<div className={"productUpload"}>
					<img src={airpods} alt={"Product Cover"} className={"productUploadImg"}/>
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