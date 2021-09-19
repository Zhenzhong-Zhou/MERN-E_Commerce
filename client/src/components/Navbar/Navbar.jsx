import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, Wrapper} from "../../styles/navbar.js";

const Navbar = () => {
	return (
		<Container>
			<Wrapper>
				<Left>
					<Language>
						EN
					</Language>
					<SearchContainer>
						<Input placeholder={"Search"}/>
						<Search style={{color: "gray", fontSize: "16px"}}/>
					</SearchContainer>
				</Left>
				<Center><Logo>E-Commerce</Logo></Center>
				<Right>
					<MenuItem>REGISTER</MenuItem>
					<MenuItem>SIGN IN</MenuItem>
					<MenuItem>
						<Badge badgeContent={4} color={"primary"}>
							<ShoppingCartOutlined/>
						</Badge>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;