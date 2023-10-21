// import * as order from "../controllers/order.controller.js";
import firebase from '../../config/firebase.js';
import express from "express";

const router = express.Router();
var database = firebase.firestore();


let listOrder = async (req, res) => {
    try {
      await database.collection('pending_vendor_orders').get().then(async function (snapshots) {
        var orders = snapshots.docs;
        var ex_orders = [];
  
        if (orders.empty) {
          res.status(400).send('No order found');
        } else {
          orders.forEach((doc) => {
            ex_orders.push(doc.data());
          });
  
          res.status(200).send(ex_orders);
        }
      })
    } catch (error) {
      res.status(400).send(error.message);
    }
};

export default listOrder;