const fetch = require("node-fetch");
var http = require('http');

const url = 'https://interview.adpeai.com/api/v1/get-task';
const url1 = 'https://interview.adpeai.com/api/v1/submit-task';

var out = "";
// setInterval(() => {
//     console.log('Wait for 2 second...')
   
//     fetch(url)
//     .then(response =>response.json())
//     .then(data => {
    // temp.id = data.id;
    // if(data.operation.includes('subtraction')){
    //     temp.result = data.left - data.right;
    // }else if(data.operation.includes('addition')){
    //     temp.result = data.left + data.right;
    // }else if(data.operation.includes('multiplication')){
    //     temp.result = data.left * data.right;
    // }else if(data.operation.includes('reminder')){
    //     temp.result = data.left % data.right;
    // }else if(data.operation.includes('division')){
//       temp.result = data.left / data.right;
//    }
//         fetch(url1,{
//             method:"POST",
//             body:JSON.stringify(temp)
//         }).then(response => response.text().then(
//             response => {
//                 console.log(response);
//                 res.writeHead(200, {'Content-Type': 'text/plain'});
//                 res.write(response);
//                 res.end();
//                 out = out +response;
//             }
//         ))
//     })// Print error message if occur
//      .catch(error => console.log(
//              'Error to fetch data\n'))
//  }, 2000)

const server = http.createServer();
server.on('request',async(req,res) => {

})
  http.createServer(function (req, res) {
        fetch(url)
        .then(response =>response.json())
        .then(data => {
            console.log(data);
            let temp = {};
            temp.id = data.id;
            if(data.operation.includes('subtraction')){
                temp.result = data.left - data.right;
            }else if(data.operation.includes('addition')){
                temp.result = data.left + data.right;
            }else if(data.operation.includes('multiplication')){
                temp.result = data.left * data.right;
            }else if(data.operation.includes('reminder')){
                temp.result = data.left % data.right;
            }else if(data.operation.includes('division')){
                temp.result = data.left / data.right;
            }
            console.log(temp);
            fetch(url1,{
                method:"POST",
                body:JSON.stringify(temp)
            }).then(response => response.text().then(
                response => {
                    console.log(response);
                    res.writeHead(200, {'Content-Type': 'text/plain'});
                    console.log(response);
                    res.write(response);
                    res.end();
                }
            ))
        })// Print error message if occur
         .catch(error => console.log(
                 'Error to fetch data\n'))
}).listen(3000);
