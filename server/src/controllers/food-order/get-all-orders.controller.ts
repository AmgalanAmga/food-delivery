import { Request, Response } from "express";
import { FoodOrderModel } from "../../models/food-order.model";

export const getAllOrdersController = async (req: Request, res: Response) => {
  const { limit = 20, page = 0 } = req.query;

  const allOrders = await FoodOrderModel.find()
    .populate("user")
    .populate({ path: "foodOrderItems.food", model: "Foods" })
    .limit(Number(limit))
    .skip(Number(+limit * +page));

  const total = await FoodOrderModel.countDocuments();

  res.status(200).send({ allOrders, total });
};
