// banco de dados
import express from 'express'

const router = express.Router()

const produtos = [
    {id: 1, nome: 'Mousse'},
    {id: 2, nome: 'Manteiga'}
]

router.get("/", (req, res)=>{
    res.status(200).json(produtos)
})

export default router