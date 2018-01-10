var fs = require("fs");
fs.writeFile("temp.txt","welcome to your life, there's no turning back", function(){
        console.log("file ready")
});

setTimeout(function(){
    fs.readFile("temp.txt", function(error, data){
        if(error){
            console.log(error)
        }else{
            console.log(data+"");
        };
    })
},2000)