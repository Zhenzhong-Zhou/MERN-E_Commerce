import "./styles.css";

const Button = ({type}) => {
	return (
		<button className={`widgetLgButton + ${type}`}>{type}</button>
	);
};

export default Button;