import Product from "../models/product.model.js";
import mongoose from "mongoose";
export const getProducts = async(req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({success: true, products});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};
export const createProduct = async(req, res) => {
    const product = req.body;
    if(!product.name || !product.price || !product.image) {
        return res.status(400).json({success: false,message: "All fields are required"});
    }
    const newProduct = new Product(product);
     try {
        await newProduct.save();
        res.status(201).json({success: true, product: newProduct});
     } catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: "Server Error"});
     }
};

export const updateProduct = async(req, res) => {
    const {id} = req.params;
    const product = req.body;
    
    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, {new: true});
        res.status(200).json({success: true, data: updatedProduct});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: "Server Error"});
    }
};

export const deleteProduct = async(req, res) => {
    const {id} = req.params;

    try {
        await Product.findByIdAndDelete(id);
        res.status(200).json({success: true, message: "Product deleted successfully"});
    } catch (error) {
        console.error(error.message);
        res.status(500).json({success: false, message: "Product not found"});
    }
};