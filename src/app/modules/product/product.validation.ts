import { z } from 'zod';

const variantSchema = z.object({
  type: z.string(),
  value: z.string(),
});

const inventorySchema = z.object({
  quantity: z
    .number()
    .int()
    .positive({ message: 'Quantity must be a positive integer' }),
  inStock: z.boolean(),
});

const productValidationSchema = z.object({
  name: z.string().min(3, { message: 'Name must be at least 3 characters' }),
  description: z.string(),
  price: z.number().positive({ message: 'Price must be a positive number' }),
  category: z
    .string()
    .min(3, { message: 'Category must be at least 3 characters' }),
  tags: z.array(z.string()),
  variants: z.array(variantSchema),
  inventory: inventorySchema,
  isDeleted: z.boolean(),
});

export default productValidationSchema;
