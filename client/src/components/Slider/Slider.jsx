import {useState} from "react";
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
} from "../../styles/slider.js";
import {sliderItems} from "../../boilerplateData";

const Slider = () => {
	const [slideIndex, setSlideIndex] = useState(0);

	const handleClick = (direction) => {
		if (direction === "left") {
			setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2);
		} else {
			setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0);
		}
	};

	return (
		<Container>
			<Arrow direction={"left"} onClick={() => handleClick("left")}>
				<ArrowLeftOutlined/>
			</Arrow>
			<Wrapper slideIndex={slideIndex}>
				{sliderItems.map((item) => (
					<SlideContainer bg={item.bg} key={item.id}>
						<ImageContainer>
							<Image src={item.img}/>
						</ImageContainer>
						<InfoContainer>
							<Title>{item.title}</Title>
							<Description>{item.desc}</Description>
							<Button>SHOP NOW</Button>
						</InfoContainer>
					</SlideContainer>
				))}
			</Wrapper>
			<Arrow direction={"right"} onClick={() => handleClick("right")}>
				<ArrowRightOutlined/>
			</Arrow>
		</Container>
	);
};

export default Slider;