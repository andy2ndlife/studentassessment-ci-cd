var express = require('express');
 
var app = express();
app.get('/', function (req, res) {
 res.send('Simple CI/CD integration for Student Assessment POC');
});
app.listen(process.env.PORT || 3004);
 
module.exports = app;