const express = require ('express')
const serve = express()
const produtos = require ("./src/data/produtos.json")

serve.get('/loja' , (req,res) =>{
    return res.json(produtos)
})

serve.listen(3000, ()=>{
    console.log('servidor estar funcionando')
})