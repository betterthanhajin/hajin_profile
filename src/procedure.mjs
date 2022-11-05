const connPool = require('./connect.mjs');
const pool = connPool

pool.request().input('name', '홍길동')
.output('phone_number')
.execute('[프로시저명]')
.then(result => {
    console.log("result", result);
})