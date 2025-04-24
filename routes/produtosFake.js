app.use("/produtos". produtosRouter)

import express from 'express'

const router = express.Router()

const produtos = [

    {id: 1, nome: 'Mousse', preço:'8'},
    {id: 2, nome: 'Manteiga',preço: '10'}
]

router.get("/", (req, res)=>{
    res.status(200).json(produtos)
})


router.post("/adicionando", (req, res)=>{
    const {nome, preço } = req.body
    const novoProduto ={
        id:produtos[produtos.length -1 ].id + 1,
        nome, 
        preço
    }

produtos.push(novoProduto)
res.status(201).json(produtos)
})

router.put("/atualizando/:id", (req,  res)=>{
    const { id } = req.params
    const { novoNome, novoPreço } =req.body
    const { index } = produtos.findIndex((produto)=>{
        return produto.id = id
    }) 
    if ( index = -1 ){
        return res.status(404).json({mrnsagem: "Produto não encontrado! "})
    }
    produto.splice(index, 1)
    res.json(produto)
})

router.get("/exibindo/:id", (req, res)=>{
    const { id } = req.params
    const produtos = produtos.find((produto)=>{
        return produto.d == id
    })
    res.send(produtos)
})

export default router 
