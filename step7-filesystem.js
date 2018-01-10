var fs = require("fs");

fs.mkdir("temp", function(){
    console.log("directory was created");
});

setTimeout(function(){
    fs.rmdirSync("temp");
    console.log("directory was removed");
}, 5000);