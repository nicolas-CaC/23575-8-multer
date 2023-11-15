import express from 'express'
import { formRouter, mainRouter } from './src/routes/index.js'


const app = express()
const PORT = 8080

app.use(express.static('public'))
app.use(express.urlencoded({ extended: true }))

app.use('/', mainRouter)
app.use('/', formRouter)

app.listen(PORT, () => console.log(`listening at http://localhost:${PORT}`))