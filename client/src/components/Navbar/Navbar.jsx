import {Link} from "react-router-dom";
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
				<Link to={"/"} className={"link"}>
					<Center><Logo>E-Commerce</Logo></Center>
				</Link>
				<Right>
					<Link to={"/register"} className={"link"}>
						<MenuItem>REGISTER</MenuItem>
					</Link>
					<Link to={"/login"} className={"link"}>
						<MenuItem>SIGN IN</MenuItem>
					</Link>
					<MenuItem>
						<Link to={"/cart"} className={"link"}>
							<Badge badgeContent={4} color={"primary"}>
								<ShoppingCartOutlined/>
							</Badge>
						</Link>
					</MenuItem>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;