import { Request, Response } from 'express';
import { OrderServices } from './order.service';
import orderValidationSchema from './order.validation';

const createOrder = async (req: Request, res: Response): Promise<void> => {
  try {
    const order = req.body;

    const zodParsedData = orderValidationSchema.parse(order);

    const result = await OrderServices.createOrderIntoDB(zodParsedData);

    // return response
    res.status(201).json({
      success: true,
      message: 'Order created successfully',
      data: result,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

const getOrders = async (req: Request, res: Response): Promise<void> => {
  try {
    const email = req.query.email as string;

    const orders = await OrderServices.getOrdersFromDB(email);

    // return response
    res.status(200).json({
      success: true,
      message: 'Orders fetched successfully',
      data: orders,
    });
  } catch (err: any) {
    res.status(500).json({
      success: false,
      message: 'Something went wrong',
      error: err.message,
    });
  }
};

export const OrderControllers = {
  getOrders,
  createOrder,
};
