
const { Pool } = require('pg')

const db = new Pool({
  host: 'localhost',
  database: 'lerumlivro',
  user: 'postgres',
  password: 'root',
  max: 20
})

function database() {
    async function createTable() {
 
        try {
      
          await db.connect()
      
          const query = `CREATE TABLE IF NOT EXISTS userData (
            ID serial PRIMARY KEY,
            username VARCHAR(50) NOT NULL,
            email VARCHAR(50) NOT NULL UNIQUE,
            senha VARCHAR(25) NOT NULL
          );
          `

          await db.query(query)
        }
        
        catch(err) { 
            console.log(err)
        }
    }
    
    async function createColumn(data, custom_query) {

        var data_values = []
    
        Object.keys(data).forEach((item) => {
            data_values.push(String(data[item])) // Pegando os valores do dicionário, convertendo todos para STRING e armazenando em um array
        })
    
        try {
            await db.connect()
            await db.query(custom_query, data_values)
        }

        catch(err) {
            console.log(err)
        }
        
    }

    return { createTable, createColumn}
}

module.exports=  database
