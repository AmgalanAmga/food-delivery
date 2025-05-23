import { Request, Response } from "express";
import { FoodOrderModel } from "../../models/food-order.model";

export const createNewOrderController = async (req: Request, res: Response) => {
  const body = req.body;

  const newOrder = await FoodOrderModel.create(body);

  res.status(201).send(newOrder);
};
