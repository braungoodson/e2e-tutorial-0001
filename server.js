var express = require('express'),
  server = express(),
  port = process.env.PORT || 3000,
  staticRoot = __dirname;


server.use('/', express.static(staticRoot));
server.listen(port);
console.log('server up on port '+port);