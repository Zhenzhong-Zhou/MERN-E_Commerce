import {Button, Container, Image, InfoContainer, Title} from "../../../styles/category";

const Category = ({item}) => {
	return (
		<Container>
			<Image src={item.img}/>
			<InfoContainer>
				<Title>{item.title}</Title>
				<Button>SHOP NOW</Button>
			</InfoContainer>
		</Container>
	);
};

export default Category;