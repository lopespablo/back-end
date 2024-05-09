const express = require ('express')
const serve = express()
const produtos = require ("./src/data/produtos.json")

serve.get('/' , (req,res) =>{
    return res.json(produtos)
})

serve.listen(process.env.PORT || 3000, ()=>{
    console.log('servidor estar funcionando')
})