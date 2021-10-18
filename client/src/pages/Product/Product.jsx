import {useLocation} from "react-router-dom";
import {Add, Remove} from "@material-ui/icons";
import {
	AddCartButton,
	AddContainer, Amount, AmountContainer,
	Container,
	Description, Filter, FilterColor, FilterContainer, FilterSize, FilterSizeOption, FilterTitle,
	Image,
	ImageContainer,
	InfoContainer,
	Price,
	Title,
	Wrapper
} from "../../styles/productPage";
import {Announcement, Footer, Navbar, Newsletter} from "../../components";
import {useEffect, useState} from "react";
import {axiosInstance} from "../../api";

const Product = () => {
	const location = useLocation();
	const id = location.pathname.split("/")[2];
	const [product, setProduct] = useState({});
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState("");
	const [size, setSize] = useState("");

	useEffect(() => {
		const fetchProduct = async () => {
			try {
				const {data} = await axiosInstance.get(`products/find/${id}`);
				setProduct(data);
			} catch (error) {
				console.log(error);
			}
		};
		fetchProduct();
		}, [id]);

	const handleQuantity = (type) => {
	  if (type === "decrease") {
		  quantity > 1 && setQuantity(quantity - 1);
	  } else {
		  setQuantity(quantity + 1);
	  }
	};

	const handleCart= () => {
		// Update Cart

	};

	return (
		<Container>
			<Announcement/>
			<Navbar/>
			<Wrapper>
				<ImageContainer>
					<Image src={product.image}/>
				</ImageContainer>
				<InfoContainer>
					<Title>{product.title}</Title>
					<Description>{product.description}</Description>
					<Price>$ {product.price}</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							{product.color && product.color?.map((color) => ( // two ways to avoid undefined: product.color is true; add ? mark
								<FilterColor color={color} key={color} onClick={() => setColor(color)}/>
							))}
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize onChange={(event => setSize(event.target.value))}>
								{product.size && product.size?.map(size => ( // two ways to avoid undefined: product.color is true; add ? mark
									<FilterSizeOption key={size}>{size}</FilterSizeOption>
								))}
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove onClick={() => handleQuantity("decrease")}/>
							<Amount>{quantity}</Amount>
							<Add onClick={() => handleQuantity("increase")}/>
						</AmountContainer>
						<AddCartButton onClick={handleCart}>ADD TO CART</AddCartButton>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter/>
			<Footer/>
		</Container>
	);
};

export default Product;