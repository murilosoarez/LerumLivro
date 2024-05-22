const express = require('express')
const database = require('./db/database')
const cors = require('cors')
const session = require('express-session')

const dotenv = require("dotenv").config()

const db = database()

const register = express.Router()
const login = express.Router()

app = express()
app.use(
    session({
    'secret': process.env.COOKIE_SECRET, 
    credentials: true, 
    name: '$id', 
    resave: false,
    saveUninitialized: false, 
    cookie: {
        secure: process.env.ENVIRONMENT == 'production',
        httpOnly: true, 
        sameSite: process.env.ENVIRONMENT === 'production' ? 'none' : 'lax'
    }
})
)

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
    let outcome = false;
    let data = req.body;
    
    let response = await db.readColumn('SELECT username, senha FROM userData')
    if (response.rows.length == 0) { outcome = false }
    response.rows.forEach((row) => {

        if (row.username == data.user && row.senha == data.password) {
            outcome = true
            req.session.user = {
                'id': row.id,
                'username': row.username
            }
        }
    })


    let text = outcome ? 'Login bem sucedido' : 'Login mal sucedido'

  
    return res.json({
        result: outcome, 
        message: text,
        formData: data,
        cookie: req.session
    })

})


app.use(cors());
app.use(express.json());

app.use('/register', register)
app.use('/login', login)


app.listen('8080', () => {
    db.createTable()
    console.log('Servidor executando')
})