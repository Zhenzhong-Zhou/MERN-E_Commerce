import {useSelector} from "react-redux";
import {Add, Remove} from "@material-ui/icons";
import {
	Bottom, Button,
	Container,
	Details, Hr,
	Image,
	Info,
	PriceDetail,
	Product, ProductAmount,
	ProductAmountContainer,
	ProductColor,
	ProductDetail,
	ProductId,
	ProductName, ProductPrice,
	ProductSize,
	Summary, SummaryItem, SummaryItemPrice, SummaryItemText, SummaryTitle,
	Title,
	Top,
	TopButton,
	TopText,
	TopTextContainer,
	Wrapper
} from "../../styles/cart";
import {Announcement, Footer, Navbar} from "../../components";
import {Link} from "react-router-dom";

const Cart = () => {
	const cart = useSelector(state => state.cart);
	return (
		<Container>
			<Announcement/>
			<Navbar/>
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<Link to={"/"}>
						<TopButton>CONTINUE SHOPPING</TopButton>
					</Link>
					<TopTextContainer>
						<TopText>Shopping Bag (2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTextContainer>
					<TopButton type={"filled"}>CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						{cart.products.map(product => (
							<Product>
								<ProductDetail>
									<Image src={product.image}/>
									<Details>
										<ProductName><b>Product: </b>{product.title}</ProductName>
										<ProductId><b>ID: </b>{product._id}</ProductId>
										<ProductColor color={product.color}/>
										<ProductSize><b>Size: </b>{product.size}</ProductSize>
									</Details>
								</ProductDetail>
								<PriceDetail>
									<ProductAmountContainer>
										<Add/>
										<ProductAmount>{product.quantity}</ProductAmount>
										<Remove/>
									</ProductAmountContainer>
									<ProductPrice>$ {product.price * product.quantity}</ProductPrice>
								</PriceDetail>
							</Product>
						))}
							<Hr/>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal: </SummaryItemText>
							<SummaryItemPrice>$ {cart.subtotal}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping: </SummaryItemText>
							<SummaryItemPrice>$ 20.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>FREE Shipping: </SummaryItemText>
							<SummaryItemPrice>-$ 20.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type={"total"}>
							<SummaryItemText>Order Total: </SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<Button>CHECKOUT NOW</Button>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer/>
		</Container>
	);
};

export default Cart;