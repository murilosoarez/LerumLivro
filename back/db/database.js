
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

          const query_2 = `CREATE TABLE IF NOT EXISTS reads (
            ID serial PRIMARY KEY, 
            title VARCHAR(50) NOT NULL,
            author VARCHAR(50) NOT NULL,
            pages INT,
            review VARCHAR(200) NOT NULL, 
            "check" VARCHAR(10) NOT NULL, 
            id_user INT NOT NULL
          );`

          await db.query(query)
          await db.query(query_2)

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

    async function readColumn(custom_query) {

        let result ;

        try {
            await db.connect();
            result = db.query(custom_query);
        }
        catch(err) {
            return err 
        }
        finally {
            return result
        }

    }

    return { createTable, createColumn, readColumn }
}

module.exports=  database
