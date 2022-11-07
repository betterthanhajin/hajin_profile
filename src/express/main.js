const { sql, pool } = require('./db');

module.exports = function(app)
{
    app.get('/', async (req,res) => {
        try{
        const pool = await pool;
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