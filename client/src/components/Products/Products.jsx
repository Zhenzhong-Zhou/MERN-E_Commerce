import {Container} from "../../styles/products";
import Product from "./Product/Product";
import {popularProducts} from "../../boilerplateData";

const Products = () => {
	return (
		<Container>
			{popularProducts.map((item) => (
				<Product item={item} key={item.id}/>
			))}
		</Container>
	);
};

export default Products;