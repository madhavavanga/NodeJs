var EventEmitter = require("events").EventEmitter;
var ee = new EventEmitter();

ee.addListener("infinite", function(message){
    console.log("Infinite Event sent me "+ message );
});

var si = setInterval(function(){
    ee.emit("infinite", "My Secret Info");
    clearInterval(si);
},2000)