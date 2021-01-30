
var http = require('http');
const port=3000
const url = require('url');
const fs = require('fs');
let list =require('./db.json');
let table=`<table id='table'> <th>title</th> <th>status</th><th>Description</th>` ;
list.notes.forEach((value,index)=>{
    table += `<tr><td>${value.title}</td><td>${value.status}</td><td>${value.desc}</td></tr>`  ;
})
table+=`</table>`

const server =http.createServer(function(req,res){
    console.log(req.url);
    if(path.includes(".css")){        
        let css = fs.readFileSync(`.${req.url}`);
        res.setHeader('content-type', 'text/css');
        res.write(css);
        res.end();
    }
    else{
        res.writeHead(200,{'Content-Type': 'text/html'});
      res.write( `<html>
      <head>
          <style>
          </style>
          <link rel="stylesheet" type="text/css" href="./homaPage.css" />
         
      </head>
      <body>

                  ${table}
              
      </body>
  </html>`);
        res.end();
    }
    
    })
  
   

server.listen(port)


