router_1 = express.Router()

router_1.post('/', async (req, res) => {
    let data = req.body
    db.createColumn(data, `INSERT INTO userData (username, email, senha) VALUES ($1, $2, $3)`)
    return res.json({
        error: false, 
        message: 'Mensagem',
        formData: data
    })
})

module.exports = router_1