const router = require('express').Router()
const Product = require("../models/Product");
require('dotenv').config()

router.get('/list', async (req, res)=>{
    try{
        const products = await Product.find()
        res.status(200).json({products})
    }catch(error){
        res.status(500).json({msg: "Falha ao listar produtos!"})
    }
})

router.post('/add', async (req, res)=>{
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const img = req.body.img
    const news = req.body.news
    const top = req.body.top
    const category = req.body.category

    const newProduct = new Product({
     name,
     description,
     price,
     img,
     news,
     top,
     category
    })
    try{
        await newProduct.save()
        res.status(200).json({msg: 'Produto cadastrado com sucesso!'});
    } catch (err) {
        res.status(500).json({msg: 'Erro ao cadastrar produto.. Tente novamente...', err});
    }
})

module.exports = router