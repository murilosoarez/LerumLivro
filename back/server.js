const express = require('express')
const database = require('./db/database')
const cors = require('cors')

const db = database()

register = express.Router()

register.post('/', async (req, res) => {
    let data = req.body
    db.createColumn(data, `INSERT INTO userData (username, email, senha) VALUES ($1, $2, $3)`)
    return res.json({
        error: false, 
        message: 'Cadastrado com sucesso!',
        formData: data
    })
})

app = express()

app.use(cors());
app.use(express.json());

app.use('/register', register)

app.listen('8080', () => {
    db.createTable()
    console.log('Servidor executando')
})