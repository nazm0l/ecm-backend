export type Product = {
  name: string;
  description: string;
  price: number;
  category: string;
  tags: string[];
  variants: {
    type: string;
    value: string;
  }[];
  inventory: {
    quantity: number;
    inStock: boolean;
  };
  isDeleted: boolean;
};
