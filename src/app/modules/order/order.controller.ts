import { Request, Response } from 'express';
import { OrderServices } from './order.service';

const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const orders = await OrderServices.getOrdersFromDB();

    // return response
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Internal server error',
      error: err.message,
    });
  }
};

const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = req.body;
    const result = await OrderServices.createOrderIntoDB(order);

    // return response
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
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

export const OrderControllers = {
  getOrders,
  createOrder,
};
