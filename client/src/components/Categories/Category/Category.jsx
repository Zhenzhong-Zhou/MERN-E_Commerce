import {Link} from "react-router-dom";
import {Button, Container, Image, InfoContainer, Title} from "../../../styles/category";

const Category = ({item}) => {
	return (
		<Container>
			<Image src={item.img}/>
			<InfoContainer>
				<Title>{item.title}</Title>
				<Link to={`/categories/${item.category}`} className={"link"}>
					<Button>SHOP NOW</Button>
				</Link>
			</InfoContainer>
		</Container>
	);
};

export default Category;