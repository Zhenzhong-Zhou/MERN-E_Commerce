import {Container} from "../../styles/cart";
import {Announcement, Footer, Navbar} from "../../components";

const Cart = () => {
	return (
		<Container>
			<Announcement/>
			<Navbar/>
			Cart
			<Footer/>
		</Container>
	);
};

export default Cart;