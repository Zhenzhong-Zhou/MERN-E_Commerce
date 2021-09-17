import {ArrowLeftOutlined, ArrowRightOutlined} from "@material-ui/icons";
import {
	Arrow, Button,
	Container, Description,
	Image,
	ImageContainer,
	InfoContainer,
	SlideContainer,
	Title,
	Wrapper
} from "../../styles/slider";
import product from "../../assets/images/product.jpeg";

const Slider = () => {
	return (
		<Container>
			<Arrow direction={"left"}>
				<ArrowLeftOutlined/>
			</Arrow>
			<Wrapper>
				<SlideContainer>
					<ImageContainer>
						<Image src={product}/>
					</ImageContainer>
					<InfoContainer>
						<Title>SUMMER SALE</Title>
						<Description>DON'T COMPROMISE ON STYLE! GET FLAT 30% OFF FOR NEW ARRIVALS.</Description>
						<Button>SHOP NOW</Button>
					</InfoContainer>
				</SlideContainer>
			</Wrapper>
			<Arrow direction={"right"}>
				<ArrowRightOutlined/>
			</Arrow>
		</Container>
	);
};

export default Slider;