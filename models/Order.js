const mongoose = require("mongoose");

const OrderSchema = new mongoose.Schema({
    useId: { type: String, required:true, unique:true },
    products: [
        {
            productId: {
                type: String,
            },
            quantity: {
                type: Number,
                default: 1
            },
        },
    ],
    amount: { type: Number, required: true},
    address: { type: Object, required: true},
    status: { type: Number, default: "pending"},
}, 
{ timestamps: true }
);

module.exports = mongoose.model("Order", OrderSchema);