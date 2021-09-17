import {Container} from "../../styles/categories";
import {categories} from "../../boilerplateData";
import Category from "./Category/Category";

const Categories = () => {
	return (
		<Container>
			{categories.map((item) => (
				<Category item={item}/>
			))}
		</Container>
	);
};

export default Categories;