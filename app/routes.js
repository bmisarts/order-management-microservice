import createOrder from './controllers/order.create.js';
import listOrder from './controllers/order.list.js';
import validateOrder from './controllers/order.valdate.js';
import express from 'express';

const router = express.Router();


//declaration des routes
router.post("/create", createOrder);
router.post("/validate", validateOrder);
router.get("/pending-list", listOrder);
  
//Exportation des routes
export default router;