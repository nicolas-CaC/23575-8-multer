import express from 'express'
import { uploadMiddleware } from './../middlewares/index.js'


export const mainRouter = express.Router()


mainRouter.post('/', uploadMiddleware.single('imagen'), (req, res) => {
    res.send('SUBIDO')
})