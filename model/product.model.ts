import { Document, model, Schema } from "mongoose";

interface productData {
  prodName: string;
  cart: [];
  chair: string;
  price: string;
  quantity: number;
}

interface dataSchema extends productData, Document {}

const productSchema = new Schema(
  {
    prodName: {
      type: String,
      required: [true],
    },
    cart: {
      type: Array,
    },
    price: {
      type: String,
    },
    quantity: {
      type: Number,
    },
  },
  {
    timestamps: true,
  }
);

const productData = model<dataSchema>("product", productSchema);

export default productData;
