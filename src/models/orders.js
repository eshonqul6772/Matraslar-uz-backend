const mongoose = require('mongoose');


const orderSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    phone:{
        type: String,
        required: true
    },
    productName:{
        type: String,
        required: true
    },
    count:{
        type: Number,
        required: true
    },
    isActive:{
        type: Boolean,
        default: true
    }

});

module.exports = mongoose.model('Orders', orderSchema);