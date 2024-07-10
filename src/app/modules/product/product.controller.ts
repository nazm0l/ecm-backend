import { Request, Response } from 'express';
import { ProductServices } from './product.service';
import productValidationSchema from './product.validation';

const createProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const product = req.body;

    const zodParsedData = productValidationSchema.parse(product);

    const result = await ProductServices.createProductIntoDB(zodParsedData);

    // return response
    res.status(200).json({
      success: true,
      message: 'Product created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
    });
  }
};

const getProducts = async (req: Request, res: Response): Promise<void> => {
  try {
    const searchTerm = req.query.searchTerm as string;
    console.log(searchTerm);
    const products = await ProductServices.getProductsFromDB(searchTerm);

    // return response
    res.status(200).json({
      success: true,
      message: 'Products fetched successfully',
      data: products,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
    });
  }
};

const getSingleProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.productId;
    const product = await ProductServices.getSingleProductFromDB(productId);

    // return response
    res.status(200).json({
      success: true,
      message: 'Product fetched successfully',
      data: product,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
    });
  }
};

const updateProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.productId;
    const product = req.body;
    const result = await ProductServices.updateProductIntoDB(
      productId,
      product
    );

    // return response
    res.status(200).json({
      success: true,
      message: 'Product updated successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
    });
  }
};

const deleteProduct = async (req: Request, res: Response): Promise<void> => {
  try {
    const productId = req.params.productId;
    const result = await ProductServices.deleteProductFromDB(productId);

    // return response
    res.status(200).json({
      success: true,
      message: 'Product deleted successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
    });
  }
};

export const ProductControllers = {
  createProduct,
  getProducts,
  getSingleProduct,
  updateProduct,
  deleteProduct,
};
