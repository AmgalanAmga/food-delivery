import { Model, Schema, model, models } from "mongoose";

export type FoodCategoryModelType = {
  /* Category Identity */
  _id: Schema.Types.ObjectId;
  categoryName: string;

  /* Timestamps */
  createdAt: Date;
  updatedAt: Date;
};

const FoodCategorySchema = new Schema<FoodCategoryModelType>(
  {
    categoryName: { type: String, required: true },
  },
  { timestamps: true }
);

export const FoodCategoryModel: Model<FoodCategoryModelType> = models["FoodCategories"] || model<FoodCategoryModelType>("FoodCategories", FoodCategorySchema);
