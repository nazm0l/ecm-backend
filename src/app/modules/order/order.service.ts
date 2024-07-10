import { Order } from './order.interface';
import { OrderModel } from './order.model';

const getOrdersFromDB = async () => {
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
