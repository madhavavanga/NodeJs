let express = require("express");
let app = express();
app.use(express.static(__dirname));
app.listen(3030);
console.log("server is now running on port 3030");