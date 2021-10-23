import {useState} from "react";
import {useDispatch} from "react-redux";
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./styles.css";
import app from "../../config/firebase";
import {createProducts} from "../../redux/api";

const NewProduct = () => {
	const [inputs, setInputs] = useState({});
	const [file, setFile] = useState(null);
	const [category, setCategory] = useState([]);
	const dispatch = useDispatch()

	const handleChange = (e) => {
		setInputs(prevState => {
			return {...prevState, [e.target.name]: e.target.value};
		});
	};

	const handleCategory = (e) => {
		setCategory(e.target.value.split(","));
	};

	const handleClick = (e) => {
		e.preventDefault();
		const fileName = new Date().getTime() + file.name;
		const storage = getStorage(app);
		const storageRef = ref(storage, fileName);
		const uploadTask = uploadBytesResumable(storageRef, file);

		uploadTask.on('state_changed',
			(snapshot) => {
				const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
				console.log('Upload is ' + progress + '% done');
				switch (snapshot.state) {
					case 'paused':
						console.log('Upload is paused');
						break;
					case 'running':
						console.log('Upload is running');
						break;
					default:
				}
			},
			(error) => {
				console.log(error);
			},
			() => {
				getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
					const product = {...inputs, image: downloadURL, categories: category};
					createProducts(product, dispatch);
				});
			}
		);
	};

	return (
		<div className={"newProduct"}>
			<h1 className={"newProductTitle"}>New Product</h1>
			<form className={"newProductForm"}>
				<div className={"newProductItem"}>
					<label>Image</label>
					<input type={"file"} id={"file"} onChange={event => setFile(event.target.files[0])}/>
				</div>
				<div className={"newProductItem"}>
					<label>Title</label>
					<input name={"title"} type={"text"} placeholder={"Apple Airpods"} onChange={handleChange}/>
				</div>
				<div className={"newProductItem"}>
					<label>Description</label>
					<input name={"description"} type={"text"} placeholder={"Apple Airpods"} onChange={handleChange}/>
				</div>
				<div className={"newProductItem"}>
					<label>Price</label>
					<input name={"price"} type={"number"} placeholder={"Apple Airpods"} onChange={handleChange}/>
				</div>
				<div className={"newProductItem"}>
					<label>Category</label>
					<input name={"category"} type={"text"} placeholder={"Apple Airpods"}  onChange={handleCategory}/>
				</div>
				<div className={"newProductItem"}>
					<label>In Stock</label>
					<select name={"inStock"} onChange={handleChange}>
						<option value={"true"}>Yes</option>
						<option value={"false"}>No</option>
					</select>
				</div>
				<button onClick={handleClick} className={"newProductButton"}>Create</button>
			</form>
		</div>
	);
};

export default NewProduct;