import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {Link, useHistory} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
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
import {axiosUser} from "../../api";

const STRIPE_KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;

const Cart = () => {
	const cart = useSelector(state => state.cart);
	const history = useHistory();
	const [stripeToken, setStripeToken] = useState(null);

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeRequest = async () => {
			try {
				const {data} = await axiosUser.post("/checkout/payment", {
					tokenId: stripeToken.id,
					amount: 500
				});
				history.push("/success", {data: data});
			} catch (error) {
				console.log(error);
			}
		};
		stripeToken && makeRequest();
	}, [stripeToken, cart.total, history]);

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
						<StripeCheckout name={"E-Commerce"} image={"https://5b0988e595225.cdn.sohucs.com/images/20180319/f8e17b2a585147838a946d41a22b7f79.jpg"}
						                billingAddress shippingAddress description={`Your total is $${cart.total}.`} amount={cart.total * 10000} token={onToken} stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
							<button style={{border: "none", width: 120, height: 50, borderRadius: "20px", backgroundColor: "black", color: "white", fontWeight: 600, cursor: "pointer"}}>
								CHECKOUT NOW
							</button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
			<Footer/>
		</Container>
	);
};

export default Cart;