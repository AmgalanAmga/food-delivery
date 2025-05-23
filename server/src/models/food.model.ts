import { Model, Schema, model, models } from "mongoose";

type FoodModelType = {
  /* Food Identity */
  _id: Schema.Types.ObjectId;
  foodName: string;

  /* Food Details */
  price: number;
  image: string;
  ingredients: string;

  /* Category Information */
  category: Schema.Types.ObjectId;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};

const FoodSchema = new Schema<FoodModelType>(
  {
    /* Food Identity */
    foodName: { type: String, required: true },

    /* Food Details */
    price: { type: Number, required: true },
    image: { type: String, required: true },
    ingredients: { type: String, required: true },

    /* Category Information */
    category: { type: Schema.Types.ObjectId, ref: "FoodCategories", required: true },
  },
  { timestamps: true }
);

export const FoodModel: Model<FoodModelType> = models["Foods"] || model<FoodModelType>("Foods", FoodSchema);
