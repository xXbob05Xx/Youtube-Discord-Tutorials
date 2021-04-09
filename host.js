const express = require('express');
const server = express();
const colors = require('chalk');

server.all('/', (req, res)=>{
    res.send(`Host Status : \nonline`)
})
function keepAlive(){
    server.listen(3000, ()=>{console.log(`Host:` + colors.green`Online`)});
}
module.exports = keepAlive;