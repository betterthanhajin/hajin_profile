const { sql, pool } = require('./db');
console.log("sql", sql);
module.exports = function(app)
{
    app.get('/', async (req,res) => {
        try{
        const pool = pool;
        const result = "aaa";
        res.send(result);
        } catch(err) {
            res.status(500);
            res.send(err.message);
        }
    });

    app.get('/index', async(req,res) => {
        console.log('index.html request');
        res.send('index.html');
    });
}