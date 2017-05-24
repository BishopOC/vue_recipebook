const express = require('express');
const server = express();
const port = process.env.PORT || 8080;
const axios = require('axios');

server.use(express.static(__dirname + '/public'));

server.get('/', function(req, res){
  res.sendFile('index.html', {root: __dirname + '/public/html'});
});

server.listen(port, function(){
  console.log('Now listening on port...', port);
});
