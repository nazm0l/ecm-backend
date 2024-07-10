import { Product } from './product.interface';
import { ProductModel } from './product.model';

const createProductIntoDB = async (product: Product) => {
  const result = await ProductModel.create(product);
  return result;
};

const getProductsFromDB = async (searchTerm: string) => {
  if (searchTerm) {
    const products = await ProductModel.find({
      name: { $regex: searchTerm, $options: 'i' },
      isDeleted: false,
    });
    return products;
  }

  const products = await ProductModel.find({ isDeleted: false });
  return products;
};

const getSingleProductFromDB = async (productId: string) => {
  const product = await ProductModel.findById(productId);
  return product;
};

const updateProductIntoDB = async (productId: string, product: Product) => {
  const result = await ProductModel.findByIdAndUpdate(productId, product);
  return result;
};

const deleteProductFromDB = async (productId: string) => {
  const result = await ProductModel.findByIdAndUpdate(productId, {
    isDeleted: true,
  });
  return result;
};

export const ProductServices = {
  createProductIntoDB,
  getProductsFromDB,
  getSingleProductFromDB,
  updateProductIntoDB,
  deleteProductFromDB,
};
