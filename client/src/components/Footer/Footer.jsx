import {
	Center, ContactItem,
	Container,
	Description,
	Left, List, ListItem,
	Logo, Payment,
	Right,
	SocialContainer,
	SocialIcon,
	Title
} from "../../styles/footer";
import {Facebook, Instagram, MailOutline, Phone, Pinterest, Room, Twitter} from "@material-ui/icons";

const Footer = () => {
	return (
		<Container>
			<Left>
				<Logo>E_Commerce</Logo>
				<Description>
					There are many variations of passages of Lorem Ipsum available, but
					the majority have suffered alteration in some form, by injected
					humour, or randomised words which don’t look even slightly believable.
				</Description>
				<SocialContainer>
					<SocialIcon color={"3B5999"}>
						<Facebook/>
					</SocialIcon>
					<SocialIcon color={"E4405F"}>
						<Instagram/>
					</SocialIcon>
					<SocialIcon color={"55ACEE"}>
						<Twitter/>
					</SocialIcon>
					<SocialIcon color={"E60023"}>
						<Pinterest/>
					</SocialIcon>
				</SocialContainer>
			</Left>
			<Center>
				<Title>Useful Links</Title>
				<List>
					<ListItem>Home</ListItem>
					<ListItem>Cart</ListItem>
					<ListItem>Man Fashion</ListItem>
					<ListItem>Woman Fashion</ListItem>
					<ListItem>Accessories</ListItem>
					<ListItem>My Account</ListItem>
					<ListItem>Order Tracking</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Wishlist</ListItem>
					<ListItem>Terms</ListItem>
				</List>
			</Center>
			<Right>
				<Title>Contact</Title>
				<ContactItem>
					<Room style={{marginRight: "10px"}}/>
					110 Right Street, Right Place, Wrong Province
				</ContactItem>
				<ContactItem>
					<Phone style={{marginRight: "10px"}}/>
					+1 234 567 8900
				</ContactItem>
				<ContactItem>
					<MailOutline style={{marginRight: "10px"}}/>
					contact@gmail.com
				</ContactItem>
				<Payment src={"https://i.ibb.co/Qfvn4z6/payment.png"}/>
			</Right>
		</Container>
	);
};

export default Footer;