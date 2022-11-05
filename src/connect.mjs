const mssql = require('mssql');
const db_info = require('./db.mjs');

export default connPool = mssql.connect(db_info).then(() => {
    console.log('Pool 생성')
})
.catch(err => {
    console.log('err', err)
})
