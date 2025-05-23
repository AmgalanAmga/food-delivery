import { Model, Schema, model, models } from "mongoose";

enum FoodOrderStatusEnum {
  PENDING = "PENDING",
  CANCELED = "CANCELED",
  DELIVERED = "DELIVERED",
}

type FoodCategoryModelType = {
  /* Category Identity */
  _id: Schema.Types.ObjectId;
  categoryName: string;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};

type FoodModelType = {
  /* Food Identity */
  _id: Schema.Types.ObjectId;
  foodName: string;

  /* Food Details */
  price: number;
  image: string;
  ingredients: string;

  /* Category Information */
  category: FoodCategoryModelType;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};

export type FoodOrderItemModelType = {
  quantity: number;
  food: FoodModelType;
};

type UserModelType = {
  /* Identity and Authentication Info */
  _id: Schema.Types.ObjectId;
  email: string;
  password: string;

  /* Contact Information */
  address: string;

  /* Role and Permissions */
  role: string;

  /* Order Information */
  orderedFoods: FoodOrderModelType[];

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};

type FoodOrderModelType = {
  /* Order Identity */
  _id: Schema.Types.ObjectId;
  user: UserModelType;

  /* Order Details */
  totalPrice: number;
  foodOrderItems: FoodOrderItemModelType[];

  /* Order Status */
  status: FoodOrderStatusEnum;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};

const FoodOrderItemSchema = new Schema<FoodOrderItemModelType>(
  {
    quantity: { type: Number, required: true },
    food: { type: Schema.Types.ObjectId, ref: "Foods", required: true },
  },
  { _id: false }
);

const FoodOrderSchema = new Schema<FoodOrderModelType>(
  {
    /* Order Identity */
    user: { type: Schema.Types.ObjectId, ref: "User", required: true },

    /* Order Details */
    totalPrice: { type: Number, required: true },
    foodOrderItems: { type: [FoodOrderItemSchema], required: true },

    /* Order Status */
    status: { type: String, enum: Object.values(FoodOrderStatusEnum), default: FoodOrderStatusEnum.PENDING, required: true },
  },
  { timestamps: true }
);

export const FoodOrderModel: Model<FoodOrderModelType> = models["FoodOrders"] || model<FoodOrderModelType>("FoodOrders", FoodOrderSchema);
