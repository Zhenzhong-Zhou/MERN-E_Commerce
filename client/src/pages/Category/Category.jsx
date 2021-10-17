import {useState} from "react";
import {useLocation} from "react-router-dom";
import {Container, Filter, FilterContainer, FilterText, Option, Select, Title} from "../../styles/categoryPage";
import {Announcement, Footer, Navbar, Newsletter, Products} from "../../components";

const Category = () => {
	const location = useLocation();
	const category = location.pathname.split("/")[2];
	const [filters, setFilter] = useState({});
	const [sort, setSort] = useState("newest");

	const handleFilters = (e) => {
		const value = e.target.value;
		setFilter({
			...filters, [e.target.name]: value
		});
	}

	return (
		<Container>
			<Announcement/>
			<Navbar/>
			<Title>Dresses</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products: </FilterText>
					<Select name={"color"} onChange={handleFilters}>
						<Option disabled>
							Color
						</Option>
						<Option>White</Option>
						<Option>Black</Option>
						<Option>Red</Option>
						<Option>Blue</Option>
						<Option>Yellow</Option>
						<Option>Green</Option>
					</Select>
					<Select name={"size"} onChange={handleFilters}>
						<Option disabled>
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
					<Select onChange={event => setSort(event.target.value)}>
						<Option value={"newest"}>Newest</Option>
						<Option value={"asc"}>Price (asc)</Option>
						<Option value={"desc"}>Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Products category={category} filters={filters} sort={sort}/>
			<Newsletter/>
			<Footer/>
		</Container>
	);
};

export default Category;