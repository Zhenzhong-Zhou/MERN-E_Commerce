import {Container, Filter, FilterContainer, FilterText, Option, Select, Title} from "../../styles/categoryPage";
import {Announcement, Footer, Navbar, Newsletter, Products} from "../../components";

const Category = () => {
	return (
		<Container>
			<Announcement/>
			<Navbar/>
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products: </FilterText>
					<Select>
						<Option disabled defaultValue={"Color"}>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select>
						<Option disabled defaultValue={"Size"}>
							Size
						</Option>
						<Option>XS</Option>
						<Option>S</Option>
						<Option>M</Option>
						<Option>L</Option>
						<Option>XL</Option>
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select>
						<Option defaultValue={"Newest"}>Newest</Option>
						<Option>Price (asc)</Option>
						<Option>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products/>
			<Newsletter/>
			<Footer/>
		</Container>
	);
};

export default Category;