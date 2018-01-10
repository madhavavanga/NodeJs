var http = require("http");
var fs = require("fs");

var port = 1234;
var host = "localhost";


var server = http.createServer(function(req, res){
    res.writeHead(200, {
        "Content-Type":"text/html"
    });
    res.write("hello there");
    console.log(req.url);
    if(req.url === "/index.html"){
        var data = fs.readFileSync("./text.html");
        res.write(data+"")
    };

    res.end();
});

server.listen(port, host, function(error){
   if(error){
    console.log(error)
   }else{
    console.log("server created on localhost:1234");
   }
});

