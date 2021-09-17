import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import {Circle, Container, Icon, Image, InfoContainer} from "../../../styles/product";

const Product = ({item}) => {
	return (
		<Container>
			<Circle/>
			<Image src={item.img}/>
			<InfoContainer>
				<Icon>
					<ShoppingCartOutlined/>
				</Icon>
				<Icon>
					<SearchOutlined/>
				</Icon>
				<Icon>
					<FavoriteBorderOutlined/>
				</Icon>
			</InfoContainer>
		</Container>
	);
};

export default Product;