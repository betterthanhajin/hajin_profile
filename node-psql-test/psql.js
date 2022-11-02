const { Client } = require("pg");
const client = new Client({
    user: "dbpurenarim",
    host: "db.hajin.co.kr",
    database: "nodedb",
    password: "사용자비밀번호",
    port: 5432,
});
client.connect();
client.query("SELECT NOW()", (err, res) => {
    console.log(err, res);
    client.end();
});