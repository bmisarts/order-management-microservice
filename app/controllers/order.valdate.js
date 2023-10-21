// import * as order from "../controllers/order.controller.js";
import firebase from '../../config/firebase.js';
import express from "express";

const router = express.Router();
var database = firebase.firestore();


//Validate order and make it ready for the vendor and drivers
let validateOrder = async (req, res) => {
    let order_id = req.body.id;
    try {
        database.collection('pending_vendor_orders').where('id', "==", order_id)
        .get().then(async function (snapshots) {
            if (snapshots && snapshots.docs.length > 0) {
                var order = snapshots.docs[0].data();
                await database.collection('vendor_orders').doc(order_id).set(order).then();
                await database.collection('pending_vendor_orders').doc(order_id).delete().then(
                    res.status(200).send('Order placed sucessfuly')
                );
            }
            else{
                res.status(400).send('Order not found, maybe the order not exists or have been deleted')
            }
        });
    } catch (error) {
        res.status(400).send(error.message);
    }
};

export default validateOrder;