import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import "./styles.css";

const Chart = ({title, data, dataKey, grid}) => {
	return (
		<div className={"chart"}>
			<h3 className={"chartTitle"}>{title}</h3>
			<ResponsiveContainer width={"100%"} aspect={4}>
				<LineChart data={data}>
					<XAxis dataKey={"month"} stroke={"#5550bd"}/>
					<Line type={"monotone"} dataKey={dataKey} stroke={"#5550bd"}/>
					<YAxis dataKey={""}/>
					<Tooltip/>
					{grid && <CartesianGrid stroke={"#e0dfdf"} strokeDasharray={"5 5"}/>}
				</LineChart>
			</ResponsiveContainer>
		</div>
	);
};

export default Chart;