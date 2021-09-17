import {Announcement, Categories, Navbar, Slider} from "../../components";

const Home = () => {
	return (
		<div>
			<Announcement/>
			Homepage
			<Navbar/>
			<Slider/>
			<Categories/>
		</div>
	);
};

export default Home;