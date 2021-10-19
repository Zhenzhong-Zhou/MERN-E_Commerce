import {useEffect, useState} from "react";
import {Container} from "../../styles/categories";
import Category from "./Category/Category";
import {axiosInstance} from "../../api";

const Categories = () => {
	const [categories, setCategories] = useState([]);

	useEffect(() => {
		const fetchCategories = async () => {
			try {
				const {data} = await axiosInstance.get("products");
				setCategories(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchCategories();
	}, []);

	return (
		<Container>
			{categories.slice(0,3).map((item) => (
				<Category item={item} key={item._id}/>
			))}
		</Container>
	);
};

export default Categories;