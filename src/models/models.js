import mongoose from 'mongoose';
const Schema = mongoose.Schema;

export const ProductSchema = {
    name: {
        type: String,
        required: 'Enter a product name.'
    },
    description: {
        type: String,
        required: 'Enter a product description'
    },
    category: {
        type: String
    },
    price: {
        type: Number,
        required: 'Enter a price.'
    },
    created_date: {
        type: Date,
        default: Date.now()
    }
}