import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import {Circle, Container, Icon, Image, InfoContainer} from "../../../styles/product";
import {Link} from "react-router-dom";

const Product = ({item}) => {
	return (
		<Container>
			<Circle/>
			<Image src={item.img}/>
			<InfoContainer>
				<Icon>
					<Link to={"/cart"} className={"link"}>
						<ShoppingCartOutlined/>
					</Link>
				</Icon>
				<Icon>
					<Link to={"/products"} className={"link"}>
						<SearchOutlined/>
					</Link>
				</Icon>
				<Icon>
					<FavoriteBorderOutlined/>
				</Icon>
			</InfoContainer>
		</Container>
	);
};

export default Product;