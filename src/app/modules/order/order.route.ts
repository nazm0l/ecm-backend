import express from 'express';
import { OrderControllers } from './order.controller';

const router = express.Router();

router.get('/', OrderControllers.getOrders);
router.post('/create-order', OrderControllers.createOrder);

export const OrderRoutes = router;
