import {Link} from "react-router-dom";
import {Button, Container, Image, InfoContainer, Title} from "../../../styles/category";

const Category = ({item}) => {
	return (
		<Container>
			<Link to={`/categories/${item.categories[0]}`} className={"link"}>
				<Image src={item.image}/>
				<InfoContainer>
					<Title>{item.title}</Title>
					<Button>SHOP NOW</Button>
				</InfoContainer>
			</Link>
		</Container>
	);
};

export default Category;