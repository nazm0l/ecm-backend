import { ProductModel } from '../product/product.model';
import { Order } from './order.interface';
import { OrderModel } from './order.model';

const createOrderIntoDB = async (order: Order) => {
  const product = await ProductModel.findById(order.productId);

  if (!product) {
    throw new Error('Order not found');
  }

  if (product.inventory.quantity < order.quantity) {
    throw new Error('Insufficient quantity available in inventory');
  }

  // update inventory
  product.inventory.quantity -= order.quantity;
  product.inventory.inStock = product.inventory.quantity > 0;

  await product.save();

  // create order
  const result = await OrderModel.create(order);
  return result;
};

const getOrdersFromDB = async (email: string) => {
  if (email) {
    const orders = await OrderModel.find({ email });
    return orders;
  }
  const orders = await OrderModel.find();
  return orders;
};

export const OrderServices = {
  getOrdersFromDB,
  createOrderIntoDB,
};
