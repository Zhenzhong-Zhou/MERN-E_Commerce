import {Link} from "react-router-dom";
import {FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined} from "@material-ui/icons";
import {Circle, Container, Icon, Image, InfoContainer} from "../../../styles/product";

const Product = ({item}) => {
	return (
		<Container>
			<Circle/>
			<Image src={item.image}/>
			<InfoContainer>
				<Icon>
					<Link to={"/cart"} className={"link"}>
						<ShoppingCartOutlined/>
					</Link>
				</Icon>
				<Icon>
					<Link to={`/product/${item._id}`} className={"link"}>
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