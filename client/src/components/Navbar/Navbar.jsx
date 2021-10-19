import {Link} from "react-router-dom";
import {useSelector} from "react-redux";
import {Search, ShoppingCartOutlined} from "@material-ui/icons";
import {Badge} from "@material-ui/core";
import {Center, Container, Input, Language, Left, Logo, MenuItem, Right, SearchContainer, Wrapper} from "../../styles/navbar.js";

const Navbar = () => {
	const user = useSelector(state => state.user.currentUser);
	const quantity = useSelector(state => state.cart.quantity);

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
					{!user &&
						<>
							<Link to={"/register"} className={"link"}>
								<MenuItem>REGISTER</MenuItem>
							</Link>
							<Link to={"/login"} className={"link"}>
								<MenuItem>SIGN IN</MenuItem>
							</Link>
						</>
					}
					{user &&
						<>
							<span>{user.username} </span>
						</>
					}
					<Link to={"/cart"} className={"link"}>
						<MenuItem>
							<Badge badgeContent={quantity} color={"primary"}>
								<ShoppingCartOutlined/>
							</Badge>
						</MenuItem>
					</Link>
				</Right>
			</Wrapper>
		</Container>
	);
};

export default Navbar;