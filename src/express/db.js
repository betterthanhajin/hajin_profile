const sql = require('mssql');

const config = {
    server: 'db.purenarim.gabia.io',
    port: 1433,
    options: { encrypt:false, database: 'dbpurenarim' },
    authentication:{
        type:"default",
        options:{
            userName:"purenarim",
            password:"wownd1210**"
        }
    }
};

const pool = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
    console.log('Connected to MSSQL')
    return pool
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err))

module.exports = {
    sql, pool
}