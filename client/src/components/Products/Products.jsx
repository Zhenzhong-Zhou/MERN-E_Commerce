import {useEffect, useState} from "react";
import {Container} from "../../styles/products";
import Product from "./Product/Product";
import {axiosInstance} from "../../api";

const Products = ({category, filters, sort}) => {
	const [products, setProducts] = useState([]);
	const [filteredProducts, setFilteredProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			try {
				const {data} = await axiosInstance.get(category ? `products?categories=${category}` : "products");
				setProducts(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProducts();
	}, [category]);

	useEffect(() => {
		category && setFilteredProducts(
			products.filter((item) =>
				Object.entries(filters).every(([key, value]) =>
					item[key].includes(value)
				)
			)
		);
	}, [products, category, filters]);

	useEffect(() => {
		if (sort === "newest") {
			setFilteredProducts(prevState => [...prevState.sort((a, b) => a.createdAt - b.createdAt)]);
		} else if (sort === "asc") {
			setFilteredProducts(prevState => [...prevState.sort((a, b) => a.price - b.price)]);
		} else {
			setFilteredProducts(prevState => [...prevState.sort((a, b) => b.price - a.price)]);
		}
	}, [sort]);

	return (
		<Container>
			{category ? filteredProducts.map((item) => (
				<Product item={item} key={item._id}/>
			)) : products.slice(0,8).map((item) => <Product item={item} key={item._id}/>)}
		</Container>
	);
};

export default Products;