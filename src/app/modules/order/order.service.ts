import { OrderModel } from './order.model';

const getOrdersFromDB = async () => {
  const orders = await OrderModel.find();
  return orders;
};

export const OrderServices = {
  getOrdersFromDB,
};
