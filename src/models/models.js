import mongoose from 'mongoose';
const { Schema } = mongoose;

const Schema = {
    name: String,
    description: { type: String, required: true },
    category: String,
    price: Number,
    created_date: { type: Date, default: DateTime.Now }
}