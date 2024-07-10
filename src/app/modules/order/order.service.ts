import { Order } from './order.interface';
import { OrderModel } from './order.model';

const getOrdersFromDB = async (email: string) => {
  if (email) {
    const orders = await OrderModel.find({ email });
    return orders;
  }
  const orders = await OrderModel.find();
  return orders;
};

const createOrderIntoDB = async (order: Order) => {
  const result = await OrderModel.create(order);
  return result;
};

export const OrderServices = {
  getOrdersFromDB,
  createOrderIntoDB,
};
