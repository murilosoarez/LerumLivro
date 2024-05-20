const express = require('express')
const database = require('./db/database')
const cors = require('cors')

const db = database()

const register = express.Router()
const login = express.Router()

register.post('/', async (req, res) => {
    let data = req.body
    db.createColumn(data, `INSERT INTO userData (username, email, senha) VALUES ($1, $2, $3)`)
    return res.json({
        error: false, 
        message: 'Cadastrado com sucesso!',
        formData: data
    })
})

login.post('/', async (req, res) => {

    let outcome = false 

    let data = req.body 
    let response = await db.readColumn('SELECT username, senha FROM userData')

    response.rows.forEach((row) => {
        if (row.username == data.user && row.senha == data.password) {
            outcome = true 
        }
    })

    let text = outcome ? 'Login bem sucedido' : 'Login mal sucedido'

    return res.json({
        error: outcome, 
        message: text,
        formData: data
    })

})

app = express()

app.use(cors());
app.use(express.json());

app.use('/register', register)
app.use('/login', login)


app.listen('8080', () => {
    db.createTable()
    console.log('Servidor executando')
})