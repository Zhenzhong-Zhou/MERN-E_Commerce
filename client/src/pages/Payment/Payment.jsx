import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import StripeCheckout from "react-stripe-checkout";
import {axiosInstance} from "../../api";

const Payment = () => {
	const [stripeToken, setStripeToken] = useState(null);
	const history = useHistory();

	const onToken = (token) => {
		setStripeToken(token);
	};

	useEffect(() => {
		const makeReq = async () => {
			try {
				const {data} = await axiosInstance.post("checkout/payment", {
					tokenId: stripeToken.id,
					amount: 10000
				});
				console.log(data);
				history.push("/success", {data});
			} catch (error) {
				console.log(error);
			}
		};
		stripeToken && makeReq();
	}, [stripeToken, history]);

	return (
		<div style={{height: "100vh", display: "flex", alignItems: "center", justifyContent: "center"}}>
			{stripeToken ? (<span>Processing. Please wait...</span>) : (
				<StripeCheckout name={"E-Commerce"} image={"https://5b0988e595225.cdn.sohucs.com/images/20180319/f8e17b2a585147838a946d41a22b7f79.jpg"}
				                billingAddress shippingAddress description={"Your total is $100."} amount={10000} token={onToken} stripeKey={process.env.REACT_APP_STRIPE_PUBLIC_KEY}>
					<button style={{border: "none", width: 120, height: 50, borderRadius: "20px", backgroundColor: "black", color: "white", fontWeight: 600, cursor: "pointer"}}>
						Pay Now
					</button>
				</StripeCheckout>
			)}
		</div>
	);
};

export default Payment;