import {Container} from "../../styles/productPage";
import {Announcement, Footer, Navbar, Newsletter} from "../../components";

const Product = () => {
	return (
		<Container>
			<Announcement/>
			<Navbar/>
			<Newsletter/>
			<Footer/>
		</Container>
	);
};

export default Product;