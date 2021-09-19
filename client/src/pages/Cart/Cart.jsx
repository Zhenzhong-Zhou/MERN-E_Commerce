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
import winter_jacket from "../../assets/images/winter_jacket.jpg";

const Cart = () => {
	return (
		<Container>
			<Announcement/>
			<Navbar/>
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<TopButton>CONTINUE SHOPPING</TopButton>
					<TopTextContainer>
						<TopText>Shopping Bag (2)</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTextContainer>
					<TopButton type={"filled"}>CHECKOUT NOW</TopButton>
				</Top>
				<Bottom>
					<Info>
						<Product>
							<ProductDetail>
								<Image src={winter_jacket}/>
								<Details>
									<ProductName><b>Product: </b>THORSEN PARKA - MENS</ProductName>
									<ProductId><b>ID: </b>19717F21</ProductId>
									<ProductColor color={"black"}/>
									<ProductSize><b>Size: </b>XL</ProductSize>
								</Details>
							</ProductDetail>
							<PriceDetail>
								<ProductAmountContainer>
									<Add/>
									<ProductAmount>2</ProductAmount>
									<Remove/>
								</ProductAmountContainer>
								<ProductPrice>$ 999.99</ProductPrice>
							</PriceDetail>
						</Product>
						<Hr/>
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal: </SummaryItemText>
							<SummaryItemPrice>$ 1010.10</SummaryItemPrice>
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
							<SummaryItemPrice>$ 1010.10</SummaryItemPrice>
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