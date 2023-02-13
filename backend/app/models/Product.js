const mongoose = require('mongoose')

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        min: 3,
        max: 50,
    },
    description: {
        type: String,
        require: false,
        max: 100,
    },
    price: {
        type: Number,
        require: true,
    },
    img: {
        type: String,
        require: false,
    },
    news: {
        type: Number,
        enum: [1, 2]
    },
    top: {
        type: Number,
        enum: [1, 2]
    },
    category: {
        type: Number,
        enum: [1, 2, 3, 4]
    },
}, { timestamps: true })

module.exports = mongoose.model('products', ProductSchema)