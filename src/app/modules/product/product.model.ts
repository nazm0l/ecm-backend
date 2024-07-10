import { Schema, model } from 'mongoose';
import { Product } from './product.interface';

const productSchema = new Schema<Product>({
  name: { type: String, required: true, unique: true },
  description: { type: String },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  tags: { type: [String] },
  variants: [
    {
      type: {
        type: String,
      },
      value: {
        type: String,
      },
    },
  ],
  inventory: {
    quantity: { type: Number, required: true },
    inStock: { type: Boolean, required: true },
  },
  isDeleted: { type: Boolean, required: true },
});

export const ProductModel = model<Product>('Product', productSchema);
