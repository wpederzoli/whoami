var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');
var useragent = require('express-useragent');

var app = module.exports = express();

app.use(bodyParser.json());
app.use(cors());
app.use(useragent.express());

var api = '/api/whoami';

app.get('/', function(req, res, next){
  res.redirect(api)
});

app.get(api, function(req, res, next){
  var ipAddress = req.ip;
  var language = req.acceptsLanguages();
  var software = req.useragent;
  
  res.json({ip: ipAddress, language: language[0], OS: software.os})
});

app.listen(process.env.PORT, function(){
  console.log('listening!');
});