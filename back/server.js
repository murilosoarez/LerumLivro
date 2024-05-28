const express = require('express');
const database = require('./db/database');
const cors = require('cors');
const helmet = require('helmet');
const session = require('express-session');
app = express();
const server = require("http").createServer(app);
const {Server} = require("socket.io");

const io = new Server(server, {
    cors: {
      origin: "http://localhost:3000",
      credentials: "true",
    },
});

app.use(helmet())

const dotenv = require("dotenv").config();

const db = database();

const register = express.Router();
const login = express.Router();


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
    
    let response = await db.readColumn('SELECT username, senha FROM userData');
    if (response.rows.length == 0) { outcome = false }

    response.rows.forEach((row) => {
        if (row.username == data.user && row.senha == data.password) {
            outcome = true;
            req.session.user = {
                'username': row.username
            }
        }
    })
    
    let text = outcome ? 'Login bem sucedido' : 'Login mal sucedido';
    return res.json({
        loggedIn: outcome,
        user: data.user,
        message: text
    });

});

login.get('/', async (req, res) => {
    if (req.session.user && req.session.user.username) {
      return res.json({ loggedIn: true, username: req.session.user.username });
    } else {
      return res.json({ loggedIn: false });
    }
})



app.use(cors(
        {
            origin: "http://localhost:3000",
            credentials: true,
        }
    )
);

app.use(express.json());
app.use(
    session({
      secret: process.env.COOKIE_SECRET,
      credentials: true,
      name: "sid",
      resave: false,
      saveUninitialized: false,
      cookie: {
        path: '/',
        secure: process.env.ENVIRONMENT === "production" ? "true" : "auto",
        httpOnly: true,
        expires: 1000 * 60 * 60 * 24 * 7,
        sameSite: process.env.ENVIRONMENT === "production" ? "none" : "lax",
      },
    })
  );

app.use('/register', register)
app.use('/login', login)





io.on("connect", socket => {});
app.listen('8080', () => {
    db.createTable()
    console.log('Servidor executando')
})