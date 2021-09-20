import Order from "../models/order.js";

// CREATE
export const create = async (req, res) => {
	const createOrder = new Order(req.body);
	try {
		const newOrder = await createOrder.save();
		res.status(200).json(newOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};
// UPDATE
export const update = async (req, res) => {
	try {
		const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {$set: req.body}, {new: true});
		res.status(200).json(updatedOrder);
	} catch (error) {
		res.status(500).json(error);
	}
};
// DELETE
export const remove = async (req, res) => {
	try {
		await Order.findByIdAndDelete(req.params.id);
		res.status(200).json("Order has been DELETED!");
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH USER ORDERS
export const fetch_orders = async (req, res) => {
	try {
		const orders = await Order.find({userId: req.params.userId});
		res.status(200).json(orders);
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH ALL ORDERS
export const fetch_all_orders = async (req, res) => {
	try {
		const all_orders = await Order.find();
		res.status(200).json(all_orders);
	} catch (error) {
		res.status(500).json(error);
	}
};
// FETCH MONTHLY INCOME
export const fetch_monthly_income = async (req, res) => {
	const date = new Date();
	const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
	const prevMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
	try {
		const income = await Order.aggregate([
			{$match: {createdAt: {$gte: prevMonth}}},
			{$project: {month: {$month: "createdAt"}, sales: "$amount"}},
			{$group: {_id: "$month", total: {$sum: "$sales"}}}
		]);
		res.status(200).json(income);
	} catch (error) {
		res.status(500).json(error);
	}
};