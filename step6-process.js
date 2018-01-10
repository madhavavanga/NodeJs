var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();
var si;
var count = 1;

process.nextTick(function(){
   si =  setInterval(function(){
        ee.emit("infinite", "My Secret Info");
        count++;

        if(count > 5){
            clearInterval(si)
        };

        
    },2000);

});

ee.addListener("infinite", function(message){
    console.log("Infinite Event sent me "+ message );
});