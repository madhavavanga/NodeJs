var fs = require("fs");
/*
fs.mkdir("temp", function(){
    console.log("directory was created");
    fs.writeFile("temp/temp.txt","welcome to your life, there's no turning back", function(){
        fs.exists("temp/temp.txt", function(){
            console.log("file and folder found");
            fs.appendFile("temp/temp.txt", " even while you sleep we will find you acting on your best behaviour", function(){
                console.log("changed..")
            })
        })
    });
});
*/
fs.mkdir("temp", function(){
    console.log("temp directory was created");
    console.log("we are currently at " , process.cwd() );
    process.chdir("temp");
    console.log("we are currently at " , process.cwd() );
    process.chdir("../");
    console.log("we are currently at " , process.cwd() );
    fs.rmdir("temp", function(){
        console.log("temp directory was removed")
    });
})