const fetch = require("node-fetch");
var http = require('http');
const { response } = require("express");

const url = 'https://interview.adpeai.com/api/v1/get-task';
const url1 = 'https://interview.adpeai.com/api/v1/submit-task';

  http.createServer(function (req, res) {
    var out = 'Hello World!';
    fetch(url)
    .then(response =>response.json())
    .then(data => {
        console.log(data);
        let temp = {};
        temp.id = data.id;
        temp.result = data.left - data.right
        console.log(temp);
        fetch(url1,{
            method:"POST",
            body:JSON.stringify(temp)
        }).then(response => response.text().then(
            response => {
                console.log(response);
                res.writeHead(200, {'Content-Type': 'text/plain'});
                res.write(response);
                res.end();
            }
        ))
    }).catch(e => console.log(e));
}).listen(3000);
