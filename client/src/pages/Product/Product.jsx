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
import product from "../../assets/images/product3.jpeg";

const Product = () => {
	return (
		<Container>
			<Announcement/>
			<Navbar/>
			<Wrapper>
				<ImageContainer>
					<Image src={product}/>
				</ImageContainer>
				<InfoContainer>
					<Title>RUSH JACKET - MENS</Title>
					<Description>
						Built for big mountains, the Rush Jacket delivers protection and durability without sacrificing
						lightweight, comfortable performance. Made from GORE-TEX PRO with Most Rugged Technology – their
						strongest available – it gives exceptionally durable waterproof, windproof protection, but is
						breathable for comfort on ascents. A helmet compatible StormHood™ provides additional coverage
						with minimal impact on vision, WaterTight™ pit zippers speed ventilation, and articulated
						patterning maximizes mobility.
					</Description>
					<Price>$899.99</Price>
					<FilterContainer>
						<Filter>
							<FilterTitle>Color</FilterTitle>
							<FilterColor color={"black"}/>
							<FilterColor color={"darkblue"}/>
							<FilterColor color={"gray"}/>
						</Filter>
						<Filter>
							<FilterTitle>Size</FilterTitle>
							<FilterSize>
								<FilterSizeOption>XS</FilterSizeOption>
								<FilterSizeOption>S</FilterSizeOption>
								<FilterSizeOption>M</FilterSizeOption>
								<FilterSizeOption>L</FilterSizeOption>
								<FilterSizeOption>XL</FilterSizeOption>
							</FilterSize>
						</Filter>
					</FilterContainer>
					<AddContainer>
						<AmountContainer>
							<Remove/>
							<Amount>1</Amount>
							<Add/>
						</AmountContainer>
						<AddCartButton>ADD TO CART</AddCartButton>
					</AddContainer>
				</InfoContainer>
			</Wrapper>
			<Newsletter/>
			<Footer/>
		</Container>
	);
};

export default Product;