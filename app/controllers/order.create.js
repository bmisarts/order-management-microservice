// import * as order from "../controllers/order.controller.js";
import firebase from '../../config/firebase.js';
import express from "express";

const router = express.Router();
var database = firebase.firestore();
  
//Create a pending order 
let createOrder = async (req, res) => {
    let order = req.body;
    // return res.status(200).send(order)
    try {
        await database.collection('pending_vendor_orders').doc(order.id).set(order).then(
            res.status(200).send('Order placed with status pending')
        );
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export default createOrder;